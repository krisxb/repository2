$(function(){
	$("#content").fullpage({
		afterLoad:function(anchorlink,index){
			if(index==2){
				$(".section2").find(".triangle-full").css({transform:"rotate(180deg)"});
				$(".car-logo").delay(500).animate({width:45,height:45},1500,'easeOutExpo');
				$(".word-1").delay(1000).fadeIn(2500);
				$(".word-2").delay(1200).fadeIn(1500);
				$(".content-word-1").delay(2000).animate({left:'0'},1500,'easeOutExpo');
				$(".content-line").delay(2300).animate({left:'0'},1500,'easeOutExpo');
				$(".content-word-2").delay(2000).animate({right:'0'},1500,'easeOutExpo');
				$(".new-car").delay(3000).animate({width:'70%'},1500,'easeOutExpo');
			}
			if(index==3){
				// 背景转动45
				$(".section3-star").css({transform:'rotate(45deg)'});
				$(".section3-logo").css({width:'0.45rem',height:'0.45rem'},1500,'easeOutExpo');
				$(".section3-biaoti").fadeIn(1500);
				$(".section3-newskill").animate({top:0},1500,'easeOutExpo');
				$(".skill-line").delay(1500).animate({left:0});
				$(".plane").delay(1500).animate({left:'70%'});
				$(".skill-list>li").eq(0).delay(2000).animate({right:0},1500,'easeOutExpo');
				$(".skill-list>li").eq(1).delay(2500).animate({left:-12},1500,'easeOutExpo');
				$(".skill-list>li").eq(2).delay(3000).animate({right:0},1500,'easeOutExpo');
				$(".skill-list>li").eq(3).delay(3500).animate({left:8},1500,'easeOutExpo');
				$(".skill-list>li").eq(4).delay(4000).animate({right:0},1500,'easeOutExpo');
				$(".skill-list>li").eq(5).delay(4500).animate({left:8},1500,'easeOutExpo');
				$(".downrow").delay(5000).fadeIn(1500);
				$(".section3-pic").delay(5500).animate({left:'10%'},1500,'easeOutExpo');
			}
			if(index==4){
				$(".section3-star").css({transform:'rotate(45deg)'});
				$(".section4-logo").delay(500).animate({width:'0.45rem',height:'0.45rem'},1000,'easeInSine');
				$(".section4-content>h3").delay(1000).fadeIn(2500);
				$(".section4-content>h2").delay(1000).animate({fontSize:"1.5em"},1000,'easeOutExpo');
				$(".section4-main").delay(1500).animate({fontSize:"1em"},1000,'easeOutExpo');
				$(".section4-code").delay(2500).animate({width:'1.7rem',height:'1.7rem'},1500,'easeOutExpo');
				$(".support1").delay(3000).animate({left:'0'},1000,'easeOutExpo');
				$(".support2").delay(3500).animate({right:'0'},1000,'easeOutExpo');
			}
			if(index==5){
				$('.section5-info').animate({left:0},1500,'easeOutExpo');
				$(".function-shadow").fadeIn(1500);
				$('.section5-info>h3').delay(1000).animate({fontSize:'1.17em'},1500,'easeOutExpo');
				$('.server-line').delay(1500).animate({width:'100%'},1000,'easeOutExpo');
				$('.server-word1').delay(1500).fadeIn(1500);
				$('.server-word2').delay(1500).fadeIn(1500);
				$('.section5-logo>img').delay(1500).animate({width:45,height:45},1500,'easeOutExpo');
				$('.yiqi').delay(2000).fadeIn(1500);
				// 中间部分的动效
				$(".section5-step>li").eq(0).delay(2500).animate({left:0},1500,'easeOutExpo');
				$(".section5-step>li").eq(1).delay(3000).animate({left:0},1500,'easeOutExpo');
				$(".section5-step>li").eq(2).delay(3500).animate({left:0},1500,'easeOutExpo');
				$(".section5-step>li").eq(3).delay(4000).animate({left:0},1500,'easeOutExpo');
				$(".section5-step>li").eq(4).delay(4500).animate({left:0},1500,'easeOutExpo');
				$(".section5-step>li").eq(5).delay(5000).animate({left:0},1500,'easeOutExpo');
				$(".middle-pic").delay(2500).animate({right:0},1500,'easeOutExpo');
				$(".section5-bottom").delay(5500).fadeIn(1500);
				$(".heart").delay(5500).animate({width:'20%'},1500,'easeOutExpo');
				// 底部的动效
				$(".remind>li").eq(0).delay(6000).animate({left:0},1500,'easeOutExpo');
				$(".remind>li").eq(1).delay(6500).animate({right:0},1500,'easeOutExpo');
				$(".remind>li").eq(2).delay(7000).animate({left:0},1500,'easeOutExpo');
				$(".remind>li").eq(3).delay(7500).animate({right:0},1500,'easeOutExpo');
				$(".remind>li").eq(4).delay(8000).animate({left:0},1500,'easeOutExpo');
				$(".remind>li").eq(5).delay(8500).animate({right:0},1500,'easeOutExpo');

			}
			// 六屏 begin
				if(index==6){
					$('.section5-info').animate({left:0},1500,'easeOutExpo');
					$(".function-shadow").fadeIn(1500);
					$(".section3-star").css({transform:'rotate(45deg)'});
					$('.section5-info>h3').delay(1000).animate({fontSize:'1.17em'},1500,'easeOutExpo');
					$('.server-line').delay(1500).animate({width:'100%'},1000,'easeOutExpo');
					$('.server-word1').delay(1500).fadeIn(1500);
					$('.server-word2').delay(1500).fadeIn(1500);
					$('.section5-logo>img').delay(1500).animate({width:45,height:45},1500,'easeOutExpo');
					$('.yiqi').delay(2000).fadeIn(1500);
					// 飞机动画
					$(".track-title").delay(2000).fadeIn(1500);
					$(".track-line").delay(2000).animate({left:0},1500,'easeOutExpo');
					$(".track-plane").delay(2000).animate({left:0},1500,'easeOutExpo');
					$(".section6-pic>img").delay(3500).animate({left:0},1500,'easeOutExpo');
					$(".location").delay(5000).fadeIn(1500);
					// 用心服务动画
					$(".server-heart").delay(5500).animate({width:'60',height:'50'},1500,'easeOutExpo');
					$('.section6-line').delay(6000).fadeIn(1500);
					$(".server-content>li").eq(0).delay(6500).animate({left:0},1500,'easeOutExpo');
					$(".server-content>li").eq(1).delay(7000).fadeIn(1500);
					$(".server-content>li").eq(2).delay(7500).animate({right:0},1500,'easeOutExpo');
					$(".server-content>li").eq(3).delay(8000).animate({left:0},1500,'easeOutExpo');
					$(".server-content>li").eq(4).delay(8500).animate({right:0},1500,'easeOutExpo');
				}
			// 六屏 end
			// 七屏 begin
				if(index==7){
					$('.section5-info').animate({left:0},1500,'easeOutExpo');
					$(".function-shadow").fadeIn(1500);
					$(".section3-star").css({transform:'rotate(45deg)'});
					$('.section5-info>h3').delay(1000).animate({fontSize:'1.17em'},1500,'easeOutExpo');
					$('.server-line').delay(1500).animate({width:'100%'},1000,'easeOutExpo');
					$('.server-word1').delay(1500).fadeIn(1500);
					$('.server-word2').delay(1500).fadeIn(1500);
					$('.section5-logo>img').delay(1500).animate({width:45,height:45},1500,'easeOutExpo');
					$('.yiqi').delay(2000).fadeIn(1500);
					$(".map-bg").delay(3500).animate({width:300,height:200},1500,'easeOutExpo');
					$(".path").delay(5000).fadeIn(1500);
					$(".map-location").delay(5000).animate({width:22,height:25},1500,'easeOutExpo');
					$(".blue-car").delay(5500).fadeIn(1000).animate({right:69},1500,'easeOutExpo');
					// 用心服务动画
					$(".server-heart").delay(6500).animate({width:'60',height:'50'},1500,'easeOutExpo');
					$('.section6-line').delay(6500).fadeIn(1500);
					$(".server-content7>li").eq(0).delay(7000).animate({left:0},1500,'easeOutExpo');
					$(".server-content7>li").eq(1).delay(7500).fadeIn(1500);
					$(".server-content7>li").eq(2).delay(8000).animate({right:0},1500,'easeOutExpo');
					$(".server-content7>li").eq(3).delay(8500).animate({left:0},1500,'easeOutExpo');
				}
			// 七屏 end
			// 八屏 begin ***
				if(index==8){
					$('.section5-info').animate({left:0},1500,'easeOutExpo');
					$(".function-shadow").fadeIn(1500);
					$('.section5-info>h3').delay(1000).animate({fontSize:'1.17em'},1500,'easeOutExpo');
					$('.server-line').delay(1500).animate({width:'100%'},1000,'easeOutExpo');
					$('.server-word1').delay(1500).fadeIn(1500);
					$('.server-word2').delay(1500).fadeIn(1500);
					$('.section5-logo>img').delay(1500).animate({width:45,height:45},1500,'easeOutExpo');
					$('.yiqi').delay(2000).fadeIn(1500);
					// 飞机动画
					$(".track-title").delay(2000).fadeIn(1500);
					$(".track-line").delay(2000).animate({left:0},1500,'easeOutExpo');
					$(".track-plane").delay(2000).animate({left:0},1500,'easeOutExpo');
					$(".order-choice").delay(3500).fadeIn(1500);
					$(".order-winter").delay(3500).animate({left:0},1500,'easeOutExpo');
					$(".order-summer").delay(4000).animate({right:0},1500,'easeOutExpo');
					// 用心服务动画
					$(".server-heart").delay(5000).animate({width:'60',height:'50'},1500,'easeOutExpo');
					$('.section6-line').delay(5500).fadeIn(1500);
					$(".server-content8>li").eq(0).delay(6000).animate({left:0},1500,'easeOutExpo');
					$(".server-content8>li").eq(1).delay(6500).fadeIn(1500);
					$(".server-content8>li").eq(2).delay(7000).animate({right:0},1500,'easeOutExpo');
					$(".server-content8>li").eq(3).delay(7500).animate({left:0},1500,'easeOutExpo');
				}
			// 八屏 end
			// 九屏 begin
				if(index==9){
					$('.section5-info').animate({left:0},1500,'easeOutExpo');
					$(".function-shadow").fadeIn(1500);
					$('.section5-info>h3').delay(1000).animate({fontSize:'1.17em'},1500,'easeOutExpo');
					$('.server-line').delay(1500).animate({width:'100%'},1000,'easeOutExpo');
					$('.server-word1').delay(1500).fadeIn(1500);
					$('.server-word2').delay(1500).fadeIn(1500);
					$('.section5-logo>img').delay(1500).animate({width:45,height:45},1500,'easeOutExpo');
					$('.yiqi').delay(2000).fadeIn(1500);
					$(".people").delay(2500).animate({bottom:0},1500,'easeOutExpo');
					$(".jinbi").delay(3000).animate({width:'37%',height:'21%'},1500,'easeOutExpo');
					$(".quan").delay(3500).fadeIn(500).animate({bottom:'6%'},1500,'easeOutExpo');
					$(".two-gold").delay(3500).fadeIn(500).animate({bottom:'1%'},1500,'easeOutExpo');
					$(".row-gold").delay(3500).fadeIn(500).animate({bottom:'3%'},1500,'easeOutExpo');
					$(".col-gold").delay(3500).fadeIn(500).animate({bottom:'10%'},1500,'easeOutExpo');
					$(".earn-money>h3").delay(5000).fadeIn(500);
					$(".app-line").delay(5000).fadeIn(1500);
					$(".yunquan1").delay(5500).animate({left:0},1500,'easeOutExpo');
					$(".yunquan2").delay(6000).animate({right:0},1500,'easeOutExpo');
				}
			// 九屏 end
			// 十屏 begin
				if(index==10){
					$('.section5-info').animate({left:0},1500,'easeOutExpo');
					$(".function-shadow").fadeIn(1500);
					$('.section5-info>h3').delay(1000).animate({fontSize:'1.17em'},1500,'easeOutExpo');
					$('.server-line').delay(1500).animate({width:'100%'},1000,'easeOutExpo');
					$('.server-word1').delay(1500).fadeIn(1500);
					$('.server-word2').delay(1500).fadeIn(1500);
					$('.section5-logo>img').delay(1500).animate({width:45,height:45},1500,'easeOutExpo');
					$('.yiqi').delay(2000).fadeIn(1500);
					$(".happy-title").delay(2500).animate({left:'0'},1500,'easeOutExpo');
					$(".pk-content").delay(3000).animate({width:300,height:220},1500,'easeOutExpo');
					$(".pk-happy").delay(4500).fadeIn(1500);
					$('.pk-free').delay(4500).fadeIn(1500);
					$(".pk-limit").delay(4500).fadeIn(1500);
					$(".battle").delay(5500).animate({right:'-11px'},1500,'easeOutExpo');
					$(".yellow-car").delay(7000).animate({right:0},1500,'easeOutExpo');
				}
			// 十屏 end
			// 十一屏 begin
				if(index==11){
				$('.section5-info').animate({left:0},1500,'easeOutExpo');
				$(".function-shadow").fadeIn(1500);
				$('.section5-info>h3').delay(1000).animate({fontSize:'1.17em'},1500,'easeOutExpo');
				$('.server-line').delay(1500).animate({width:'100%'},1000,'easeOutExpo');
				$('.server-word1').delay(1500).fadeIn(1500);
				$('.server-word2').delay(1500).fadeIn(1500);
				$('.section5-logo>img').delay(1500).animate({width:45,height:45},1500,'easeOutExpo');
				$('.yiqi').delay(2000).fadeIn(1500);
				$(".section3-star").css({transform:'rotate(45deg)'});
				$(".app-pic").delay(3500).animate({width:'100%'},1500,'easeOutExpo');
				$(".section11-bottom>div").eq(0).delay(5000).animate({left:'0'},1500,'easeOutExpo');
				$(".section11-bottom>div").eq(1).delay(5500).animate({right:'0'},1500,'easeOutExpo');
			}
			// 十一屏 end
			// 十二屏 begin
				if(index==12){
					$(".logo-yiqi").animate({width:'0.45rem',height:"0.45rem"},1500,'easeOutExpo');
					$(".logo-title").animate({fontSize:'0.2rem'},1500,'easeOutExpo');
					$(".express").delay(1500).fadeIn(1000).animate({fontSize:'0.2rem'},1500,'easeOutExpo');
					$('.scar').delay(2000).animate({width:'100%'},1500,'easeOutExpo');
					$(".address-content").delay(3500).fadeIn('1500');
					$(".yzx").delay(5000).fadeIn('1500');
					$(".section12-line").delay(5000).fadeIn('1500');
					$(".section12-server").delay(5000).animate({left:'0'},1500,'easeOutExpo');
					$(".letter-server").delay(5500).animate({right:0},1500,'easeOutExpo');
				}
			// 十二屏 end
			// 十三屏 begin
				if(index==13){
					$(".logo-yiqi").animate({width:'0.45rem',height:"0.45rem"},1500,'easeOutExpo');
					$(".logo-title").animate({fontSize:'0.2rem'},1500,'easeOutExpo');
					$(".yzx-13").delay(1500).css({transform:'rotate(0deg)'});
					$(".section12-bottom-13").delay(2000).fadeIn(1000);
					$(".section13-code>img").delay(2500).animate({width:'60%'},1500,'easeOutExpo');
					$('.scan').delay(4000).animate({left:'0'},1500,'easeOutExpo');
				}
			// 十三屏 end
		},
		onLeave:function(index,direction){
			if(index==2){
				$(".section2").find(".triangle-full").css({transform:"rotate(0deg)"});
				$(".car-logo").animate({width:0,height:0});
				$(".word-1").fadeOut(500);
				$(".word-2").fadeOut(500);
				$(".content-word-1").animate({left:'-150%'});
				$(".content-line").animate({left:'-150%'});
				$(".content-word-2").animate({right:'-150%'});
				$(".new-car").animate({width:'0'});
			}
			if(index==3){
				// 背景转动45
				$(".section3-star").css({transform:'rotate(0deg)'});
				$(".section3-logo").css({width:'0',height:'0'});
				$(".section3-biaoti").fadeOut(500);
				$(".section3-newskill").animate({top:'-120%'});
				$(".skill-line").animate({left:'-120%'});
				$(".plane").animate({left:'-120%'});
				$(".skill-list>li").eq(0).animate({right:'-120%'});
				$(".skill-list>li").eq(1).animate({left:'-120%'});
				$(".skill-list>li").eq(2).animate({right:'-120%'});
				$(".skill-list>li").eq(3).animate({left:'-120%'});
				$(".skill-list>li").eq(4).animate({right:'-120%'});
				$(".skill-list>li").eq(5).animate({left:'-120%'});
				$(".downrow").fadeOut(500);
				$(".section3-pic").animate({left:'-120%'});
			}
			if(index==4){
				$(".section3-star").css({transform:'rotate(0deg)'});
				$(".section4-logo").animate({width:'0',height:'0'});
				$(".section4-content>h3").fadeOut(500);
				$(".section4-content>h2").animate({fontSize:"0"});
				$(".section4-main").animate({fontSize:"0"});
				$(".section4-code").animate({width:'0',height:'0'});
				$(".support1").animate({left:'-120%'});
				$(".support2").animate({right:'-120%'});
			}
			if(index==5){
				$('.section5-info').animate({left:'-120%'});
				$(".function-shadow").fadeOut(500);
				$('.section5-info>h3').animate({fontSize:'0'});
				$('.server-line').animate({width:'0'},1000,'easeOutExpo');
				$('.server-word1').fadeOut(500);
				$('.server-word2').fadeOut(500);
				$('.section5-logo>img').animate({width:0,height:0});
				$('.yiqi').fadeOut(1500);
				// 中间部分的动效
				$(".section5-step>li").eq(0).animate({left:'-120%'});
				$(".section5-step>li").eq(1).animate({left:'-120%'});
				$(".section5-step>li").eq(2).animate({left:'-120%'});
				$(".section5-step>li").eq(3).animate({left:'-120%'});
				$(".section5-step>li").eq(4).animate({left:'-120%'});
				$(".section5-step>li").eq(5).animate({left:'-120%'});
				$(".middle-pic").animate({right:'-120%'});
				$(".section5-bottom").fadeOut(500);
				$(".heart").animate({width:'0'});
				// 底部的动效
				$(".remind>li").eq(0).animate({left:'-120%'});
				$(".remind>li").eq(1).animate({right:'-120%'});
				$(".remind>li").eq(2).animate({left:'-120%'});
				$(".remind>li").eq(3).animate({right:'-120%'});
				$(".remind>li").eq(4).animate({left:'-120%'});
				$(".remind>li").eq(5).animate({right:'-120%'});

			}
			// 六屏 begin
				if(index==6){
					$('.section5-info').animate({left:'-120%'});
					$(".function-shadow").fadeOut(0);
					$('.section5-info>h3').animate({fontSize:'0'});
					$('.server-line').animate({width:'0'});
					$('.server-word1').fadeOut(0);
					$('.server-word2').fadeOut(0);
					$('.section5-logo>img').animate({width:0,height:0});
					$('.yiqi').fadeOut(500);
					// 飞机动画
					$(".track-title").fadeOut(0);
					$(".track-line").animate({left:'-120%'});
					$(".track-plane").animate({left:'-120%'});
					$(".section6-pic>img").animate({left:'-120%'});
					$(".location").fadeOut(0);
					// 用心服务动画
					$(".server-heart").animate({width:'0',height:'0'});
					$('.section6-line').fadeOut(0);
					$(".server-content>li").eq(0).animate({left:'-120%'});
					$(".server-content>li").eq(1).fadeOut(0);
					$(".server-content>li").eq(2).animate({right:'-120%'});
					$(".server-content>li").eq(3).animate({left:'-120%'});
					$(".server-content>li").eq(4).animate({right:'-120%'});
				}
			// 六屏 end
			// 七屏 begin
				if(index==7){
					$('.section5-info').animate({left:'-120%'});
					$(".function-shadow").fadeOut(500);
					$('.section5-info>h3').animate({fontSize:'0'});
					$('.server-line').animate({width:'0'});
					$('.server-word1').fadeOut(0);
					$('.server-word2').fadeOut(0);
					$('.section5-logo>img').animate({width:0,height:0});
					$('.yiqi').fadeOut(0);
					$(".map-bg").animate({width:0,height:0});
					$(".path").fadeOut(0);
					$(".map-location").animate({width:0,height:0});
					$(".blue-car").fadeOut(0).animate({right:'-50%'});
					// 用心服务动画
					$(".server-heart").animate({width:'0',height:'0'});
					$('.section6-line').fadeOut(0);
					$(".server-content7>li").eq(0).animate({left:'-120%'});
					$(".server-content7>li").eq(1).fadeOut(0);
					$(".server-content7>li").eq(2).animate({right:'-120%'});
					$(".server-content7>li").eq(3).animate({left:'-120%'});
				}
				// 七屏 end
				if(index==8){
					$('.section5-info').animate({left:'-120%'});
					$(".function-shadow").fadeOut(0);
					$('.section5-info>h3').animate({fontSize:'0'});
					$('.server-line').animate({width:'0'});
					$('.server-word1').fadeOut(0);
					$('.server-word2').fadeOut(0);
					$('.section5-logo>img').animate({width:0,height:0});
					$('.yiqi').fadeOut(100);
					// 飞机动画
					$(".track-title").fadeOut(0);
					$(".track-line").animate({left:'-120%'});
					$(".track-plane").animate({left:'-120%'});
					$(".order-choice").fadeOut(0);
					$(".order-winter").animate({left:'-120%'});
					$(".order-summer").animate({right:'-120%'});
					// 用心服务动画
					$(".server-heart").animate({width:'0',height:'0'});
					$('.section6-line').fadeOut(0);
					$(".server-content8>li").eq(0).animate({left:'-120%'});
					$(".server-content8>li").eq(1).fadeOut(0);
					$(".server-content8>li").eq(2).animate({right:'-120%'});
					$(".server-content8>li").eq(3).animate({left:'-120%'});
				}
				// 九屏 begin
				if(index==9){
					$('.section5-info').animate({left:'-120%'});
					$(".function-shadow").fadeOut(500);
					$('.section5-info>h3').animate({fontSize:'0'});
					$('.server-line').animate({width:'0'});
					$('.server-word1').fadeOut(500);
					$('.server-word2').fadeOut(500);
					$('.section5-logo>img').animate({width:0,height:0});
					$('.yiqi').fadeOut(500);
					$(".people").animate({bottom:'-120%'});
					$(".jinbi").animate({width:'0',height:'0'});
					$(".quan").fadeIn(500).animate({bottom:'10%'});
					$(".two-gold").fadeIn(500).animate({bottom:'6%'});
					$(".row-gold").fadeIn(500).animate({bottom:'8%'});
					$(".col-gold").fadeIn(500).animate({bottom:'15%'});
					$(".earn-money>h3").fadeOut(500);
					$(".app-line").fadeOut(500);
					$(".yunquan1").animate({left:'-120%'});
					$(".yunquan2").animate({right:'-120%'});
				}
			// 九屏 end
			// 十屏 begin
				if(index==10){
					$('.section5-info').animate({left:'-120%'});
					$(".function-shadow").fadeOut(500);
					$('.section5-info>h3').animate({fontSize:'0'});
					$('.server-line').animate({width:'0'});
					$('.server-word1').fadeOut(500);
					$('.server-word2').fadeOut(500);
					$('.section5-logo>img').animate({width:0,height:0});
					$('.yiqi').fadeOut(500);
					$(".happy-title").animate({left:'-120%'});
					$(".pk-content").animate({width:0,height:0});
					$(".pk-happy").fadeOut(500);
					$('.pk-free').fadeOut(500);
					$(".pk-limit").fadeOut(500);
					$(".battle").animate({right:'320px'});
					$(".yellow-car").animate({right:'-120%'});
				}
			// 十屏 end
			// 十一屏 begin
				if(index==11){
				 	$('.section5-info').animate({left:'-120%'});
				 	$(".function-shadow").fadeOut(500);
					$('.section5-info>h3').animate({fontSize:'0'});
					$('.server-line').animate({width:'0'});
					$('.server-word1').fadeOut(500);
					$('.server-word2').fadeOut(500);
					$('.section5-logo>img').animate({width:0,height:0});
					$('.yiqi').fadeOut(500);
					$(".section3-star").css({transform:'rotate(0deg)'});
					$(".app-pic").animate({width:'0'});
					$(".section11-bottom>div").eq(0).animate({left:'-120%'});
					$(".section11-bottom>div").eq(1).animate({right:'-120%'});
			}
			// 十一屏 end
			// 十二屏 begin
				if(index==12){
					$(".logo-yiqi").animate({width:'0.6rem',height:"0.6rem"});
					$(".logo-title").animate({fontSize:'0.3rem'});
					$(".express").delay(1500).fadeOut(500).animate({fontSize:'0.1rem'});
					$('.scar').delay(2000).animate({width:'0'});
					$(".address-content").fadeOut('500');
					$(".yzx").fadeOut('500');
					$(".section12-line").fadeOut('500');
					$(".section12-server").animate({left:'-120%'});
					$(".letter-server").animate({right:'-120%'});
				}
			// 十二屏 end
			// 十三屏 begin
				if(index==13){
					$(".logo-yiqi").animate({width:'0.6rem',height:"0.6rem"});
					$(".logo-title").animate({fontSize:'0.3rem'});
					$(".yzx-13").css({transform:'rotate(-10deg)'});
					$(".section12-bottom-13").fadeOut(1000);
					$(".section13-code>img").animate({width:'0'});
					$('.scan').animate({left:'-120%'});
				}
			// 十三屏 end
		}
	})
})