import Ember from 'ember';
import Draggable from 'npm:gsap/src/uncompressed/utils/Draggable';

export default Ember.Component.extend({
	classNames:['grid-tools'],
	
	setup: function(){
		console.log(this.$().parent())
		Draggable.create(this.$(), { type:"x,y", bounds:this.$().parent(), throwProps:true});
	}.on('didInsertElement')
});
