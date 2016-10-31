$(function(){
	$("#content").fullpage({
		afterLoad:function(anchorlink,index){
				var flag=true;
			if(index==2){
				$(".title-sun").animate({right:0},1500,'easeOutExpo');
				$(".title-start").fadeIn(500).animate({top:0},1000,'easeOutExpo');
				$(".brown-car").delay(1500).animate({left:0},1500,'easeOutExpo');
				$(".brown-pic").delay(3000).animate({width:'100%',height:'1.4rem'},1500,'easeOutExpo');
				$(".dark-content").delay(4500).fadeIn(1500);
			}
			if(index==3){
				$(".word-line-1").animate({right:0},1500,'easeOutExpo');
				$(".word-line-2").animate({left:0},1500,'easeOutExpo');
				$(".good-time").fadeIn(1500);
				$(".word-rain").delay(1500).animate({left:'-16'},1500,'easeOutExpo');
				$(".car-aodi").delay(3000).fadeIn(1500);
				$(".middle-left-pic").delay(4500).animate({width:'100%',height:'100%'},1500,'easeOutExpo');
				$(".middle-left-word").delay(4500).fadeIn(1500);
				$(".middle-right-pic").delay(6000).animate({width:'100%',height:'100%'},1500,'easeOutExpo');
				$(".middle-right-word").delay(6000).fadeIn(1500);
			}
			if(index==4){
				$(".but-line-1").animate({right:0},1500,'easeOutExpo');
				$(".but-content").fadeIn(1500);
				$(".but-line-2").animate({left:0},1500,'easeOutExpo');
				$(".but-word").delay(1500).fadeIn(500).animate({fontSize:'0.12rem'},1500,'easeOutExpo');
				$(".example-title").delay(3000).fadeIn(1500);
				$(".list-word-1").delay(4500).animate({left:0},1500,'easeOutExpo');
				$(".list-people-1").delay(4500).animate({width:35,height:35},1000,'easeOutExpo');
				$(".list-word-2").delay(5500).animate({right:0},1000,'easeOutExpo');
				$(".list-people-2").delay(5500).animate({width:35,height:35},1000,'easeOutExpo');
				$(".list-word-3").delay(6500).animate({left:0},1500,'easeOutExpo');
				$(".list-people-3").delay(6500).animate({width:35,height:35},1000,'easeOutExpo');
				$(".list-word-4").delay(7500).animate({right:0},1000,'easeOutExpo');
				$(".list-people-4").delay(7500).animate({width:35,height:35},1000,'easeOutExpo');
				$(".list-word-5").delay(8500).animate({left:0},1500,'easeOutExpo');
				$(".list-people-5").delay(8500).animate({width:35,height:35},1000,'easeOutExpo');
				$(".example-people").delay(9500).animate({bottom:0},1000,'easeOutExpo');
			}
			if(index==5){
				$(".for-example-top").animate({right:0},1500,'easeOutExpo');
				$(".for-example-bottom").animate({left:0},1500,'easeOutExpo');
				$(".for-example-content").fadeIn(1500);
				$(".section5-word-1").delay(1500).animate({right:'18%'},1000,'easeOutExpo');
				$(".section5-people-1").delay(2500).animate({width:35,height:35},1000,'easeOutExpo');
				$(".section5-word-2").delay(3500).animate({left:'25%'},1000,'easeOutExpo');
				$(".section5-people-2").delay(3500).animate({width:35,height:35},1000,'easeOutExpo');
				$(".section5-word-3").delay(4500).animate({right:'37%'},1000,'easeOutExpo');
				$(".section5-people-3").delay(5500).animate({width:35,height:35},1000,'easeOutExpo');
				$(".section5-word-4").delay(6500).animate({left:'17%'},1000,'easeOutExpo');
				$(".section5-people-4").delay(6500).animate({width:35,height:35},1000,'easeOutExpo');
				$(".section5-word-5").delay(7500).animate({right:'56%'},1000,'easeOutExpo');
				$(".section5-people-5").delay(8500).animate({width:35,height:35},1000,'easeOutExpo');
				$(".trouble-left").delay(9500).animate({width:'45%',height:'45%'},1000,'easeOutExpo');
				$(".trouble-right").delay(10500).fadeIn(500).animate({width:'40%',height:'100%'},1000,'easeOutExpo');
			}
			if(index==6){
				$(".problem").animate({left:0},1500,'easeOutExpo',function(){
					flag=false;
				});
				$(".slove").delay(1500).animate({right:0},1500,'easeOutExpo',function(){
					flag=false;
				});
				$(".light-pic").delay(3000).animate({bottom:0},1000,'easeOutExpo',function(){
					flag=false;
				});
				$(".light-word").delay(4000).fadeIn(1000);
				$(".green-people-pic").delay(4500).animate({bottom:0},1000,'easeOutExpo',function(){
					flag=false;
				});
			}
			if(index==7){
				$(".key-top").fadeIn(1000);
				$(".key-content").fadeIn(1000);
				$(".key-bottom").animate({left:'-2'},1000,'easeOutExpo');
				$(".car-dialog").delay(1000).animate({width:'39%'},1000,'easeOutExpo');
				$(".orange-car").delay(1000).animate({right:0},1000,'easeOutExpo');
				$(".yzx-app").delay(2000).animate({bottom:'45%'},1000,'easeOutExpo');
			}
			if(index==8){
				$(".start-pic").animate({width:'80%',height:'100%'},1000,'easeOutExpo');
				$(".bottom-hand>img").delay(1000).animate({bottom:0},1000,'easeOutExpo');
				$(".yun").delay(2000).fadeIn(1000);
				$(".control-top").delay(2000).animate({right:'-6%'},1000,'easeOutExpo');
				$(".control-start").delay(3000).fadeIn(1000);
				$(".control-bottom").delay(4000).animate({right:'2%'},1000,'easeOutExpo');
				$(".control-word").delay(5000).animate({width:'100%',height:'21%'},1000,'easeOutExpo');
			}
			if(index==9){
				$(".lock-top").animate({left:'2%'},1000,'easeOutExpo');
				$(".lock-content").fadeIn(1000);
				$(".lock-bottom").delay(1000).animate({left:'-11%'},1000,'easeOutExpo');
				$(".lock-yzx").delay(2000).animate({top:'7%'},1000,'easeOutExpo');
				$(".section9-hand>img").delay(3000).animate({bottom:0},1000,'easeOutExpo');
				$(".lock-pic>img").delay(4000).animate({width:'100%'},1000,'easeOutExpo');
				$(".section9-attention").delay(5000).animate({width:'100%',height:'26%'},1000,'easeOutExpo');
				$(".section9-line").delay(6000).animate({right:'0%'},1000,'easeOutExpo');
			}
			if(index==10){
				$(".lock-top-10").animate({left:'2%'},1000,'easeOutExpo');
				$(".lock-content-10").fadeIn(1000);
				$(".lock-bottom-10").delay(1000).animate({left:'-11%'},1000,'easeOutExpo');
				$(".lock-yzx-10").delay(2000).animate({top:'7%'},1000,'easeOutExpo');
				$(".section10-hand>img").delay(3000).animate({bottom:0},1000,'easeOutExpo');
				$(".lock-pic-10>img").delay(4000).animate({width:'100%'},1000,'easeOutExpo');
				$(".section10-attention").delay(5000).animate({width:'100%',height:'26%'},1000,'easeOutExpo');
				$(".section10-line").delay(6000).animate({right:'0%'},1000,'easeOutExpo');
			}
			if(index==11){
				$(".lock-top-11").animate({left:'2%'},1000,'easeOutExpo');
				$(".lock-content-11").fadeIn(1000);
				$(".lock-bottom-11").delay(1000).animate({left:'-11%'},1000,'easeOutExpo');
				$(".lock-yzx-11").delay(2000).animate({top:'7%'},1000,'easeOutExpo');
				$(".section11-hand>img").delay(3000).animate({bottom:0},1000,'easeOutExpo');
				$(".lock-pic-11>img").delay(4000).animate({width:'100%'},1000,'easeOutExpo');
				$(".section11-attention").delay(5000).animate({width:'100%',height:'26%'},1000,'easeOutExpo');
				$(".section11-line").delay(6000).animate({right:'0%'},1000,'easeOutExpo');
			}
			if(index==12){
				$(".electric-yzx").animate({top:'4%'},1000,'easeOutExpo');
				$(".electric-top").animate({right:'0%'},1000,'easeOutExpo');
				$(".electric-word").fadeIn(1000);
				$(".electric-bottom").animate({left:'-10%'},1000,'easeOutExpo');
				$(".electric-cut").delay(1000).animate({width:'80%',height:'36%'},1000,'easeOutExpo');
				$(".thief-car").delay(2000).animate({right:0},1000,'easeOutExpo');
				$(".thief").delay(3000).fadeIn(1000);
				$(".thief-word").delay(4000).animate({width:'70%'},1000,'easeOutExpo');
				$(".section12-explain").delay(5000).fadeIn(1000);
			}
			if(index==13){
				$(".electric-yzx-13").animate({top:'4%'},1000,'easeOutExpo');
				$(".electric-top-13").animate({right:'0%'},1000,'easeOutExpo');
				$(".electric-word-13").fadeIn(1000);
				$(".electric-bottom-13").delay(1000).animate({left:'-10%'},1000,'easeOutExpo');
				$(".electric-cut-13").delay(2000).animate({width:'80%',height:'36%'},1000,'easeOutExpo');
				$(".section13-load>img").delay(3000).animate({width:'100%'},1000,'easeOutExpo');
				$(".port-word-1").delay(4000).fadeIn(1000);
				$(".port-line").delay(4000).fadeIn(1000);
				$(".port-word-2>img").delay(5000).animate({width:'100%'},1000,'easeOutExpo');
			}
			if(index==14){
				$(".money-yzx").fadeIn(1000);
				$(".money-top").animate({left:'7%'},1000,'easeOutExpo');
				$(".money-content").animate({width:'100%',height:'50%'},1000,'easeOutExpo');
				$(".money-bottom").delay(1000).animate({left:'4%'},1000,'easeOutExpo');
				$(".coin-app").delay(2000).animate({top:'-41%'},1000,'easeOutExpo');
				$(".coin-cycle").delay(2000).fadeIn(500);
				$(".coin-word").delay(2000).fadeIn(500);
				$(".gold-coin").delay(3000).animate({width:'100%'},1000,'easeOutExpo');
				$(".yellow-people").delay(3000).animate({right:'-5%'},1000,'easeOutExpo');
				$(".gold-juan").delay(4000).fadeIn(500).animate({top:'52%'},1000,'easeOutExpo');
			}
			if(index==15){
				$(".money-yzx-15").fadeIn(1000);
				$(".money-top-15").animate({left:'7%'},1000,'easeOutExpo');
				$(".money-content-15").animate({width:'100%',height:'50%'},1000,'easeOutExpo');
				$(".money-bottom-15").delay(1000).animate({left:'4%'},1000,'easeOutExpo');
				$(".section15-pic").delay(2000).animate({left:'0'},1000,'easeOutExpo');
				$(".trafic-police").delay(3000).animate({width:'50%',height:'100%'},1000,'easeOutExpo');
				$(".trafic-word").delay(4000).fadeIn(1000);
			}
			// 第十六屏 begin
			if(index==16){
				$(".money-yzx-16").fadeIn(1000);
				$(".money-top-16").animate({left:'-6%'},1000,'easeOutExpo');
				$(".money-content-16").animate({width:'100%',height:'50%'},1000,'easeOutExpo');
				$(".money-bottom-16").delay(1000).animate({left:'4%'},1000,'easeOutExpo');
				$(".path-location").delay(2000).animate({left:'10%'},1000,'easeOutExpo');
				$(".path").delay(3000).fadeIn(1000);
				$(".path-car").delay(4000).animate({width:'40%'},1000,'easeOutExpo');
			}
			// 第十六屏 end
			// 第十七屏 begin
			if(index==17){
				$(".money-yzx-17").fadeIn(1000);
				$(".money-top-17").animate({left:'7%'},1000,'easeOutExpo');
				$(".money-content-17").animate({width:'100%',height:'50%'},1000,'easeOutExpo');
				$(".money-bottom-17").delay(1000).animate({left:'4%'},1000,'easeOutExpo');
				$(".section17-pic").delay(2000).animate({left:'0'},1000,'easeOutExpo');
				$(".clock>img").eq(0).delay(3000).fadeOut(1000);
				$(".clock>img").eq(1).delay(4000).fadeOut(1000);
				$(".clock>img").eq(2).delay(5000).fadeOut(1000);
				$(".clock>img").eq(3).delay(6000).fadeOut(1000);
				$(".speed-flag").delay(7000).animate({bottom:'-120%'},1500,'easeOutExpo');
				$(".speed-car").delay(8000).fadeIn(500);
				$(".challenge").delay(8500).animate({width:'40%'},1500,'easeOutExpo');
			}
			// 第十七屏 end
		},
		onLeave:function(index,direction){
			if(index==2){
				$(".title-sun").animate({right:'-120%'});
				$(".title-start").fadeOut(0).animate({top:'-13'});
				$(".brown-car").animate({left:'-120%'});
				$(".brown-pic").animate({width:0,height:0});
				$(".dark-content").fadeOut(0);
			}
			if(index==3){
				$(".word-line-1").animate({right:'-120%'});
				$(".word-line-2").animate({left:'-120%'});
				$(".good-time").fadeOut(0);
				$(".word-rain").animate({left:'-120%'});
				$(".car-aodi").fadeOut(0);
				$(".middle-left-pic").animate({width:0,height:0});
				$(".middle-left-word").fadeOut(0);
				$(".middle-right-pic").animate({width:0,height:0});
				$(".middle-right-word").fadeOut(0);
			}
			if(index==4){
				$(".but-line-1").animate({right:'-600'});
				$(".but-line-2").animate({left:'-600'});
				$(".but-content").fadeOut(0);
				$(".but-word").fadeOut(0).animate({fontSize:'0.18rem'});
				$(".example-title").fadeOut(0);
				$(".list-word-1").animate({left:'-120%'});
				$(".list-people-1").animate({width:'0',height:'0'});
				$(".list-word-2").animate({right:'-120%'});
				$(".list-people-2").animate({width:'0',height:'0'});
				$(".list-word-3").animate({left:'-120%'});
				$(".list-people-3").animate({width:'0',height:'0'});
				$(".list-word-4").animate({right:'-120%'});
				$(".list-people-4").animate({width:'0',height:'0'});
				$(".list-word-5").animate({left:'-120%'});
				$(".list-people-5").animate({width:'0',height:'0'});
				$(".example-people").animate({bottom:'-120%'});
			}
			if(index==5){
				$(".for-example-top").animate({right:'600'});
				$(".for-example-bottom").animate({left:'-120%'});
				$(".for-example-content").fadeOut(0);
				$(".section5-word-1").animate({right:'-120%'});
				$(".section5-people-1").animate({width:0,height:0});
				$(".section5-word-2").animate({left:'-120%'});
				$(".section5-people-2").animate({width:0,height:0});
				$(".section5-word-3").animate({right:'-120%'});
				$(".section5-people-3").animate({width:0,height:0});
				$(".section5-word-4").animate({left:'-120%'});
				$(".section5-people-4").animate({width:0,height:0});
				$(".section5-word-5").animate({right:'-120%'});
				$(".section5-people-5").animate({width:0,height:0});
				$(".trouble-left").animate({width:0,height:0});
				$(".trouble-right").fadeOut(0).animate({width:'60%',height:'120%'});
			}
			if(index==6){
				$(".problem").animate({left:'-120%'},function(){
				flag=true;
				});
				$(".slove").animate({right:'-120%'},function(){
						flag=true;
				});
				$(".light-pic").animate({bottom:'-1000'},function(){
					flag=true;
				});
				$(".light-word").fadeOut(0);
				$(".green-people-pic").animate({bottom:'-120%'},function(){
					flag=true;
				});
			}
			if(index==7){
				$(".key-top").fadeOut(1000);
				$(".key-content").fadeOut(1000);
				$(".key-bottom").animate({left:'-120%'});
				$(".car-dialog").animate({width:0});
				$(".orange-car").animate({right:'-120%'});
				$(".yzx-app").animate({bottom:'-120%'});
			}
			if(index==8){
				$(".start-pic").animate({width:0,height:0});
				$(".bottom-hand>img").animate({bottom:'-120%'});
				$(".yun").fadeOut(0);
				$(".control-top").animate({right:'-120%'});
				$(".control-bottom").animate({right:'-120%'});
				$(".control-start").fadeOut(0);
				$(".control-word").animate({width:0,height:0});
			}
			if(index==9){
				$(".lock-yzx").animate({top:'-120%'});
				$(".lock-top").animate({left:'-120%'});
				$(".lock-content").fadeOut(0);
				$(".lock-bottom").animate({left:'-120%'});
				$(".section9-hand>img").animate({bottom:'-120%'});
				$(".lock-pic>img").animate({width:0});
				$(".section9-attention").animate({width:0,height:0});
				$(".section9-line").animate({right:'-120%'});
			}
			if(index==10){
				$(".lock-top-10").animate({left:'-120%'});
				$(".lock-content-10").fadeIn(0);
				$(".lock-bottom-10").animate({left:'-120%'});
				$(".lock-yzx-10").animate({top:'-120%'});
				$(".section10-hand>img").animate({bottom:'-120%'});
				$(".lock-pic-10>img").animate({width:'0%'});
				$(".section10-attention").animate({width:'0',height:'0'});
				$(".section10-line").animate({right:'-120%'});
			}
			if(index==11){
				$(".lock-yzx-11").animate({top:'-120%'});
				$(".lock-top-11").animate({left:'-120%'});
				$(".lock-content-11").fadeOut(0);
				$(".lock-bottom-11").animate({left:'-120%'});
				$(".section11-hand>img").animate({bottom:'-120%'});
				$(".lock-pic-11>img").animate({width:0});
				$(".section11-attention").animate({width:0,height:0});
				$(".section11-line").animate({right:'-120%'});
			}
			if(index==12){
				$(".electric-yzx").animate({top:'-120%'});
				$(".electric-top").animate({right:'-150%'});
				$(".electric-word").fadeOut(0);
				$(".electric-bottom").animate({left:'-150%'});
				$(".electric-cut").animate({width:'0',height:'0'});
				$(".thief-car").animate({right:0});
				$(".thief").fadeOut(1000);
				$(".thief-word").animate({width:'0'});
				$(".section12-explain").fadeOut(0);
			}
			if(index==13){
				$(".electric-yzx-13").animate({top:'-120%'});
				$(".electric-top-13").animate({right:'-120%'});
				$(".electric-word-13").fadeOut(0);
				$(".electric-bottom-13").animate({left:'-150%'});
				$(".electric-cut-13").animate({width:0,height:0});
				$(".section13-load>img").animate({width:0});
				$(".port-word-1").fadeOut(0);
				$(".port-line").fadeOut(0);
				$(".port-word-2>img").animate({width:'0'});
			}
			if(index==14){
				$(".money-yzx").fadeOut(0);
				$(".money-top").animate({left:"-150%"});
				$(".money-content").animate({width:'120%',height:'70%'});
				$(".money-bottom").animate({left:'-150%'});
				$(".icon-app").animate({top:'300%'});
				$(".gold-coin").animate({width:'0'});
				$(".yellow-people").animate({right:'-150%'});
				$(".gold-juan").fadeOut(500).animate({top:'22%'});
				$(".coin-cycle").fadeOut(0);
				$(".coin-word").fadeOut(0);
			}
			if(index==15){
				$(".money-yzx-15").fadeOut(0);
				$(".money-top-15").animate({left:"-150%"});
				$(".money-content-15").animate({width:'120%',height:'70%'});
				$(".money-bottom-15").animate({left:'-150%'});
				$(".section15-pic").animate({left:'-120%'});
				$(".trafic-police").animate({width:'0',height:'0'});
				$(".trafic-word").fadeOut(0);
			}
			// 第十六屏 begin
			if(index==16){
				$(".money-yzx-16").fadeOut(0);
				$(".money-top-16").animate({left:"-150%"});
				$(".money-content-16").animate({width:'120%',height:'70%'});
				$(".money-bottom-16").animate({left:'-150%'});
				$(".path-loaction").animate({left:'-120%'});
				$(".path").fadeOut(0);
				$(".path-car").animate({width:'0'});
			}
			// 第十六屏 end
			// 第十七屏 begin
			if(index==17){
				$(".money-yzx-17").fadeOut(0);
				$(".money-top-17").animate({left:"-150%"});
				$(".money-content-17").animate({width:'120%',height:'70%'});
				$(".money-bottom-17").animate({left:'-150%'});
				$(".clock>img").eq(0).fadeIn(0);
				$(".clock>img").eq(1).fadeIn(0);
				$(".clock>img").eq(2).fadeIn(0);
				$(".clock>img").eq(3).fadeIn(0);
				$(".speed-flag").animate({bottom:'10%'});
				$(".speed-car").fadeOut(0);
				$(".challenge").animate({width:'0'});
			}
			// 第十七屏 end
		}
	})
})