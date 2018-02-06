/** 导航菜单 **/

define(['angularAMD'], function (angularAMD) {

    var list =  [
                    {
                        name: '首页',
                        url: 'home',
                    },
                    {
                        name: '引入SVG',
                        url: 'display-svg',
                    },
                    {
                        name: 'g 元素',
                        url: 'ele-g',
                    },
                    {
                        name: 'rect 元素',
                        url: 'ele-rect',
                    },
                    {
                        name: 'circle, ellipse 元素',
                        url: 'ele-circle-and-ellipse',
                    },
                    {
                        name: 'line,polyline 元素',
                        url: 'ele-line-and-polyline',
                    },
                    {
                        name: 'polygon 元素',
                        url: 'ele-polygon',
                    },
                    {
                        name: 'path 元素',
                        url: 'ele-path',
                    },
                    {
                        name: 'marker 元素',
                        url: 'ele-marker',
                    },
                    {
                        name: 'text 元素',
                        url: 'ele-text',
                    },
                    {
                        name: 'defs 元素',
                        url: 'ele-defs',
                    },
                    {
                        name: 'symbol , use 元素',
                        url: 'ele-symbol-and-use',
                    },
                    {
                        name: 'viewbox 与 viewport 属性',
                        url: 'prop-viewbox-and-viewport',
                    },
                    {
                        name: 'svg 动画',
                        url: 'svg-animation',
                    },
                    {
                        name: 'svg icon',
                        url: 'svg-icon',
                    },
                    {
                        name: 'svg animation icon',
                        url: 'svg-icon-animation',
                    },
                    {
                        name: '持续完善',
                        url: 'others',
                    },
                ];   
    angular.module('Vued.cat', [] )
        .directive('cat', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
            },
            templateUrl: './js/templates/cat.tpl.html',
            controller: function ($scope ) {
                
                $scope.list =  list;   
            }
        };
    })
    
    .factory('catset',function($location){

        return function() {
            list.map(function(item) {
                if(item.url == location.hash.replace('#/','')) {
                    item.active = true;
                }else{
                    item.active = false;
                }
            });
            
        }
    });
    
    
});