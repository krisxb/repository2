/**
 * Created by Administrator on 2016/9/9.
 */
$(function () {
    // 企业文化的动效 begin
        var cultureList=$(".culture-list>li");
        var culturePic=$(".culture-pic");
        cultureList.each(function (index,element) {
            $(this).mouseover(function () {
                $(this).find(".culture-list-box").css({
                    background:"#00b4ff",color:"#fff"
                })
                $(this).find("img[src='images/about/bflag.png']").attr('src','images/about/wflag.png');
                $(this).find("img[src='images/about/bheart.png']").attr('src','images/about/wheart.png');
                $(this).find("img[src='images/about/btree.png']").attr('src','images/about/wtree.png');
            }).mouseout(function () {
                $(this).find(".culture-list-box").css({
                    background:"none",color:"#00b4ff"
                })
                $(this).find("img[src='images/about/wflag.png']").attr('src','images/about/bflag.png');
                $(this).find("img[src='images/about/wheart.png']").attr('src','images/about/bheart.png');
                $(this).find("img[src='images/about/wtree.png']").attr('src','images/about/btree.png');
            })
        })
        /*cultureList.mouseout(function () {
            cultureBox.css({background:"none"});
        })*/
    // 企业文化的动效 end
    // 地图 begin
    var map = new AMap.Map('contactBox',{
        zoom: 10,
        center: [116.259242, 40.137933]
    });
    // 标记公司地址
    var marker = new AMap.Marker({
        position: [116.259242, 40.137933],
        map:map
    });
    var infoWindow;
    var map = new AMap.Map("contactBox", {
        resizeEnable: true,
        center:[116.259242, 40.137933],
        zoom: 10
    });

    //在指定位置打开信息窗体
    function openInfo() {
        //构建信息窗体中显示的内容
        var info = [];
        // info.push("<div><div><img style=\"float:left;\" src=\" http://webapi.amap.com/images/autonavi.png \"/></div> ");
        info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>北京云掌行科技有限公司</b>");
        info.push("电话 : 010-52985810   邮编 : 100102");
        info.push("地址 :北京市昌平区沙河镇北二村9号</div></div>");
        infoWindow = new AMap.InfoWindow({
            content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
        });
        infoWindow.open(map, map.getCenter());
    }
    openInfo();
    // 手机端的下拉菜单 begin
    var btnToggle=$(".rd-toggle");
    var mobilemenu=$(".rd-mobilemenu_ul");
    // 设置下拉的初始状态
    // $(".rd-mobilemenu_ul").css({dispaly:"none"});
    btnToggle.click(function(){
        $(this).toggleClass("active");
        mobilemenu.toggleClass("active");
    })
// 手机端的下拉菜单 end
    // 底部点击时实现下载的展开
     var downlistword=$(".downlistword");
     downlistword.click(function () {
         $(this).next(".downlistpic-box").slideToggle();
         $(this).children().toggleClass("active");
     })
     //导航的动效
     var daohang=$(".navbar-daohang-content li");
     console.log(daohang.length);
     daohang.click(function(){
        var index=$(this).index();
        daohang.removeClass("hot");
        $(this).addClass("hot");
     })
     //爱车百科数据的获取
     /*$.ajax({
         url:"http://101.201.76.138:8080/queryNewsInfoByPage.shtml?page=1&rows=10",
         type:"get",
         dataType : "script",
         scriptCharset : "gbk",
         success:function (data) {
             console.log(data);
             console.log(data[code]);
         }
     })*/

})
