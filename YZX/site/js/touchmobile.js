$(function(){
	$(".carousel").carousel({
		interval:3000
		//设置动画的时间
	}); //当加载页面时开始动画播放
	//手机端的触摸事件
	$('#myCarousel').hammer().on('swipeleft', function(){
    	$(this).carousel('next');
	});  
	$('#myCarousel').hammer().on('swiperight', function(){  
    	$(this).carousel('prev');
	});  
})