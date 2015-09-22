import Ember from 'ember';
import Draggable from 'npm:gsap/src/uncompressed/utils/Draggable';

export default Ember.Component.extend({
	classNames:['grid-tools'],
	
	setup: function(){
		this.$().css({ position: 'absolute', top:20, left:20 });
		Draggable.create(this.$(), { type:"top,left", bounds:this.$().parent(), throwProps:true});
	}.on('didInsertElement'),

	actions: {
		delete: function(){
			this.sendAction('delete', this.get('target'));
		}
	}
});
