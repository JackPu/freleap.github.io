// module.js
define(['app','ngload!pagination'], function (app) {  
    app.controller('ModuleCtrl', function ($scope,$routeParams,$http,$location) {  
        
        $scope.list = [];
        $scope.totalCount = 100;
        $scope.init = function() {
            var blocks = document.querySelectorAll('pre code');
            for(var i=0;i<blocks.length;i++) {
                
                hljs.highlightBlock(blocks[i]);    
            }
            $scope.refresh();
        };
        
        $scope.refresh = function() {
            var list = [];
            for(var i = 0;i<10; i++){
                list.push({
                    'name': 'Naruto',
                    'sex': 'man',
                    'age': parseInt(Math.random() * 100)
                });
            }
            $scope.list = list;
        };
        
        $scope.pageChangeEvent = function(num) {
            $scope.pageno = num;
            $scope.refresh();
        };
        
        $scope.viewOldEvent = function() {
            alert(this.item.name + ' is ' + this.item.age + ' years old!');
        }
        
        
        $scope.init();
    });
}); 
