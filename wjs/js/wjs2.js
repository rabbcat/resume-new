window.onload= function () {
    banner();
    //initTabs();
}
function banner(){
    var imgList=[
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
    ]
   var render= function () {
       var width=$(window).width();
       console.log(width);
       var isMobile=width<768?true:false;
       console.log(isMobile);
       var imgStr=document.querySelector('#imgTemplate').innerHTML;
       console.log(imgStr);
       var olStr=document.querySelector('#olTemplate').innerHTML;
       var imgFuc= _.template(imgStr);
       var olFuc= _.template(olStr);
       console.log(imgFuc);
       console.log(olFuc);
       var imgHtml=imgFuc({model:imgList,isMobile:isMobile});
       console.log(imgHtml);
       var olHtml=olFuc({model:imgList});
       console.log(olHtml);
       document.querySelector('.carousel-inner').innerHTML=imgHtml;
       document.querySelector('.carousel-indicators').innerHTML=olHtml;
   }
    render();
    //$(window).trigger('resize');
    //$(window).on('resize', function () {
    //render();
    //});
    $(window).on('resize', function () {
        render();
    }).trigger('resize');//链式操作
    var startX=0;
    var moveX=0;
    var distanceX=0;
    var isMove=false;
    $('.wjs_banner').on('touchstart', function (e) {
        startX= e.originalEvent.touches[0].clientX;
    });
    $('.wjs_banner').on('touchmove', function (e) {
        moveX= e.originalEvent.touches[0].clientX;
        isMove=true;
        distanceX=moveX-startX;
    });
    $('.wjs_banner').on('touchend', function (e) {
        if(Math.abs(distanceX)>50&&isMove){
            if(distanceX<0){
                $('.carousel').carousel('next');
            }
            else{
                $('.carousel').carousel('prev');
            }
        }
        startX=0;
        moveX=0;
        distanceX=0;
        isMove=false;
    })
}

function initTabs(){
    /*设置父容器的宽度  等于 所有的子容器的宽度 的和*/
    var ul = $('.carousel-inner .item');
    var lis = ul.find('li');

    var width = 0;

    $.each(lis,function(i,o){
        /*通过width 只获取到了 内容的宽度*/
        /* innerWidth() 内容+内边距*/
        /* outerWidth() 内容+内边距+边框*/
        /* outerWidth(true) 内容+内边距+边框+外边距*/
        width += $(o).innerWidth();
    })
    ul.width(width);

    /*实现在移动端的滑动*/
    itcast.iScroll({
        swipeDom:$('.carousel-inner').get(0),
        swipeType:'x',
        swipeDistance:50
    });

}