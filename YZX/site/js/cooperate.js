/**
 * Created by Administrator on 2016/11/26.
 */
$(function () {
    function advice(){
        var str1=/^[\u4E00-\u9FA5a-z0-9]{2,16}$/;//至少有2个字符,并且字符长度不超过6个字可能有英文名字；
        var name_state=false;
        var tel_state=false;
        var num_state=false;
        $('.join-name').blur(function () {
            var name=$('.join-name').val();
            var result1=reg1.test(name);
            if(!result1){
                $('.point').html("最少为2个字!");
                name_state=false;
            }else{
                $('.point').html("");
                name_state=true;
            }
            checkform();
        })

        var str2=/(?:\(\d{3,4}\)|\d{3,4}-?)\d{8}/;//\d匹配任意一个数字；{n,m}重复n到m次
        var str3=/^[0-9]*$/;//匹配必须为数字
        var reg1=new RegExp(str1);
        var reg2=new RegExp(str2);
        var reg3=new RegExp(str3);
        $('.join-tel').blur(function () {
            var tel=$('.join-tel').val();
            var result2=reg2.test(tel);
            console.log(result2);
            if(!result2){
                $('.point').html("请输入11位手机号码！");
                tel_state=false;
            }else{
                $('.point').html("");
                tel_state=true;
            }
            checkform();
        })
        $('.join-num').blur(function () {
            var num=$('.join-num').val();
            var result3=reg3.test(num);
            if(!result3){
                $('.point').html("请输入数字");
                num_state=false;
            }else{
                $('.point').html("");
                num_state=true;
            }
            checkform();
        })
        function checkform(){
            var submit_btn=$(".join-submit");
            if(name_state && tel_state && num_state){
                submit_btn.css({background:'#00b4ff',color:'#fff'});
            }else{
                submit_btn.css({background:'#c4c7c8',color:'#fff'});
            }
        }
    }
    advice();
})