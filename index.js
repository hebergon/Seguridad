$(document).ready(function(){
    $("#blogs .owl-carousel").owlCarousel({
        margin: 10,
        responsiveClass: true,
        loop: true,
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:false,
                
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
      $("#marcas .owl-carousel").owlCarousel({
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 1
            },
            700: {
                items: 4
            }
        },
        loop: true,
        autoplay: true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        autoHeight:true
    });
    var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });
      $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });
});