import Ember from 'ember';
import TargetApplicationActionsMixin from 'responsive-email-grid-generator/mixins/target-application-actions';

/*
 * RESPONSABILIDADES:
 *
 * - Tamanho do GRID
 * - Talvez cor de fundo
*/

export default Ember.Component.extend(TargetApplicationActionsMixin, {
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
		selectItem: function(row){
			console.log("PORRA?")
		}
	}
});
