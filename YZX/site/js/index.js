/**
 * Created by Administrator on 2016/11/2.
 */
$(function () {
    // 获取可视窗口的大小
    var cwidth=$(document).width();
    if(cwidth<=767){
        var bannerPic=$('.item img');
        var imgSrc=['images/home/banner1.jpg','images/home/banner2.jpg','images/home/banner3.jpg','images/home/banner4.jpg']
        var imglen=imgSrc.length;
        for(var i=0;i<imglen;i++){
           $(bannerPic[i]).attr('src',imgSrc[i]);
        }
    }
})