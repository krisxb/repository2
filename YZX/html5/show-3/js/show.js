$(function(){
	//钟表
	var can=$("canvas");
	// console.log(can.length);
function createClock(index){
		var o=can[index].getContext('2d');
	// clock();
	function clear() { // clear canvas function
    o.clearRect(0, 0, o.canvas.width, o.canvas.height);
	}
	function clock(){
		clear();
		o.save();
		o.translate(70,70);
		// o.strokeStyle="#fff";
		//开始
		/*o.beginPath();
		o.arc(0,0,20,0,2*Math.PI);
		o.stroke();
		o.closePath();*/
		o.beginPath();
		o.lineWidth="5";
		o.arc(0,0,10,0,2*Math.PI);
		o.stroke();
		o.closePath();
		o.strokeStyle="#fff";

		o.save();
		/*var l=o.createRadiaGradient(0,0,0,0,0,188);
		l.addColorStop(0,'#ccc');
		l.addColorStop(0,'#ddd');
		o.stroke();
		o.fill();*/
		//小时的刻度
		/*for(var i=0;i<12;i++){
			o.beginPath();
			o.lineWidth=6;
			o.rotate(Math.PI/6)
			o.lineTo(50,0);
			o.lineTo(60,0);
			o.stroke();
			o.closePath();
		}*/
		o.restore();

		o.save();
		o.strokeStyle="#eee";
		//分钟的刻度(去掉分钟的刻度)
		/*for(var i=0;i<60;i++){
			o.beginPath();
			if(i%5!=0){
				
				o.lineWidth=6;
				
				o.lineTo(70,0);
				o.lineTo(80,0);
				o.stroke();
				
			}
			o.rotate(Math.PI/30);
			o.closePath();
		}*/
		o.restore();
		o.rotate(-Math.PI/2);
		//获取时间
		var d=new Date();
		var h=d.getHours();
		h=h>=12?h=12:h;
		var m=d.getMinutes();
		var s=d.getSeconds();
		var hang=h*Math.PI/6+Math.PI*m/360+s*Math.PI/21600;//小时旋转的角度
		var mang=m*Math.PI/30+Math.PI/1800;
		var sang=s*Math.PI/30;
		// 时
		o.save();
		o.beginPath();
		o.lineWidth=6;
		o.rotate(hang);
		o.lineCap="round";
		o.lineTo(-10,0);//开始的位置
		o.lineTo(30,0);//结束的位置
		o.stroke();
		o.closePath();
		o.restore();

		// 分
		o.save();
		o.beginPath();
		o.lineWidth=5;
		o.rotate(mang);
		o.lineCap="round";
		o.lineTo(-10,0);
		o.lineTo(50,0);
		o.stroke();
		o.closePath();
		o.restore();

		//秒
		o.save();
		o.beginPath();
		o.lineWidth=3;
		o.rotate(sang);
		o.strokeStyle="red";
		o.lineCap="round";
		o.lineTo(-10,0);
		o.lineTo(60,0);
		o.stroke();
		o.closePath();
		o.restore();
		o.clear
		//绘制中心
		o.arc(0,0,5,0,Math.PI*2);
		o.fillStyle="black";
		o.fill();
		o.restore();//保存之前绘制过的状态
	}
	// clock();
	setInterval(clock,1000);
	//人物的动效
}
	createClock(0);
			var word=$(".container-word");//右移进入
			var wordFade=$(".word-fadeIn");//淡入的效果
			var wordleft=$(".container-word-left");//左移进入
	$("#content").fullpage({
		afterLoad:function(anchorlink,index){
			// if(index==1){
			// 	$(".page1").find(wordFade[0]).fadeIn(2500);
			// }
			if(index==2){
				createClock(1);
				$(".page2").find(word[0]).delay(500).animate({
					right: '30'
				}, 1500, 'easeOutExpo');
				$(".page2").find(".clock").fadeIn(2500);
			}
			if(index==3){
				createClock(2);
				$(".page3").find(word[1]).delay(500).animate({
					right: '30'
				}, 1500, 'easeOutExpo');
				$(".page3").find(".clock").fadeIn(2500);
			}
			if(index==4){
				createClock(3);
				$(".page4").find(wordFade[0]).fadeIn(2500);
				$(".page4").find(".clock").fadeIn(2500);
			}
			if(index==5){
				$(".page5").find(wordleft[0]).delay(500).animate({
					left: '30'
				}, 1500, 'easeOutExpo');
			}
			if(index==6){
				$(".page6").find(wordFade[1]).fadeIn(2500);
				// 汽车移动动效
				var carSmall=$(".car-small");
				var ang=30;
				var r=180;
				var run=setInterval(function(){
					var X=r*Math.cos(ang*Math.PI/180);
					var Y=r*Math.sin(ang*Math.PI/180);
					var l=r-60+X;
					var y=r-60+Y;
					carSmall.animate({left:l,top:y},300);
					ang-=10;
					if(ang<-50){
						clearInterval(run);
						carSmall.animate({width:0,height:0},500)
					}
				},400)
				/*$(".page6").find(".car-small").delay(18000).animate({
					width:'0',
					height:'0'
				}, 1000, 'easeInSine');*/
				// clearInterval(run);
			}
			if(index==7){
				// clearInterval(run);
				$(".page7").find(wordFade[2]).fadeIn(2500);
				$(".page7").find(".car-big").delay(500).animate({
					right: '0'
				}, 1500, 'easeOutExpo');
				$(".page7").find(".couple").delay(600).animate({
					width:'70%',
					height:'54%'
				}, 1000, 'easeInSine');
			}
			if(index==8){
				$(".page8").find(wordleft[1]).delay(500).animate({
					left: '20%'
				}, 1500, 'easeOutExpo');
				$(".page8").find(".car-big").delay(500).animate({
					right: '0'
				}, 1500, 'easeOutExpo');
				$(".page8").find(".code").delay(600).animate({
					width:'120',
					height:'120'
				}, 1000, 'easeInSine');
			}
			// end
		},
		onLeave:function(index,direction){
			// if(index==1){
			// 	$(".page1").find(wordFade[0]).fadeOut(2500);
			// }
			if(index==2){
				createClock(1);
				$(".page2").find(word[0]).delay(500).animate({
					right: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index==3){
				createClock(2);
				$(".page3").find(word[1]).delay(500).animate({
					right: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index==4){
				createClock(3);
				$(".page4").find(wordFade[0]).fadeOut(2500);
			}
			if(index==5){
				$(".page5").find(wordleft[0]).delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index==6){
				$(".page6").find(wordFade[1]).fadeOut(2500);
				// 汽车移动动效
				var carSmall=$(".car-small");
				carSmall.css({width:120,height:120})
				var ang=30;
				var r=180;
				var run=setInterval(function(){
					var X=r*Math.cos(ang*Math.PI/180);
					var Y=r*Math.sin(ang*Math.PI/180);
					var l=r-60+X;
					var y=r-60+Y;
					carSmall.animate({left:l,top:y},300);
					ang-=10;
					if(ang<-50){
						clearInterval(run);
						carSmall.animate({width:0,height:0},500)
					}
				},400)
			}
			if(index==7){
				// clearInterval(run);
				$(".page7").find(wordFade[2]).fadeOut(2500);
				$(".page7").find(".car-big").delay(500).animate({
					right: '-120%'
				}, 1500, 'easeOutExpo');
				$(".page7").find(".couple").delay(600).animate({
					width:'0',
					height:'0'
				}, 1000, 'easeInSine');
			}
			if(index==8){
				$(".page8").find(wordleft[1]).delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$(".page8").find(".car-big").delay(500).animate({
					right: '-120%'
				}, 1500, 'easeOutExpo');
				$(".page8").find(".code").delay(600).animate({
					width:'0',
					height:'0'
				}, 1000, 'easeInSine');
			}
			// end
		}
	});

})