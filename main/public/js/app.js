requirejs.config({
	baseUrl: '/js/',
	paths: {
		jquery: 		'libs/jquery',
		underscore: 	'libs/underscore',
		backbone: 		'libs/backbone',
		history: 		'libs/history',
		carousel:		'libs/carousel',
		eislideshow:	'libs/jquery.eislideshow',
		flexslider:		'libs/jquery.flexslider',
		ganalytics: 	'modules/ganalytics'
	},
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        backbone: {
        	deps: 		['underscore', 'jquery'],
        	exports: 	'Backbone'
        },
        history: {
        	deps: 		['jquery'],
        	exports: 	'History'
        },
        carousel: {
        	deps: 		['jquery'],
        	exports: 	'carousel'
        },
        eislideshow: {
        	deps:		['jquery'],
        	exports:	'eislideshow'
        },
        flexslider: {
        	deps:		['jquery'],
        	exports:	'flexslider'
        },
        ganalytics: {
        	expors:		'_gaq'
        }
    }
});

require(['routers/router', 'jquery', ], function(Router, $){

	$(function(){
				
		//and we're off
		new Router();
		
	});
	
});
