        //Captcha chat module starts
        ! function() {
            //if ($("body").hasClass("page-id-homepage")) {
    
                var protocol = location.protocol;
                var domain = location.hostname + location.pathname;

                //if (!cookie.getCookie("chat_captcha_solved") || protocol == "http:") {
          
                    var timeout; // Id of setInterval -- glabal so that never overriden on redeclaration

                    $(".captcha-chat").show();
                    var captcha = new $.Captcha({
                        onFailure: function() {

                            $(".captcha-chat .wrong").show({
                                duration: 30,
                                done: function() {
                                    var that = this;
                                    clearTimeout(timeout);
                                    $(this).removeClass("shake");
                                    $(this).css("animation");
                                    //Browser Reflow(repaint?): hacky way to ensure removal of css properties after removeclass
                                    $(this).addClass("shake");
                                    var time = parseFloat($(this).css("animation-duration")) * 1000;
                                    timeout = setTimeout(function() {
                                        $(that).removeClass("shake");
                                    }, time);
                                }
                            });

                        },

                        onSuccess: function() {
                            var cookie;
                            cookie.setCookie("chat_captcha_solved", "YES");
                            if (protocol == "http:") {
                                location.replace("https://" + domain);
                                $("#captcha .refresh, #captcha .validate").off("click.captcha");
                                $("#captcha .user-text").off("keypress.captcha");
                                $(".captcha-chat .wrong").hide();
                                $(".captcha-chat .redirecting").show();
                            } else if (protocol == "https:") {
                                $(document).trigger("captchaSolved");
                                $(".captcha-chat .wrong").hide();
                                $(".captcha-chat .captcha_loading").show();
                                $("#captcha .refresh, #captcha .validate").off("click.captcha");
                                $("#captcha .user-text").off("keypress.captcha");
                                //fire drift show event and catch that in drift ready
                                //now start showing loading in canvas
                            }
                        }
                    });

                    captcha.generate();
                    // var userAgent;
                    // if (!userAgent.isTouchDevice()) {
                    //     $(".chat-icon").mouseenter(function() {
                    //         $(".captcha-container").toggleClass("shown");
                    //     });
                    // } else {
                    //     $(".chat-icon").click(function() {
                    //         $(".captcha-container").toggleClass("shown");
                    //     });
                    // }
                         $(".chat-icon").mouseenter(function() {
                            $(".captcha-container").toggleClass("shown");
                        });                   

                //} //if

                drift.on('ready', function(api, payload) {

                    if (!cookie.getCookie("chat_captcha_solved") || protocol == "http:") {
                        api.widget.hide();
                    }

                    else {
                        $(".captcha-chat").hide();
                        api.sidebar.open();
                    }

                    $(document).on("captchaSolved", function(){
                        $(".captcha-chat").hide();
                        api.widget.show();
                        api.sidebar.open();
                    });

                });


            //} // if
        }();
        //captcha chat module finishes