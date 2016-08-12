<?php
 $ch = curl_init();
   	$url = 'https://api.heweather.com/x3/weather?cityid=CN101010100&key=4fca088ad7324509bdd69976afa7502f';
   	// 执行HTTP请求
   	curl_setopt($ch , CURLOPT_URL , $url);
   	curl_setopt($ch , CURLOPT_SSL_VERIFYPEER , false);
   	$res = curl_exec($ch);
   	echo $res;
?>  	