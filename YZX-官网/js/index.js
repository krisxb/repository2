/**
 * Created by Administrator on 2016/9/2.
 */
 $(function(){
 	// 手机端的下拉菜单 begin
 	var btnToggle=$(".rd-toggle");
 	var mobilemenu=$(".rd-mobilemenu_ul");
 	// 设置下拉的初始状态
 	// $(".rd-mobilemenu_ul").css({dispaly:"none"});
 	btnToggle.click(function(){
 		$(this).toggleClass("active");
 		mobilemenu.toggleClass("active");
 	})
// 手机端的下拉菜单 end
// 轮播图
	$(".carousel").carousel({
		interval:2000
		 //设置动画的时间
	}); //当加载页面时开始动画播放
	$(".carousel").carousel("slide"); 
	//循环轮播上一个项目
	$(".icon-prev").click(function(){
		$(".carousel").carousel("prev");
	})
	$(".icon-next").click(function(){
		$(".carousel").carousel("next");
	})
	//点击list时实现图片的跳转
	$('#carousel-example-generic').on('slide.bs.carousel', function () {
			alert("当调用 slide 实例方法时立即触发该事件。");
		});
	//点击下拉菜单的list实现标题的改变
	//手机端的触摸事件
	/*var mytouch=util.toucher(document.getElementById("yzx-banner"));
	myTouch.on('swipeLeft',function(e){  //左划
    $('.icon-prev').click();  
	}).on('swipeRight',function(e){  	//右划
    $('.icon-prev').click();  
	});  */
 	/*$('#carousel-example-generic').hammer().on('swipeleft', function(){  
    	$(this).carousel('prev');  
	});  
	$('#carousel-example-generic').hammer().on('swiperight', function(){  
    	$(this).carousel('next');  
	});  */
	// 底部点击时实现下载的展开
	 var downlistword=$(".downlistword");
	 downlistword.click(function () {
		 $(this).next(".downlistpic-box").slideToggle();
		 $(this).children().toggleClass("active");
	 })
	 //导航的动效
	 var daohang=$(".navbar-daohang-content li");
	 console.log(daohang.length);
	 daohang.click(function(){
	 	var index=$(this).index();
	 	daohang.removeClass("hot");
	 	$(this).addClass("hot");
	 })
	 //爱车百科数据的获取
	 /*$.ajax({
		 url:"http://101.201.76.138:8080/queryNewsInfoByPage.shtml?page=1&rows=10",
		 type:"get",
		 dataType : "script",
		 scriptCharset : "gbk",
		 success:function (data) {
			 console.log(data);
			 console.log(data[code]);
		 }
	 })*/

 })
