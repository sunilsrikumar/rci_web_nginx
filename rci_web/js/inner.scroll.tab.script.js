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
                items: 4,
                slideBy: 3
            }
        }
    });
    $(".owl-item").delegate("a", "click", function(event) {
        event.preventDefault();
        var path = $(this).attr('href');
        if (event.ctrlKey) {
            window.open(path)
        } else {
            $(this).find("span").css({ 'color': '#e2292f', 'font-family': 'Poppins', 'font-weight': '700' });
            $('.owl-item a.active').find("span").css({ 'color': '#575757', 'font-family': 'Poppins', 'font-weight': '400' });
            $('.owl-item a.active').removeClass('active');
            setTimeout(function() {
                window.location.href = path; //will redirect to your blog page (an ex: blog.html)
            }, 200);
        }
    })
})