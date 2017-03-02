$(function () {
	function getChilds(obj,type){
		var objs=obj.childNodes;//参数的节点
		var newArr=[]
		var type=type?type:false;
		if(type==true){
			for (var i = 0; i <objs.length; i++) {
				if(objs[i].nodeType==1||(objs[i].nodeType==3&&!(/^\s+$/.text(objs[i].nodeValue)))){
					newArr.push(objs[i])
				}
			}
		}
		if(type==false){
			for (var i = 0; i <objs.length; i++) {
				if(objs[i].nodeType==1){
					newArr.push(objs[i])
				}
			}
		}
		return newArr;
	}



	function firstChild(obj){
		return getChilds(obj)[0]
	}

	function lastChild(obj){
		var length=getChilds(obj).length;
		return getChilds(obj)[length-1]
	}
	/*var win=$(".event-content")[0];//错误是因为获取的不对，

	 var box=$(".box",win)[0];
	 var as=$("a",box)
	 var aw=parseInt(getStyle(as[0],"width"))
	 var btn=$(".btn",win)[0]
	 var btnL=$(".btnL",win)[0]
	 var btnR=$(".btnR",win)[0]*/
	var win=$('.event-content')[0];
	var as=$(".box>a");
	var box=$(".box")[0];
	var aw=as.eq(0).width();
	var flag=true;
	var t;
	t=setInterval(moveL,2000)
	win.onmouseover=function(){//当鼠标停在上面时停止
		clearInterval(t)
		// animate(btn,{opacity:1})

	}
	win.onmouseout=function(){//当鼠标离开时继续轮播
		t=setInterval(moveL,2000)
		// animate(btn,{opacity:0})
	}
	function moveL(){
		animate(box,{left:-aw},function (){
			var first=firstChild(box);
			box.appendChild(first);
			box.style.left=0;
			flag=true;
		})
	}
	function moveR(){
		var first=firstChild(box);
		var last=lastChild(box);
		box.insertBefore(last,first)
		box.style.left=-aw+"px";
		animate(box,{left:0},function(){
			flag=true
		})
	}


})
			