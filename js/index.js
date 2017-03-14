
window.onload= function () {
    (function(){
        window.scrollReveal = new scrollReveal({ reset: true, move: '50px'});
    })();
}
$(function() {
    $('.to-top').toTop();
    $('.home').click(function(){
        $.scrollTo('#sec1',500);
    });
    $('.me').click(function(){
        $.scrollTo('#sec2',800);
    });
    $('.skill').click(function(){
        $.scrollTo('#sec3',1000);
    });
    $('.project').click(function(){
        $.scrollTo('#sec4',1200);
    });
    $('.contact').click(function(){
        $.scrollTo('#sec5',1200);
    });
    $(document).ready(function(){
 $('.loading').fadeOut();
});

    var html = document.getElementsByTagName('html')[0];
    /*取到屏幕的宽度*/
    var width = window.innerWidth;
    /* 640 100  320 50 */
    var fontSize = width/640*100;
    /*设置fontsize*/
    html.style.fontSize = fontSize +'px';
    window.onresize = function(){
        var html = document.getElementsByTagName('html')[0];
        /*取到屏幕的宽度*/
        var width = window.innerWidth;
        /* 640 100  320 50 */
        var fontSize = width/640*100;
        /*设置fontsize*/
        html.style.fontSize = fontSize +'px';
    }
});
