
window.onload= function () {
    (function(){
        window.scrollReveal = new scrollReveal({ reset: true, move: '50px'});
    })();
    //var nav_ul=document.getElementById('nav_ul');
    //var ullis=nav_ul.getElementsByTagName('li');
    //var secs=document.getElementsByClassName('section');
    //var timer=null;
    //for(var j=0;j<ullis.length;j++) {
    //    ullis[j].index = j;
    //    ullis[j].onclick = function () {
    //        var target = secs[this.index].offsetTop;
    //        //console.log(target);
    //        clearInterval(timer);
    //        timer = setInterval(function () {
    //            var leader = window.pageYOffset || document.documentElement.offsetTop || document.body.offsetTop || 0;
    //            console.log(leader);
    //            var step = (target - leader) / 10;
    //            step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //            leader = leader + step;
    //            window.scrollTo(0,leader);
    //            if (leader === target) {
    //                clearInterval(timer);
    //            }
    //        }, 40);
    //    };
    //}

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
    console.log(html);
    /*取到屏幕的宽度*/
    var width = window.innerWidth;
    console.log(width);
    /* 640 100  320 50 */
    var fontSize = width/640*100;
    console.log(fontSize);
    /*设置fontsize*/
    html.style.fontSize = fontSize +'px';
    window.onresize = function(){
        var html = document.getElementsByTagName('html')[0];
        console.log(html);
        /*取到屏幕的宽度*/
        var width = window.innerWidth;
        console.log(width);
        /* 640 100  320 50 */
        var fontSize = width/640*100;
        console.log(fontSize);
        /*设置fontsize*/
        html.style.fontSize = fontSize +'px';
    }
});