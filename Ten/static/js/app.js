/**app.js**/
define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute']);
    
    var GL = 0;
    app.config(function ($routeProvider) {
        $routeProvider.when("/home", angularAMD.route({
            templateUrl: './doc-list.html'
        }))
        .when("/shell-intro", angularAMD.route({
            templateUrl: './shell-intro.html'
        }))
        .when("/shell-first", angularAMD.route({
            templateUrl: './shell-first.html'
        }))
        .when("/shell-variable", angularAMD.route({
            templateUrl: './shell-variable.html'
        }))
        .when("/shell-caculator", angularAMD.route({
            templateUrl: './shell-caculator.html'
        }))
        .otherwise({redirectTo: "/home"});
    });
    
    app.controller('HomeCtrl', function ($scope) {
        // 文章目录
        
        
        $scope.index = 0;
        $scope.title = '开始学习shell';
        $scope.items = [
            {
                'title': '开始学习SVG',
                'hash': 'home'
            },
            {
                'title': 'svg与g标签',
                'hash': 'svg-el-and-g'
            }
            
        ];
        
        
       
        $scope.MAX = $scope.items.length;
        
        $('.bt-menu-trigger').toggle(function(){
            $(this).parent().addClass('bt-menu-open');
            $('.over-layout').addClass('active');
            $('header').addClass('transprent');
            $('#page').addClass('blur');
        },function(){
            $(this).parent().removeClass('bt-menu-open');
            $('.over-layout').removeClass('active');
            $('header').removeClass('transprent');
            $('#page').removeClass('blur');
        });
        
        $scope.select = function(e,item){
            $scope.title = $(e.target).text();   
            $('.bt-menu-trigger').parent().removeClass('bt-menu-open');
            $('.over-layout').removeClass('active');
            $('header').removeClass('transprent');
            $('#page').removeClass('blur');
        }
       
    
    });
    return angularAMD.bootstrap(app);
});