// JavaScript Document

$(document).ready(function(e) {
  // test HTML5
 if (!document.getElementById("Canvas").getContext) {         
    $("#notHtml5").show();    
   }     
   
   var wH = parseInt($(window).height());
   $("#down").click(function(){
   	    $(this).animate({'bottom':"-240px"},800,function(){
   	    	$("#wrap").animate({"scrollTop":wH},300)
   	    });
   	    
   });
   $("a[rel=example_group]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});

   DrawArc("canvasPs","#298ab2",0.7);
   DrawArc("canvasCss","#fa72d2",0.8);
   DrawArc("canvasHtml","#fff",0.7);
   DrawArc("canvasJq","#383838",0.6);
   DrawArc("canvasPhp","#66a5ba",0.5);
   DrawArc("canvasAsp","#bf73e3",0.5);
   DrawArc("canvasSns","#3784ba",0.4);
   DrawArc("canvasMobile","#2fcc71",0.3);


   var music = document.getElementById("bgMusic");
   $(".skill").hover(function a(){
   		$(this).children("span").fadeOut(300);
   		$(this).children("canvas").fadeIn(300);
   		music.play();
   		

   },function b(){
       $(this).children("span").fadeIn(300);
       $(this).children("canvas").fadeOut(300);
       music.pause();
       music.currentTime = 0;

   });
   // scroll
   $("#wrap").scroll(function(){
  
   var sH =  parseInt($("#wrap").scrollTop());
   if(sH >= wH){
  		$("#header").slideDown(200);

   }

   else{$("header").slideUp(200);}

   if(sH  == 4*wH) { 
   	  
   	    		$(".arrow").animate({"top":"100px"},700,function(){ 
   			    $(".arrow ,.sun").animate({"top":"600px"},1000,dayChange());
   		  });
   	    
   	
   }
   
   });

   $(".close").click(function(){ 
   		$("#p-bg").fadeOut(300);
   })
   // music
   var myMusic =  document.getElementById("bgMusic");

   $(".musicCtl").toggle(function a(){
	   // alert("helo");
		$(this).text("p");
		
		myMusic.pause();
	},function b(){
	    $(this).text("c");
		myMusic.play();
	});    
    //PC CODE
    var pcAnimation = setInterval("showHide()",800);
   var animation2 = setInterval("fishAniamtion()",9000);
	
	
	
	
});


function windShow( c_sh ){
     c_sh = "#w"+ c_sh.toString();
	 var c_window = $(c_sh);
	 c_window.children(".title").animate({opacity:"1"},300) ;	
	
	}
function windowHide(){
     $(".page").children().attr("style","");	
	}	
	
function showHide(){ 
	$("#showHide").show();
	$("#showHide").hide(800);
}	

function fishAniamtion(){ 
	
	$(".fish").animate({"left":"-100%"},9000,function(){$(".fish").css({"left":"100%"}); });
	
}
function dayChange(){ 
	$(".arrow").remove();
	$(".blackSky").fadeIn(5000);
	$(".moon").animate({"top":"120px","left":"160px"},5000,function(){$(".thanks").fadeIn(4000);})
}
function DrawArc(id,color,percent){ 
	var canvas = document.getElementById(id);
	var context = canvas.getContext("2d");
	context.stroke();
	var centerX = 75;
	var centerY = 75;
	var radius = 70;
	var startAngle = 0.5 * Math.PI;
	var endAngle = startAngle + percent* 2 * Math.PI;
	context.arc(centerX,centerY,radius,startAngle,endAngle,false);
	context.lineTo(75,75);
	context.closePath();
	context.fillStyle = color;
	context.shadowColor = "rgba(0,0,0,.2)";
	context.shadowBlur = 5;
	context.shadowOffsetX = -4;
	context.shadowOffsetY = 0;
	context.fill();
	context.fillStyle = "#444";
	context.font = "30px SimHei";
	var cText = percent * 100  + "%";
	context.fillText(cText,60,85);

}
	
	
	
	
	
	
	
	
	
	
	