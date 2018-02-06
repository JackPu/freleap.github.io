// controller.js
define(['app'], function (app) {  
    app.controller('ControllerCtrl', function ($scope,$routeParams,$http,$location) {  
        $scope.list = false;
        $scope.init = function() {
            var blocks = document.querySelectorAll('pre code');
            for(var i=0;i<blocks.length;i++) {
                
                hljs.highlightBlock(blocks[i]);    
            }
        }
        $scope.refresh = function() {
            var url = 'http://api.geonames.org/postalCodeLookupJSON?postalcode=6600&country=AT&username=demo';
            
            $http.get(url).
              success(function (data, status, headers, config) {
                  $scope.list = data.postalcodes;
              }).
              error(function (data, status, headers, config) {
                   $scope.list = false;
              });
        }
        
        $scope.clickEvent = function(e) {
            $scope.refresh();
        }
        
        $scope.init();
    });
}); 
