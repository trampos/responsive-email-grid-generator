import Ember from 'ember';
import JsBeautify from 'npm:js-beautify';

export default Ember.View.extend({
	writeMediaQuery: function(){
		console.log(this.get('controller.mediaQuerySupport'), $("#media-query").size())
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
		var css = `@media screen and (min-width: ${this.get('controller.breakPoint')}px) { 
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
	}.property('controller.breakPoint'),

	prettifyCode: function(){
		Ember.run.scheduleOnce('afterRender', this, function(){
			var html = Ember.$('<html></html>');
			var head = Ember.$('<head></head>');
			var body = Ember.$('<body></body>');
			var code = Ember.$('#main').clone();

			head.append(this.get('mediaQuery').clone());
			body.append(code);
			html.append(head).append(body);

			// CLEAN HTML
			html.find('.ember-view').removeClass('ember-view');
			html.find('[id]').removeAttr('id');

			var beautify = JsBeautify.html_beautify;
			var prettified = Ember.$('<pre class="prettyprint lang-html linenums"></pre>').text(beautify(html[0].outerHTML, { indent_size: 2 }));

			Ember.$('#code').empty().append(prettified);
			prettyPrint();
		});
		
	}.on('didInsertElement').observes('controller.maxWidth', 'controller.gap', 'controller.rows.[]', 'mediaQuery')
});
