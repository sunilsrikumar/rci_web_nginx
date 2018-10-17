function getVideo(medianame, videoId) {
    var player;


    $('.fancybox').fancybox({
        tpl: {
            
            wrap: '<div class="fancybox-wrap" tabIndex="-1">' +
                '<div class="fancybox-skin">' +
                '<div class="fancybox-outer">' +
                '<div id="player">' + 
                '</div></div></div></div>'
        },
        helpers:{
            overlay : {
                closeClick: false
            } 
        },

        beforeShow: function() {

            $("#player").addClass(videoId);
            $.ajax({
                async: false,
                type: "GET",
                url: "/getvideoURL?mediaName=" + medianame,
                data: {},
                // async: false,
                success: function(response) {
                    // console.log(response);
                    player = flowplayer("#player", {
                        // autoplay: true,
                        splash: true,
                        clip: {
                            // autoplay: true,
                            sources: [{
                                type: "video/ogg",
                                src: response
                            }, {
                                type: "video/mp4",
                                src: response
                            }]
                        },

                    });
                }
            }).fail(function() {
                console.log("error loading data");
            });


        },
        afterShow: function() {
                // Code to execute after the pop up shows
                $("html.safari-mac,.safari-mac body").attr("style", "overflow: hidden !important");
        },
        beforeClose: function() {
            player.shutdown();
            $(document).unbind('click.fb-start');

        },
        afterClose: function() {
            console.log("after close popup");
            $("html.safari-mac,.safari-mac body").attr("style", "overflow: auto !important");;

        },
    });

}