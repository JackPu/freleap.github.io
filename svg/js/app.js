// 入口文件
define(['angularAMD', 'angular-route','vued.cat','ng-progress'], function (angularAMD) {

    var app = angular.module("webapp", ['ngRoute','Vued.cat','ngProgress']);
    app.config(function ($routeProvider) {
        $routeProvider
        
            .when("/home", angularAMD.route({
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
        
            .when("/display-svg", angularAMD.route({
                templateUrl: 'views/display-svg.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/ele-g", angularAMD.route({
                templateUrl: 'views/ele-g.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/ele-rect", angularAMD.route({
                templateUrl: 'views/ele-rect.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/ele-circle-and-ellipse", angularAMD.route({
                templateUrl: 'views/ele-circle-and-ellipse.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/ele-line-and-polyline", angularAMD.route({
                templateUrl: 'views/ele-line-and-polyline.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/ele-polygon", angularAMD.route({
                templateUrl: 'views/ele-polygon.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/ele-path", angularAMD.route({
                templateUrl: 'views/ele-path.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/ele-marker", angularAMD.route({
                templateUrl: 'views/ele-marker.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/ele-text", angularAMD.route({
                templateUrl: 'views/ele-text.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/ele-defs", angularAMD.route({
                templateUrl: 'views/ele-defs.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/ele-symbol-and-use", angularAMD.route({
                templateUrl: 'views/ele-symbol-and-use.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/prop-viewbox-and-viewport", angularAMD.route({
                templateUrl: 'views/prop-viewport-and-viewbox.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/svg-animation", angularAMD.route({
                templateUrl: 'views/svg-animation.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/svg-icon", angularAMD.route({
                templateUrl: 'views/svg-icon.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            .when("/svg-icon-animation", angularAMD.route({
                templateUrl: 'views/svg-icon-animation.html',
                controller: 'SvgIconAnimationCtrl',
                controllerUrl: './js/controller/svg-icon-animation.js'
            }))
            
            .when("/others", angularAMD.route({
                templateUrl: 'views/others.html',
                controller: 'HomeCtrl',
                controllerUrl: './js/controller/home.js'
            }))
            

        .otherwise({
            redirectTo: "/home"
        });
    });
    
    
    /** route watch **/
    app.run(function($rootScope, ngProgressFactory,catset) {

        var ngProgress = ngProgressFactory.createInstance();

        $rootScope.$on('$routeChangeStart', function() {
            ngProgress.start();
            catset();
        });

        $rootScope.$on('$routeChangeSuccess', function() {
            // code highlight
            ngProgress.complete();
            document.querySelector('body').className ="";
            var blocks = document.querySelectorAll('pre code');
            for(var i=0;i<blocks.length;i++) {
                
                hljs.highlightBlock(blocks[i]);    
            }
            
        });
        
    });



    return angularAMD.bootstrap(app);
});