$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 0,
        nav: true,
        loop: false,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3,
                slideBy: 3
            }
        }
    });


    function scrollTo(a) {
        $('html, body').animate({
            'scrollTop': $(a).position().top
        });
    }

    $('.chooseFormLinkFirst').click(function() {
        scrollTo('.socialMedialinkSectionFirst');
    })
    $('.chooseFormLinkSecond').click(function() {
        scrollTo('.socialMedialinkSectionSecondWrapper');
    })
    $('.chooseFormLinkThird').click(function() {
        scrollTo('.socialMedialinkSectionThird');
    })
    $('.chooseFormLinkFourth').click(function() {
        scrollTo('.socialMedialinkSectionFourthWrapper');
    })
    $('.socialAnalyticsWrapper>div:nth-child(1) p').click(function() {
        scrollTo('.webMobileAnalyticsWrapper');
    })
    $('.socialAnalyticsWrapper>div:nth-child(2) p').click(function() {
        scrollTo('.socialMediaAnalyticsWrapper');
    })
    $('.diverseForm').click(function() {
        scrollTo('.signalCapabilityWrapper');
    })

    $( ".owl-item" ).delegate( "a", "click", function(event) {
        event.preventDefault();
        var path = $(this).attr('href');
        if (event.ctrlKey) {
            window.open(path)
        } else {
        $(this).find("span").css({ 'color': '#e2292f', 'font-family': 'Poppins', 'font-weight': '700' });
        $('.owl-item a.active').find("span").css({ 'color': '#575757', 'font-family': 'Poppins', 'font-weight': '400' });
        $('.owl-item a.active').removeClass('active');
            setTimeout(function () {
                window.location.href = path; //will redirect to your blog page (an ex: blog.html)
            }, 200);
        } 
    })
    $( "#subMenu" ).delegate( "a", "click", function(event) {
        event.preventDefault();
        $( "#subMenu p" ).css({ 'color': '#575757'});
        var path = $(this).attr('href');
        if (event.ctrlKey) {
            window.open(path)
        } else {
            $(this).find("p").css({ 'color': '#e2292f'});
            setTimeout(function () {
                window.location.href = path; //will redirect to your blog page (an ex: blog.html)
            }, 200);
        } 
    })
    $('.digitalMarketingLinkSection.mobileContentSlide:first-child()').click(function() {
        if ((pageUrl == '/digital-marketing-agency/') && ($(window).width() > 767)) {
            window.location.href = '/search-engine-optimization/';
        }
    })
    $('.digitalMarketingLinkSection.mobileContentSlide:nth-child(2)').click(function() {
        if ((pageUrl == '/digital-marketing-agency/') && ($(window).width() > 767)) {
            window.location.href = '/social-media-management/';
        }
    })
    $('.digitalMarketingLinkSection.mobileContentSlide:nth-child(3)').click(function() {
        if ((pageUrl == '/digital-marketing-agency/') && ($(window).width() > 767)) {
            window.location.href = '/online-advertising-service/';
        }
    })
    $('.digitalMarketingLinkSection.mobileContentSlide:nth-child(4)').click(function() {
        if ((pageUrl == '/digital-marketing-agency/') && ($(window).width() > 767)) {
            window.location.href = '/digital-analytics-service/';
        }
    })
    $('.digitalMarketingLinkSection.mobileContentSlide:nth-child(5)').click(function() {
        if ((pageUrl == '/digital-marketing-agency/') && ($(window).width() > 767)) {
            window.location.href = '/competitive-intelligence/';
        }
    })
    $('.digitalMarketingLinkSection.mobileContentSlide:nth-child(6)').click(function() {
        if ((pageUrl == '/digital-marketing-agency/') && ($(window).width() > 767)) {
            window.location.href = '/content-marketing-company/';
        }
    })
})