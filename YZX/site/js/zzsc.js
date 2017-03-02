$(function(){
	/*δԪ�ص���β��Ӳ���*/
	var $panels				= $('#slider .scrollContainer > li');
	var $parent=$panels.parent();//����ǰli�����һ���ĸ�Ԫ��
	var $length=$panels.length;//��ȡָ��lengthֵ
	var $first=$panels.eq(0).clone().addClass("panel cloned").attr("id",'panel_'+($length+1));//��ȡ��һ��Ԫ�ز�����
	var $last=$panels.eq($length-1).clone().addClass("cloned").attr("id",'panel_0');;//��ȡ���һ��Ԫ�ز�����
	$parent.append($first);//��li�����еĵ�һ����ӵ�ulԪ���е����һ��  $("#slide02").scrollLeft(0);
	$parent.prepend($last);//��li�����е����һ����ӵ�ulԪ���еĵ�һ��
	var totalPanels			= $(".scrollContainer").children().size();//������Ԫ�ص����֣�����Ԫ�صĸ��� 7
	var regWidth			= $(".panel").css("width");//��ȡliԪ�صĿ��
	var regImgWidth			= $(".panel img").css("width");//��ȡ����ͼƬ�Ŀ��
	var movingDistance	    = 360;//ÿ���ƶ��ľ���
	var curWidth			= 418;//��ǰ�м�li�Ŀ��Ϊ
	var curHeight         =232;//��ǰ�м�li�ĸ߶�Ϊ 
	var curImgWidth  =418;
	var curImgHeight  =232;
	var othersW           =350;//����li�Ŀ��
	var othersH           =194;//�߶�
	var othersImgW           =350;//����li�Ŀ��
	var othersImgH           =194;//�߶�
	var $panels				= $('#slider .scrollContainer > li');//�˴������ǽ����ƽ������׵�Ԫ�����¸�ֵ
	var $container			= $('#slider .scrollContainer');
	$panels.css({'float' : 'left','position' : 'relative'});
	$("#slider").data("currentlyMoving", false);//�Ƿ������˶���
	$container.css('width', (($panels[0].offsetWidth+10) * $panels.length) + 68 ).css('left','0');//�����������ܵĿ�� PS��25��Ϊmarginֵ 60��Ϊ�м����Ŀ��
	var scroll = $('#slider .scroll').css('overflow', 'hidden');
	function returnToNormal(element) {//liԪ�ط��ص�����״̬
		$(element).animate({ width: othersW,height: othersH}).find("img").animate({width:othersImgW,height:othersImgH});
	};
	function growBigger(element) {//��ǰԪ��֮����
		$(element).addClass("current").animate({ width: curWidth,height:curHeight}).siblings().removeClass("current")
		.end().find("img").animate({width:curImgWidth,height:curImgHeight})
	}
	//direction true = right, false = left
	function change(direction) {
		//if not at the first or last panel
		if((direction && !(curPanel < totalPanels-2)) || (!direction && (curPanel <= 1))) {
			return false;
		}	
		//if not currently moving
		if (($("#slider").data("currentlyMoving") == false)) {
			$("#slider").data("currentlyMoving", true);
			var next         = direction ? curPanel + 1 : curPanel - 1;
			var leftValue    = $(".scrollContainer").css("left");
			var movement	 = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;
			$(".scrollContainer").stop().animate({"left": movement}, function() {
				$("#slider").data("currentlyMoving", false);
			});
			returnToNormal("#panel_"+curPanel);
			growBigger("#panel_"+next);
			curPanel = next;
			//remove all previous bound functions
			$("#panel_"+(curPanel+1)).unbind();	
			//go forward
			$("#panel_"+(curPanel+1)).click(function(){ change(true); });
			//remove all previous bound functions															
			$("#panel_"+(curPanel-1)).unbind();
			//go back
			$("#panel_"+(curPanel-1)).click(function(){ change(false); }); 
			//remove all previous bound functions
			$("#panel_"+curPanel).unbind();
		}
	}
	// Set up "Current" panel and next and prev ���õ�ǰԪ�غ�����
	growBigger("#panel_1");	
	var curPanel = 1;
	$("#panel_"+(curPanel+1)).click(function(){ change(true);return false;});
	$("#panel_"+(curPanel-1)).click(function(){ change(false);return false;});
	//when the prev/next arrows are clicked
	$("#slider .next").click(function(){ change(true);});	
	$("#slider .prev").click(function(){ change(false);});
	$(window).keydown(function(event){//���̷��������
		switch (event.keyCode) {
			case 13: //enter
				$(".next").click();
			break;
			case 37: //prev arrow
				$(".prev").click();
			break;
			case 39: //next arrow
				$(".next").click();
			break;
		}
	});	
	
});
