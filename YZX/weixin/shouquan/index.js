$(document).ready(function(){

	$.ajax({
			url:"request.php",//获取用户信息的接口地址
			type:"get",
			async:false,
			// dataType:"json", //不能加dataType会返回错误
			success:function(data){
				/*var data_obj = $.parseJSON(data);//将json字符串转换为json对象
				$(".result").html(data_obj.info);*/
				// $(".result").html(data_obj.info);
				console.log(data);
			},
			error:function(){
				console.log("错误！");
			}
		})
})