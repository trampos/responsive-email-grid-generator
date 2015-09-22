import Ember from 'ember';

export default Ember.Mixin.create({

 	setup: function() {

    }.on('didInsertElement'),

    onSelectedChange: function(){
		var selected = this.get('selected');
		if(selected){
			
		} else {

		}
	}.observes('selected')
});
