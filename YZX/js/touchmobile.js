$(function(){
	//手机端的触摸事件
	$('#myCarousel').hammer().on('swipeleft', function(){  
    	$(this).carousel('prev');  
	});  
	$('#myCarousel').hammer().on('swiperight', function(){  
    	$(this).carousel('next');  
	});  
})