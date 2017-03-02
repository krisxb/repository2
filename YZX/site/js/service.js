/**
 * Created by Administrator on 2016/11/23.
 */
$(function () {
    $.ajax({
        url:'http://www.yunzhangxing.cn/front/queryNewsInfoByPage.shtml?page=1&rows=20',
        type:"get",
        async:false,
        dataType:"jsonp",
        crossDomain:true,
        success:function (know) {
            console.log(know.msg);
        }

    })
})