// home.js
define(['app'], function (app) {  
    app.controller('SvgIconAnimationCtrl', function ($scope,$routeParams,$http,$location) {  
        $scope.init = function() {
            var blocks = document.querySelectorAll('pre code');
            for(var i=0;i<blocks.length;i++) {
                
                hljs.highlightBlock(blocks[i]);    
            }
            
            var animationToCheck = document.getElementById("animation-to-check");
            var animationToReset = document.getElementById("animation-to-reset");
            document.querySelector('.btn-start').addEventListener('click',function(){
                animationToCheck.beginElement();   
            });

            document.querySelector('.btn-reset').addEventListener('click',function(){
                animationToReset.beginElement();   
            });

            $('.btn-toggle').on('click',function(){

                if($(this).attr('data-animated') == '1'){
                    $(this).attr('data-animated',0);
                    document.querySelector('#arrow-right').beginElement();
                }else{
                    $(this).attr('data-animated',1);
                    document.querySelector('#arrow-left').beginElement();
                }
            })
            
            
        }
        $scope.init();
    });
}); 

    