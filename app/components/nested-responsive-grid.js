import Ember from 'ember';
import HoverEffectMixin from 'responsive-email-grid-generator/mixins/hover-outline';

export default Ember.Component.extend(HoverEffectMixin, {
	hoverLabel: "RESPONSIVE COLUMNS",
	tagName: "table",
	classNames: "nested-responsive",
	attributeBindings: ['style:style', 'width', 'cellPadding:cellpadding'],
	width:"100%",

 	cellPadding: function(){
		return this.get('gap') / 2;
	}.property('gap')
});
