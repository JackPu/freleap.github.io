/*
 * 
 * 
 * @vevrsion 20130311
 */
$(document).ready(function(){
	//tab
	/*if($.cookie('share') =="true"){
		
		$(".bg").hide();
	}*/
	$("#i_wd").click(function(){
		$("#wd").animate({"margin-top":"-670"},500);
		$(".sight").removeClass("sight");
		$(this).addClass("sight");
	});
	$("#i_wp").click(function(){
		$("#wd").animate({"margin-top":"60"},50);
		$(".sight").removeClass("sight");
		$(this).addClass("sight");
	});
	//pupupbox
	$(".close").click(function(){
		
		$(".bg").hide(300);
		/*if($.cookie('share')){
			
			
		}else{
			$.cookie("share", "true"); 
		}*/
	});
	//share
	
	var title = "《西游降魔篇》问鼎全球华语票房冠军";
	var pic_src = "http://www.geekdoing.com/piaofang/share/images/zxc02.png"	;
	var url ="http://www.geekdoing.com/piaofang/apps/index.php";
	var comt ="西游降魔篇官方微博确认华语全球票房第一西游己拿下，大中华区票房第一，西游也拿下，内地的第一无所谓了啦，西游V5!西游提前锁定华语片排名NO.1:西游全华语第一，卧虎第二，泰窘第三！";
	
	//weibo 
	$(".weibo").click(function(){
		window.open('http://v.t.sina.com.cn/share/share.php?appkey=1671626741&url='+url+'&amp;&title='+title+'&amp;&pic='+pic_src+'&amp;source=bookmark','_blank','width=450,height=400');
		
	});
	$(".tieba").click(function(){
		window.open("http://tieba.baidu.com/f/commit/share/openShareApi?title="+title+"&desc="+comt+"&comment="+comt+"&pic="+pic_src+"&url="+url);
		
	});
	
	
	
	$(".vote").click( function vote(){
		$id = $(this).attr("id");
		$vote = $(this).parent().next().text();
		var vote_box = $(this).parent().next();
		$id = parseInt($id.substr(4));
		$vote = parseInt($vote);
		//alert($vote);
		$.post("vote.php",
				  {
				    id:$id,
				    vote : $vote
				  },
				  function(data){
				    vote_box.html(data);
				   // alert(data);
		
		
	})
	});
});


