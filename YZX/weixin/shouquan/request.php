<?php
 $ch = curl_init();
   	$url = 'http://101.201.114.12/queryNewsInfoByPage.shtml?page=1&rows=10';
   	// 执行HTTP请求
   	curl_setopt($ch , CURLOPT_URL , $url);
   	curl_setopt($ch , CURLOPT_SSL_VERIFYPEER , false);
   	$res = curl_exec($ch);
   	echo $res;
?>  	