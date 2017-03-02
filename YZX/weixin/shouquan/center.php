<?php
		//scope=snsapi_base 实例
	$appid='wx9959e2903c89de01';
	$redirect_uri = urlencode ( 'http://yzxweiixin.duapp.com/shouquan/get_openid.php' );
	$url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=$redirect_uri&response_type=code&scope=snsapi_base&state=1#wechat_redirect";
	header("Location:".$url);
?>
