/**
 * Created by Administrator on 2016/11/7.
 */
$(function(){
    function advice(){

        var tel=$('.tel').value;
        var str1=/^[\u4E00-\u9FA5a-z0-9]{2,16}$/;//至少有2个字符,并且字符长度不超过6个字可能有英文名字；
        var name_state=false;
        var tel_state=false;
        $('.name').blur(function () {
            var name=$('.name').val();
            var result1=reg1.test(name);
            if(!result1){
                $('.advice-name').html("最少为2个字!");
                name_state=false;
            }else{
                $('.advice-name').html("");
                name_state=true;
            }
            checkform();
        })

        var str2=/(?:\(\d{3,4}\)|\d{3,4}-?)\d{8}/;//\d匹配任意一个数字；{n,m}重复n到m次
        var reg1=new RegExp(str1);
        var reg2=new RegExp(str2);
        $('.tel').blur(function () {
            var tel=$('.tel').val();
            var result2=reg2.test(tel);
            console.log(result2);
            if(!result2){
                $('.advice-tel').html("请输入11位手机号码！");
                tel_state=false;
            }else{
                $('.advice-tel').html("");
                tel_state=true;
            }
            checkform();
        })
        function checkform(){
            var submit_btn=$(".submit");
            if(name_state && tel_state){
                submit_btn.css({background:'#00b4ff',color:'#fff'});
            }else{
                submit_btn.css({background:'#c4c7c8',color:'#fff'});
            }
        }
    }
    advice();
    // 获取可视窗口的大小
    var cwidth=$(document).width();
    if(cwidth<=767){
        var bannerPic=$('.item img');
        var imgSrc=['images/home/product1.jpg','images/home/product2.jpg']
        var imglen=imgSrc.length;
        for(var i=0;i<imglen;i++){
            $(bannerPic[i]).attr('src',imgSrc[i]);
        }
    }
})