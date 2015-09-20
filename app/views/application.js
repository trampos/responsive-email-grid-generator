import Ember from 'ember';
import JsBeautify from 'npm:js-beautify';

export default Ember.View.extend({
	writeMediaQuery: function(){

		if(this.get('controller.mediaQuerySupport') == 'on'){
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

			if($("#media-query").size() > 0)
				$("#media-query").replaceWith(style);
			else
				$("body").prepend(style);
		} else {
			$("#media-query").remove();
		}

	}.on('didInsertElement').observes('controller.breakPoint', 'controller.mediaQuerySupport'),

	prettifyCode: function(){
		var code = Ember.$('#main');

		// CLEAN CODE
		code.find('.ember-view').removeClass('ember-view');
		code.find('[id]').removeAttr('id');

		var beautify = JsBeautify.html_beautify;
		var prettify = Ember.$('<pre class="prettyprint"></pre>').text(beautify(code.html(), { indent_size: 2 }));
		
		console.log("PRETTIFYING", prettify)
		Ember.$('#code').empty().append(prettify);
		prettyPrint();
	}.observes('controller.maxWidth', 'controller.breakPoint', 'controller.gap', 'controller.rows.[]')
});
