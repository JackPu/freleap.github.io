// home.js
define(['app'], function (app) {  
    app.controller('HomeCtrl', function ($scope,$routeParams,$http,$location) {  
        $scope.init = function() {
            var blocks = document.querySelectorAll('pre code');
            for(var i=0;i<blocks.length;i++) {
                
                hljs.highlightBlock(blocks[i]);    
            }
        }
        $scope.init();
    });
}); 
