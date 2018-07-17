/*
  common.js - V_0_0_2
  Date: 10-07-2018
*/

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
    /* script for language section starts */
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
    /* script for language section ends here */

    /* script for flex_caption section starts */
    function slideUpToDown(){
        var div = $('.marquee_wrapper');
        var remHeight = div[0].scrollHeight - $(this).height();
        var scrollableHeight = remHeight - div.scrollTop();
        var pos = div.scrollTop();
        var remainingTime = (scrollableHeight - pos) * 100 / 10; //here 100 is a speed
        $('.marquee_wrapper').animate({
            scrollTop:remHeight
        },{
            duration: remainingTime,
            easing: "linear",
        }); 
    }

    function slideDownToToUp(){
        var div = $('.marquee_wrapper');
        var remHeight = div[0].scrollHeight - $(this).height();
        var scrollableHeight = remHeight - div.scrollTop();
        var pos = div.scrollTop();
        var remainingTime = (pos * 100) / 10; //here 100 is a speed
        $('.marquee_wrapper').animate({
            scrollTop: 0
        },{
            duration: remainingTime,
            easing: "linear",
        });        
    }
    $('.downward_dir').mouseenter(slideUpToDown);
    $('.downward_dir').mouseleave(function(){
        $('.marquee_wrapper').stop();
    });
    $('.upward_dir').mouseenter(slideDownToToUp);  

    $('.upward_dir').mouseleave(function(){
        $('.marquee_wrapper').stop();
    });
    /* script for flex_caption section ends here */

        /* script for contact section starts */
    function contactLeftToRight(){
        var div = $('.contact_desc');
        var remWidth = div[0].scrollWidth - $(this).width();
        var scrollableHeight = remWidth - div.scrollLeft();
        var pos = div.scrollLeft();
        var remainingTime = (scrollableHeight - pos) * 100 / 10; //here 100 is a speed
        $('.contact_desc').animate({
            scrollLeft:remWidth
        },{
            duration: remainingTime,
            easing: "linear",
        }); 
    }

    function contactRightToLeft(){
        var div = $('.contact_desc');
        var remWidth = div[0].scrollWidth - $(this).width();
        var scrollableHeight = remWidth - div.scrollLeft();
        var pos = div.scrollLeft();
        var remainingTime = (pos * 100) / 10;
        $('.contact_desc').animate({
            scrollLeft: 0
        },{
            duration: remainingTime,
            easing: "linear",
        });        
    }
    $('.contact_left_dir').mouseenter(contactRightToLeft);
    $('.contact_left_dir').mouseleave(function(){
        $('.contact_desc').stop();
    });
    $('.contact_right_dir').mouseenter(contactLeftToRight);  

    $('.contact_right_dir').mouseleave(function(){
        $('.contact_desc').stop();
    }); 
    /* script for contact section ends here */

            //Global blazy module starts
            var bLazy = new Blazy({
                selector: '.b-lazy',
                breakpoints: [{
                    width: 767, //max-width
                    src: 'data-src-small'
                }],

                success: function(ele) {
                    $(ele).closest('.image-wrapper').addClass('image-loaded');
                    //$(ele).closest('li.img').addClass('b-loaded');
                    console.log(ele);
                },
                error: function(ele, msg) {

                    var image = $(ele)[0];
                    if (msg === 'missing') {
                        console.warn("Custom ERROR: ", image, " data-src is missing\n");
                    } else if (msg === 'invalid') {
                        console.warn("Custom ERROR: ", image, " data-src is invalid\n");
                    }
                }
            });
            //Global blazy module finishes

});


$(window).load(function() {
  // The slider being synced must be initialized first
    var item_width;
    var window_width = window.innerWidth;
    //console.log(window_width);
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
