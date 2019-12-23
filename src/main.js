

jQuery(function($) {

  $(document).ready(function () {

    console.log('YEP');

    var wWindow = $(window).width();

    $(function() {
      $('.header_burger').click(function(){
        $('.header_burger').toggleClass('active');

        if (wWindow < 768) {
          $('.header_button, .header_nav, .header_address').fadeToggle(300);
        } else {
          $('.header_nav').fadeToggle(300);
        }

      });
    });

    if (wWindow > 1200) {

      var scrolled1;

      $(window).scroll(function () {

        scrolled1 = $(window).scrollTop();

        if (scrolled1 > 10) {

          $('.header_nav nav.menu ul.none').addClass('scroll')

        }
      });
    }

    $('.drop-down').hover(function () {

      $('.drop-down ul').fadeIn(300)

    }, function () {

      $('.drop-down ul').fadeOut(300)

      });


    if (wWindow < 768) {

      var scrolled1;

      $(window).scroll(function () {

        scrolled1 = $(window).scrollTop();

        if (scrolled1 > 10) {

          $('.header_button, .header_nav, .header_address').fadeOut(300);
          $('.header_burger').removeClass('active');

        }
      });
    }

    if (wWindow < 1200) {

      var scrolled1;

      $(window).scroll(function () {

        scrolled1 = $(window).scrollTop();

        if (scrolled1 > 10) {

          $('.header_nav').fadeOut(300);
          $('.header_burger').removeClass('active');

        }
      });
    }

    $('input.def-button').on('click', function () {

      $('.form_call').fadeOut('300', function() {
        $('.form_thank').css('display','flex');
      });
    });

    $('.form_black, img.remove').on('click', function () {
      $('#form').fadeOut(300);
      $('.popup-doc').fadeOut(300);
    });

    $('button.call').on('click', function () {
      $('#form').fadeIn(300);
    });




    $('.yes input').on('click', function () {

      console.log('YEP');

      $('.yes').toggleClass('not-active');
    });





    $(".slider-doctor-card").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: false,
      dots: true,
      nav: false,
      dotsEach: true,

      responsive: {
        0: {
          items: 1
        },

        768: {
          items: 3,
        },

        1200: {
          items: 3
        }
      }
    });


    $(".slider-document-card").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: false,
      nav: false,
      dotsEach: true,

      responsive: {
        0: {
          items: 1,
          dots: true,
        },

        768: {
          items: 3,
          dots: false,
        },

        1200: {
          items: 3,
          dots: false,
        }
      }
    });


    $('.document img').on('click', function () {
      console.log("netr");

      var popupSrc = $(this).attr('src');

      $('.popup-doc').fadeToggle();
      $('.popup-doc img').attr('src', popupSrc);

    });

    $("#phone, .phone").mask("+7(999)999-99-99");

  });

});


