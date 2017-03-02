/**
 * Created by Administrator on 2016/11/10.
 */
$(function () {
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
        info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>北京云掌行科技有限责任公司</b>");
        info.push("电话 : 010-52985810   邮编 : 102206");
        info.push("地址 :北京市昌平区沙河镇北二村9号</div></div>");
        infoWindow = new AMap.InfoWindow({
            content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
        });
        infoWindow.open(map, map.getCenter());
    }
    openInfo();
})