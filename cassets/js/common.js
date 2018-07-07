$(window).ready(function(){

        //Relode On Resize / ZoomIn/Out
        // var windowWidth = $(window).width();
        // var windowHeight = $(window).height();

        // $(window).resize(function() {
        //     if(windowWidth != $(window).width()) {
        //         location.reload();
        //         return;
        //     }
        // });

    function scrollLeftToRight(){
        var div = $('.scrolling_wrapper');
        var remWidth = div[0].scrollWidth - $(this).width();
        var scrollableHeight = remWidth - div.scrollLeft();
        var pos = div.scrollLeft();
        var remainingTime = (scrollableHeight - pos) * 100 / 10; //here 100 is a speed
        $('.scrolling_wrapper').animate({
            scrollLeft:remWidth
        },{
            duration: remainingTime,
            easing: "linear",
        }); 
    }

    function scrollRightToLeft(){
        var div = $('.scrolling_wrapper');
        var remWidth = div[0].scrollWidth - $(this).width();
        var scrollableHeight = remWidth - div.scrollLeft();
        var pos = div.scrollLeft();
        var remainingTime = (pos * 100) / 10;
        $('.scrolling_wrapper').animate({
            scrollLeft: 0
        },{
            duration: remainingTime,
            easing: "linear",
        });        
    }
    $('.flags_forward').mouseenter(scrollRightToLeft);
    $('.flags_forward').mouseleave(function(){
        $('.scrolling_wrapper').stop();
    });
    $('.flags_backward').mouseenter(scrollLeftToRight);  

    $('.flags_backward').mouseleave(function(){
        $('.scrolling_wrapper').stop();
    }); 


    function slideUpToDown(){
        var div = $('.caption_overflow');
        var remHeight = div[0].scrollHeight - $(this).height();
        var scrollableHeight = remHeight - div.scrollTop();
        var pos = div.scrollTop();
        var remainingTime = (scrollableHeight - pos) * 100 / 10; //here 100 is a speed
        $('.caption_overflow').animate({
            scrollTop:remHeight
        },{
            duration: remainingTime,
            easing: "linear",
        }); 
    }

    function slideDownToToUp(){
        var div = $('.caption_overflow');
        var remHeight = div[0].scrollHeight - $(this).height();
        var scrollableHeight = remHeight - div.scrollTop();
        var pos = div.scrollTop();
        var remainingTime = (pos * 100) / 10; //here 100 is a speed
        $('.caption_overflow').animate({
            scrollTop: 0
        },{
            duration: remainingTime,
            easing: "linear",
        });        
    }
    $('.downward_dir').mouseenter(slideDownToToUp);
    $('.downward_dir').mouseleave(function(){
        $('.caption_overflow').stop();
    });
    $('.upward_dir').mouseenter(slideUpToDown);  

    $('.upward_dir').mouseleave(function(){
        $('.caption_overflow').stop();
    });

});


$(window).load(function() {
  // The slider being synced must be initialized first
    var item_width;
    var window_width = window.innerWidth;
    console.log(window_width);
    if(window_width < 768) {
        item_width = 150;
    }
    if (window_width < 500) {
        item_width = 100;
    }
    if(window_width>=768) {
        item_width = 210;
    }

  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: item_width,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});