import Ember from 'ember';
import Row from 'responsive-email-grid-generator/models/row';

export default Ember.Controller.extend({
	maxWidth: '600',
	breakPoint: '600',
	gap: 10,
	rows: Ember.A([ Row.create({ cols: [0,1], responsive: true }) ]),
	mediaQuerySupport: 'on',

	actions: {
		addRow: function(){
			this.get('rows').pushObject( Row.create({
				cols: [0,1], 
				responsive: false
			}));
		},
		toggleMediaQuerySupport: function() {
			this.set('mediaQuerySupport', this.get('mediaQuerySupport') == 'on' ? 'off' : 'on');
		}
	}
});
