import Ember from 'ember';
import Row from 'responsive-email-grid-generator/models/row';

export default Ember.Controller.extend({
	maxWidth: '600',
	breakpoint: '600',
	gap: 10,
	rows: Ember.A([]),
	mediaQuerySupport: 'on',

	actions: {
		addRow: function(){
			var newRow = Row.create({
				cols: 1, 
				responsive: true
			});

			this.get('rows').pushObject( newRow );
			this.set('selectedItem', newRow);
		},

		removeRow: function(row){
			this.get('rows').removeObject(row);
		},
		
		toggleMediaQuerySupport: function() {
			this.set('mediaQuerySupport', this.get('mediaQuerySupport') == 'on' ? 'off' : 'on');
		},
		
		selectItem: function(item){
			console.log("SELECT")
			this.set('selectedItem', item);
		}
	}
});
