$(function(){
	var canvas=null;
	var copy=null;
	var parent=$(".palette-box");
	var div=$(".tools>div");//获取所有的div
	// console.log(div);
	
	$(".add").click(function(){
		var w=prompt('width',500)
		var h=prompt('height',500);
		var r=confirm(w,h);
		if(r==true){

				canvas=$('<canvas>').attr({
					width:w,
					height:h
				})
				copy=$('<canvas>').css({
					width:w,
					height:h,
					position:'absolute',
					left:0,
					top:0,
					zIndex:900

				})
				parent.css({
					width:w,
					height:h,

				}).append(canvas).append(copy);
				pat();
			}else{
				return;
			}
			
		})

	//点击获取工具
	function pat(){
		var palt=new palette(canvas[0].getContext('2d'),canvas[0],copy[0]);
		// 撤销
			$(".cancel").click(function(){
				if(palt.status.length>1){
					palt.status.pop();
					palt.o.putImageData(palt.status[palt.status.length-1],0,0,0,0,palt.width,palt.height)
				}else if(palt.status.length==1){
					palt.o.clearRect(0,0,palt.width,palt.height)
				}else{
					alert("不能撤销了")
				}
			})
			function changecolor(){

				$(".fillcolor").change(function(){
					palt.fillStyle=$(this).val();
				})
				$(".strokecolor").change(function(){
					palt.strokeStyle=$(this).val();
				})
			}
		div.click(function(){
			var attr=$(this).attr('role');//获取标识
			if(attr==undefined){
				return;
			}
			changecolor()
			if(attr=='polygon'){
				// alert(1);
				var n=prompt("请输入边数");
				palt.num=n;
				palt.type=attr;
				palt.draw();
			}else if(attr=='rect'){
				palt.type=attr;
				palt.draw();
			}else if(attr=='circle'){
				palt.type=attr;
				palt.draw();
			}else if(attr=='pencil'){
				palt.type=attr;
				palt.pencil();
			}else if(attr=='polystar'){
				palt.type=attr;
				palt.draw();
			}else if(attr=='eraser'){
				palt.type=attr;
				palt.eraser();
			}else if(attr=='fill'||attr=='stroke'){
				palt.style=attr;

			}else{
				palt.type=attr;
				palt.draw();
			}
		})
	}
			
	// 保存	
	var save=$(".save");
	save.click(function(){
		alert(1);
		var a=canvas[0].toDataURL();//默认编码是png
		$("<img>").attr('src',a).appendTo('body');
		console.log(a);
		// location.href=a.replace('image/png','image/octet-stream');
	})	


})
// 没有把画布处理好