import Ember from 'ember';
import HoverEffectMixin from 'responsive-email-grid-generator/mixins/hover-outline';
import TargetApplicationActionsMixin from 'responsive-email-grid-generator/mixins/target-application-actions';

export default Ember.Component.extend(HoverEffectMixin, TargetApplicationActionsMixin, {
	tagName: "table",
	classNames: "nested-responsive",
	cellspacing: 0,
	attributeBindings: ['style:style', 'width', 'cellspacing', 'cellPadding:cellpadding'],
	width:"100%",

	colsArray: function(){
		var list = [];
		for (var i = 0; i < this.get('row.cols'); i++) {
		    list.push(i);
		}
		return list;
	}.property('row.cols'),

	click: function(){
		console.log("TENTANDO SELECT")
		this.send("selectItem", this.get('row'));
	},

 	cellPadding: function(){
		return this.get('gap') / 2;
	}.property('gap')
});
