// 
define(['jquery'],function (argument) {
	return {
		init: function(){
			console.log('loading...');
			$('.bt-menu-trigger').toggle(function(){
				$(this).parent().addClass('bt-menu-open');
				$('.over-layout').addClass('active');
			},function(){
				$(this).parent().removeClass('bt-menu-open');
				$('.over-layout').removeClass('active');
			});
			window.onhashchange = function(){
				var hash = top.location.hash.replace('#','');
				var url = hash + '.html #container3';
				$.ajaxSetup({
					cache: false //关闭AJAX相应的缓存
				});
				$('#article').load(url);

			};
		}
	};
});