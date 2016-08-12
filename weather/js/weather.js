$(function(){

	$.ajax({
		type:"post",
		url:"php/weather.php",
		async:true,
		data:"",
		// dataType:"JSON",
		success:function(data){
			var weat=JSON.stringify(data);//转换为字符串
			// alert(data["HeWeather data service 3.0"][0]["aqi"]["city"]["aqi"]);
			weat = weat.replace("HeWeather data service 3.0","weather");/*修改名称为：weather方便调用*/
			// console.log(weat);
			// 再将字符串转化为JSON格式
			// weat2=weat.substring(1,weat.length-6);
			// console.log(weat2)
			var weJson  =  JSON.parse(weat);
			// console.log(weJson.length)
			// console.log(typeof(weJson));
			weJson2=weJson.substring(0,weJson.length-4);
			console.log(weJson2);
			var a=weJson2;
			var b=eval('('+a+')');//将json转化为js对象
 			console.log(typeof(b));
 			var nowWeather = b.weather[0].basic.city;
 			$(".weather-city").innerHTML=nowWeather;
 			temp=b.weather[0].now.tmp;
 			$(".weather-wendu").html(temp+"°");
 			// 今天的天气
 			Ttemp=b.weather[0].daily_forecast[0].tmp;
 			codeD=b.weather[0].daily_forecast[0].cond.code_d;
 			$(".temp").eq(0).html(Ttemp.max+"°"+"/"+Ttemp.min+"°");
 			$("img").eq(0).attr("src","http://files.heweather.com/cond_icon/"+codeD+".png");
 			//明天的天气
 			Ttemp=b.weather[0].daily_forecast[1].tmp;
 			codeD=b.weather[0].daily_forecast[1].cond.code_d;
 			$("img").eq(1).attr("src","http://files.heweather.com/cond_icon/"+codeD+".png");
 			$(".temp").eq(1).html(Ttemp.max+"°"+"/"+Ttemp.min+"°");
 			// 后天的天气
 			Ttemp=b.weather[0].daily_forecast[2].tmp;
 			codeD=b.weather[0].daily_forecast[2].cond.code_d;
 			$("img").eq(2).attr("src","http://files.heweather.com/cond_icon/"+codeD+".png");
 			$(".temp").eq(2).html(Ttemp.max+"°"+"/"+Ttemp.min+"°");
 			// aqi 空气质量指数 Begin
 			var AQI=b.weather[0].aqi.city;
 			$(".api-data").html(AQI.aqi);
 			$(".pm25").html(AQI.pm25);
 			$(".pm10").html(AQI.pm10);
 			$(".zhiliang").html(AQI.qlty);
 			// aqi 空气质量指数 End
 			// suggestion 生活指数 begin
 			var SUG=b.weather[0].suggestion;
 			$(".api-feel").eq(0).html(SUG.comf.brf);
 			$(".api-feel").eq(1).html(SUG.cw.brf);
 			$(".api-feel").eq(2).html(SUG.uv.brf);
 			$(".api-feel").eq(3).html(SUG.trav.brf);
 			$(".api-feel").eq(4).html(SUG.drsg.brf);
 			$(".api-feel").eq(5).html(SUG.flu.brf);
 			// suggestion 生活指数 End
 		}
	});
})
