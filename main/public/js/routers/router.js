define(['backbone', 'jquery', 'modules/log', 'views/wrapper', 'flexslider'], function(Backbone, $, log, Wrapper, flexslider){
	
	new Wrapper();
	
	var Router = Backbone.Router.extend({
		initialize: function(){
			Backbone.history.start();
		},
		routes: {
			'': 'index'
		},
		index: function(){
			
			console.log('Router --> index()');
			
			$('.flexslider').flexslider({
				animation: 'fade',
				animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
				slideshow: true,                //Boolean: Animate slider automatically
				slideshowSpeed: 2000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
				animationSpeed: 700,             //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
				pauseOnHover: true, 
				pauseOnAction:false,
				controlNav: true,
				directionNav: false,
				controlsContainer: '.flex-container'
			});
			
		}
	});
	
	return Router;
	
});