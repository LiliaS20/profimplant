

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



    $(window).scroll(scrollArrow);

    function scrollArrow() {

      $nnn = 0;

      var scrolled = $(window).scrollTop();

      if (scrolled > 10) {

        if (wWindow > 1200) {
          $('.header_nav nav.menu ul.none').fadeOut(300);

          $('ul.menu__item li.none').hover(function(){
           $('ul.none').fadeToggle(300);

           $nnn = $nnn + 1;

           console.log($nnn);
         });
        }

        $('.header_burger').removeClass('active');

        if (wWindow < 768) {
          $('.header_button, .header_nav, .header_address').fadeOut(300);
        } else {

          if (wWindow < 1200) {
            $('.header_nav').fadeOut(300);
          }
        }
      }
    }

    $('.yes input').on('click', function () {

      console.log('YEP');

      $('.yes').toggleClass('not-active');
    });








  });

});


