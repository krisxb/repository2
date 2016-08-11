function palette(cobj,canvas,copy){
	this.o=cobj;
	this.canvas=canvas;
	this.copy=copy;
	this.width=canvas.width;
	this.height=canvas.height;
	this.style="fill";//获取描边
	this.type="";
	// line,rect,circle,triangle,pencil
	this.lineWidth=1;//线条宽度
	this.strokeStyle="";
	this.fillStyle="";
	this.status=[];
	this.num=5;
	this.bnum=5;
}
palette.prototype.draw=function(){
	var that=this;
	this.copy.onmousedown=function(e){
		that.init();
		var dx=e.offsetX;
		//当鼠标按下的时候获取当前的坐标
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
	document.onmouseup=function(){
		that.status.push(that.o.getImageData(0,0,that.width,that.height))
		document.onmousemove=null;
		document.onmouseup=null;
	  }
   }
}
palette.prototype.line=function(x1,y1,x2,y2){
	this.o.beginPath();// 开始一条路径，或重置当前的路径。
		this.o.lineTo(x1,y1);
		this.o.lineTo(x2,y2);
		this.o.closePath();
		this.o.stroke();//绘制路径
}
palette.prototype.rect=function(x1,y1,x2,y2){
	var w=x2-x1;
	var h=y2-y1;
	this.o.beginPath();
	this.o.rect(x1,y1,w,h)
	this.o.closePath();//创建从当前点到开始点的路径，关闭当前的绘图路径
	this.o[this.style]();
}
palette.prototype.circle=function(x1,y1,x2,y2){
	var r=this._r(x1,y1,x2,y2);
	this.o.beginPath();
	this.o.arc(x1,y1,r,0,Math.PI*2);
	this.o.closePath();
	this.o[this.style]();
}
//获取半径
palette.prototype._r=function(x1,y1,x2,y2){
	return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}

//三角形
palette.prototype.triangle=function(x1,y1,x2,y2){
	this.o.beginPath();
	this.o.lineTo(x1,y1);
	this.o.lineTo(x2,y2);
	this.o.lineTo(x1,y2);
	this.o.closePath();
	this.o[this.style]()
}
palette.prototype.pencil=function(x1,y1,x2,y2){
	var that=this;
	this.copy.onmousedown=function(e){
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

/*橡皮擦*/
palette.prototype.eraser=function(){
	var w=30;
	 var that=this
	this.copy.onmousedown=function(e){
		var dx=e.offsetX;
		var dy=e.offsetY;
		// var a=document.createElement('div');//创建一个橡皮的的div
		var a=$('<div id="clear">')[0];
		a.style.width = w+'px';
        a.style.height = w+'px';
        a.style.position = 'absolute';
        a.style.border = '1px solid blue';	

		that.copy.parentNode.appendChild(a);
		document.onmousemove=function(e){
			var mx=e.offsetX;
			var my=e.offsetY;
			a.style.left = mx-w/2+'px';
        	a.style.top = my-w/2+'px';
			that.o.clearRect(mx-w/2,my-w/2,w,w);//清除四个参数
		}
		document.onmouseup=function(){
			that.copy.parentNode.removeChild(a);
			document.onmouseup=null;
			document.onmousemove=null;
		}
	}
}

			
			
		
		
palette.prototype.init=function(){
	this.o.strokeStyle=this.strokeStyle;
	this.o.fillStyle=this.fillStyle;
	this.o.lineWidth=this.lineWidth;

}
palette.prototype.polystar=function(x1,y1,x2,y2){
	var ang=360/(this.bnum*2);
    var n=this.bnum*2;
    var ang2=Math.PI/180*ang;
 	var r=this._r(x1,y1,x2,y2);//Math.pow求几次方
    this.o.beginPath();
    for(var i=0;i<n;i++){
        if(i%2==0){
            this.o.lineTo(x1+Math.cos(ang2*i)*(r/3),y1+Math.sin(ang2*i)*(r/3));
        }
        else{
            this.o.lineTo(x1+Math.cos(ang2*i)*r,y1+Math.sin(ang2*i)*r);
        }
    }
    this.o.closePath();
    this.o[this.style]();

}
//多边形的画法
palette.prototype.polygon=function(x1,y1,x2,y2){
	var r=this._r(x1,y1,x2,y2);
	var n=this.num;
	var ang=360/n;
	var a=Math.sin(ang*Math.PI/180)*r;
	var b=Math.cos(ang*Math.PI/180)*r;
	this.o.beginPath();

	for(var i=0;i<n;i++){
		this.o.lineTo(x1+Math.cos(i*ang*Math.PI/180)*r,y1+Math.sin(i*ang*Math.PI/180)*r);
	}
	this.o.closePath();
	this.o[this.style]();


}
// 保存：create.toDataURL()
//撤销：rest.click(function(){})
