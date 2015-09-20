import Ember from 'ember';

export default Ember.Mixin.create({

 	setup: function() {
        this.$().on('mouseenter', Ember.run.bind(this, this.mouseenter));
        this.$().on('mouseleave', Ember.run.bind(this, this.mouseleave));
    }.on('didInsertElement'),

    mouseenter: function(event){
		var rect = Ember.$('<div></div>');
		var label = Ember.$('<div></div>');
		var bounds = this.$().get(0).getBoundingClientRect();

		label.html(this.get('hoverLabel'));
		label.css({ 
			backgroundColor: 	'#BFD5EA',
			color: 				'#fff',
			fontSize: 			'10px',
			position: 			'absolute',
			lineHeight: 		'11px', 
			padding: 			'2px 5px', 
			top: 				-15,
			right: 				0 });

		rect.append(label);

		rect.css({ 
			border:'1px solid #BFD5EA',
			position:'fixed', 
			pointerEvents: 'none',
			bottom: bounds.bottom, 
			height: bounds.height, 
			left: 	bounds.left, 
			right: 	bounds.right, 
			top: 	bounds.top, 
			width: 	bounds.width });

		Ember.$('body').append(rect);
		this.set('rect', rect);
	},

	mouseleave: function(event){
		this.get('rect').remove();
	},

    willDestroyElement: function() {
        this.$().off('mouseenter mouseleave');
    }
});
