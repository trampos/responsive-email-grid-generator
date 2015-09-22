import Ember from 'ember';

export default Ember.Component.extend({
	tagName:"table",
	classNames: ["main-grid"],
	cellspacing: 0,
	attributeBindings: ['style:style', 'width', 'cellspacing', 'cellPadding:cellpadding'],
	width:"100%",

	style: function(){
		var style = [];
		if(this.get('maxWidth')) style += `max-width:${this.get('maxWidth')}px;`;
		return style;
 	}.property('maxWidth'),

 	cellPadding: function(){
		return this.get('gap') / 2;
	}.property('gap'),

	actions: {
		selectRow: function(row){
			this.sendAction("selectItem", row);
		}
	}
});
