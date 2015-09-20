import Ember from 'ember';

export default Ember.Component.extend({
	tagName:"table",
	classNames: ["main-grid"],
	attributeBindings: ['style:style', 'width', 'cellPadding:cellpadding'],
	width:"100%",

	style: function(){
		var style = [];
		if(this.get('maxWidth')) style += `max-width:${this.get('maxWidth')}px;`;
		return style;
 	}.property('maxWidth'),

 	cellPadding: function(){
		return this.get('gap') / 2;
	}.property('gap')
});
