d = new Date();
var windowHeight = 0;
if ($(window).outerHeight() < 700 && $(window).width() > 767) {
    windowHeight = $(window).outerHeight()
}
$(window).on("resize", function() {
    approachDivPosChange();
    boxToggle();

}).resize();
$(document).ready(function() {
    $(".approachLine").insertAfter(".approachsubLeft");
});


function approachDivPosChange() {
    if ($(window).width() < 768) {
        $("#architectSolution").insertAfter("#consultation");
        $("#agile").insertAfter("#visualization");
        $("#QA").insertAfter("#performance");
        $("#support").insertAfter("#productDelivery");
    } else {
        $("#architectSolution").insertBefore("#UX");
        $("#agile").insertAfter("#UX");
        $("#QA").insertAfter("#agile");
        $("#support").insertAfter("#QA");
    }
}
if ($(window).width() < 767) {
    $(".accordion-section").siblings().find(".approachSteps").css("display", "none"); //close all divs
}

function fade() {
    $('.fade').each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight(),
            windowBottom = $(window).scrollTop() + $(window).innerHeight();
        if ($("#scrollLine").offset().top + $("#scrollLine").outerHeight() + 10 > $(this).offset().top) {
            if ($(this).hasClass("lt")) {
                //var src=null;
                if (!$(this).hasClass('fadeInLeft')) {

                    var src = $(this).find('img').attr('src');
                    $(this).find('img').css({ display: "none" }).attr('src', '');
                    $(this).find('img').show().attr('src', src + '?' + d.getTime())
                }
                $(this).addClass('fadeInLeft').removeClass('fadeOutLeft');
            } else {
                //var src=null;
                if (!$(this).hasClass('fadeInRight')) {
                    var src = $(this).find('img').attr('src');
                    $(this).find('img').css({ display: "none" }).attr('src', '');
                    $(this).find('img').show().attr('src', src + '?' + d.getTime())
                }
                $(this).addClass('fadeInRight').removeClass('fadeOutRight');
            }

        } else {
            if ($(this).hasClass("lt")) {
                $(this).addClass('fadeOutLeft').removeClass('fadeInLeft');
            } else {
                $(this).addClass('fadeOutRight').removeClass('fadeInRight');
            }
        }

    });
}




$(window).scroll(function() {

    var current_scroll = $(window).scrollTop(),
        approachScroll = $('.approachAnimation').offset().top,
        scrollBottom = $("#scrollLine").offset().top + $("#scrollLine").outerHeight(),
        windowBottom = $(window).scrollTop() + $(window).innerHeight();
    current_scroll = current_scroll - windowHeight
    $("#scrollLine").height(current_scroll);
    $(".approachBall").height(current_scroll);
    if (current_scroll == 0)
        $("#scrollLine,.approachBall").height(0);
    if ($(window).width() > 767)
        fade(); //Fade in elements during scroll
});

function boxToggle() {
    if ($(window).width() < 768) {
        $(".accordion-section").siblings().find(".approachSteps").css("display", "none"); //close all divs
        $(".activeIcon").parent().parent().find(".approachSteps").css("display", "block"); //sows active div
    } else {
        $(".accordion-section").siblings().find(".approachSteps").css("display", "block"); //show all divs
    }
}