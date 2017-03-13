/**
 * Created by rabbcat on 2017/1/3.
 */
/**
 * ITCAST WEB
 * Created by zhousg on 2016/8/19.
 */
$(function(){
    banner();
});
/*动态响应式轮播图*/
function banner(){
    /*
     * 1.图片数据  抽象出来 数据结构
     * 2.判断当前的设备  屏幕的宽度来判断   768px
     * 3.动态渲染轮播图
     * 3.1 准备数据
     * 3.2 把数据转化成html结构  （字符串拼接  模版引擎）
     * 3.3 页面渲染
     * 4.测试  页面尺寸改变的时候要求重新渲染
     * */

    /*1.图片数据  抽象出来 数据结构*/
    var imageList = [
        {
            pcImg:'images/slide_01_2000x410.jpg',
            mImg:'images/slide_01_640x340.jpg'
        },
        {
            pcImg:'images/slide_02_2000x410.jpg',
            mImg:'images/slide_02_640x340.jpg'
        },
        {
            pcImg:'images/slide_03_2000x410.jpg',
            mImg:'images/slide_03_640x340.jpg'
        },
        {
            pcImg:'images/slide_04_2000x410.jpg',
            mImg:'images/slide_04_640x340.jpg'
        }
    ];

    var renderHtml = function(){
        var width = $(window).width();
        var isMobile = width >= 768 ? false:true;
        //var pointStr = $('#point_template').html();
        var imageStr = $('#image_template').html();
        //var pointFuc = _.template(pointStr);
        var imageFuc = _.template(imageStr);
        //console.log(pointFuc);
        //console.log(imageFuc);
        //var pointHtml = pointFuc({model:imageList});
        var imageHtml = imageFuc({model:imageList,isMobile:isMobile});
        //console.log(pointHtml);
        console.log(imageHtml);
        //$('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);
    };

    $(window).on('resize',function(){
        renderHtml();
    }).trigger('resize');

}