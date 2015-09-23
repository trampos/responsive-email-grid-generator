import Ember from 'ember';
import JsBeautify from 'npm:js-beautify';

export default Ember.View.extend({
	writeMediaQuery: function(){
		if(this.get('controller.mediaQuerySupport') == 'on'){
			if($("#media-query").size() > 0) {
				Ember.$("#media-query").replaceWith(this.get('mediaQuery').clone());
			} else {
				Ember.$("body").prepend(this.get('mediaQuery').clone());
			}
		} else {
			Ember.$("#media-query").remove();
		}
	}.on('didInsertElement').observes('controller.mediaQuerySupport', 'mediaQuery'),

	mediaQuery: function(){
		var css = `@media screen and (min-width: ${this.get('controller.breakpoint')}px) { 
			.nested-responsive > tbody { display:table-row; }
			.nested-responsive > tbody > tr { display:table-cell; }
			.nested-responsive > tbody > tr > td { display:block; }
		}`;

		var style 	= document.createElement('style');
		style.id 	= 'media-query';
		style.type 	= 'text/css';

		if (style.styleSheet){
		  style.styleSheet.cssText = css;
		} else {
		  style.appendChild(document.createTextNode(css));
		}

		return $(style);
	}.property('controller.breakpoint'),

	prettifyCode: function(){
		Ember.run.scheduleOnce('afterRender', this, function(){
			var doctype = ` <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`;
			var html = Ember.$('<html></html>').attr('xmlns', 'http://www.w3.org/1999/xhtml');
			var head = Ember.$('<head></head>');
			var body = Ember.$('<body></body>');
			var code = Ember.$('#main').clone();

			head.html(`<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			    <!--[if !mso]><!-->
			        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
			    <!--<![endif]-->
			    <meta name="viewport" content="width=device-width, initial-scale=1.0">
			    <title></title>
			    \n<!--[if (gte mso 9)|(IE)]>\n  <style type="text/css">\n    table {border-collapse: collapse;}\n  </style>\n  <![endif]-->\n
			`);

			head.append(this.get('mediaQuery').clone());
			body.append(code);
			html.append(head).append(body);

			// CLEAN HTML
			html.find('.ember-view').removeClass('ember-view');
			html.find('[id]').removeAttr('id');

			var beautify 	= JsBeautify.html_beautify;
			var prettified 	= beautify(`${doctype}\n${html[0].outerHTML}`, { indent_size: 2 })
			var pre 		= Ember.$('<pre class="prettyprint lang-html linenums"></pre>').text(prettified);

			Ember.$('#code').empty().append(pre);
			prettyPrint();
		});
		
	}.on('didInsertElement').observes('controller.maxWidth', 'controller.gap', 'controller.rows.@each.cols', 'mediaQuery')
});
