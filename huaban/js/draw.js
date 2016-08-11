function palette(obj,canvas){
	this.o=obj;
	this.canvas=canvas;
	this.width=canvas.width;
	this.height=canvas.height;
	this.style='stroke';
	this.type='polygon';
	// line,rect,circle,triangle,pencil
	this.lineWidth=1;
	this.strokeStyle="";
	this.fillStyle="";
	this.status=[];
	this.init();
	this.num=5;
	this.jnum=5;//规定角度
	// 1.鼠标抬起截图保留上次绘制结果
	// 2.鼠标移动填充最后一保留的截图
	/*that.o.getImageData(0,0,this.width,this.height)获取画布指定的区域*/
}
palette.prototype.draw=function(){
	var that=this;

	this.canvas.onmousedown=function(e){
		 that.init();
		 var dx=e.offsetX;//当鼠标按下的时候获取当前的坐标
		 var dy=e.offsetY;
		
		 document.onmousemove=function(e){
		 	that.o.clearRect(0,0,that.width,that.height);
		 	if(that.status.length>0){

		 	that.o.putImageData(that.status[that.status.length-1],0,0,0,0,that.width,that.height)
		 	}
		 	var mx=e.offsetX;
		 	var my=e.offsetY;
		 	that[that.type](dx,dy,mx,my);
		 }
		 document.onmouseup=function(e){
		 	that.status.push(that.o.getImageData(0,0,that.width,that.height));

		 	document.onmousemove=null;
		 	document.onmouseup=null;
		 }
	}
}
palette.prototype.line=function(x1,y1,x2,y2){
	this.o.beginPath();
	this.o.lineTo(x1,y1);
	this.o.lineTo(x1,y2);
	this.o.lineTo(x2,y2);
	// this.o.closePath();
	this.o.stroke()
}
palette.prototype.rect=function(x1,y1,x2,y2){
	var w=x2-x1;
	var h=y2-y1;
	this.o.beginPath();
	this.o.rect(x1,y1,w,h)
	this.o.closePath();
	this.o[this.style]();
}
palette.prototype.triangle=function(x1,y1,x2,y2){
	this.o.beginPath();
	this.o.closePath();
	this.o.lineTo(x1,y1);
	this.o.lineTo(x1,y2);
	this.o.lineTo(x2,y2);
	this.o[this.style]();
}
palette.prototype.pencil=function(){
	var that=this;
	this.canvas.onmousedown=function(e){
		that.init();
		that.o.beginPath();
		document.onmousemove=function(e){
			var mx=e.offsetX;
			var my=e.offsetY;
			that.o.lineTo(mx,my);
			that.o.stroke();
		}
		document.onmouseup=function(e){
			that.o.closePath();
			document.onmousemove=null;
		 	document.onmouseup=null;
		}
	}
}
palette.prototype.init=function(){
	this.o.strokeStyle=this.strokeStyle;
	this.o.fillStyle=this.fillStyle;
	this.o.lineWidth=this.lineWidth;

}
palette.prototype.circle=function(x1,y1,x2,y2){
	
	var cl=this.cr(x1,y1,x2,y2);
	this.o.beginPath();
	this.o.arc(x1,y1,cl,0,Math.PI*2,1);//绘制圆
	this.o.closePath();
	this.o[this.style]();
}
palette.prototype.cr=function(x1,y1,x2,y2){
	var cw=x2-x1;
	var ch=y2-y1;
	return Math.sqrt((cw*cw+ch*ch));
}
//多边形的画法
palette.prototype.polygon=function(x1,y1,x2,y2){
	var r=this.cr(x1,y1,x2,y2);
	var n=this.num;
	var ang=360/n;
	/*var a=Math.sin(ang*Math.PI/180)*r;
	var b=Math.cos(ang*Math.PI/180)*r;*/
	this.o.beginPath();

	for(var i=0;i<n;i++){
		this.o.lineTo(x1+Math.cos(i*ang*Math.PI/180)*r,y1+Math.sin(i*ang*Math.PI/180)*r);
	}
	this.o.closePath();
	this.o.stroke();

}
//五角形的画法
palette.prototype.ploystar=function(x1,y1,x2,y2){
	var r=this.cr(x1,y1,x2,y2);
	var r1=r*0.35;


}
//橡皮檫