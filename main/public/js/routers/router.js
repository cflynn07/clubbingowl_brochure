define(['backbone', 'jquery', 'modules/log', 'views/wrapper', 'flexslider'], function(Backbone, $, log, Wrapper, flexslider){
	
	new Wrapper();
	
	var Router = Backbone.Router.extend({
		initialize: function(){
			Backbone.history.start({
				pushState: 	true,
				hashChange: false
			});
		},
		routes: {
			'about*splat':			'about',
			'blog*splat': 			'blog',
			'contact*splat': 		'contact',
			'faq*splat': 			'faq',
			'features*splat':		'features',
			'*splat': 				'index'
		},
		about: function(){
			
			log('about');
			
		},
		blog: function(){
			
			log('blog');
			
		},
		contact: function(){
			
			log('contact');
			
		},
		faq: function(){
			log('faq');
			
			$('#toggle-view li').click(function(){
								
				var text = $(this).children('div.panel');
				
				if (text.is(':hidden')) {
					text.slideDown('200');
					$(this).children('span').html('-');
				} else {
					text.slideUp('200');
					$(this).children('span').html('+');
				}
			});
			
		},
		features: function(){
			
			log('features');
			
		//	_gaq.push(['_trackPageview']);
			
			
			
		},
		index: function(){
			
			log('index');
			
		//	_gaq.push(['_trackPageview']);
			
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