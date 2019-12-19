

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
    });



    // $(window).scroll(scrollArrow);

   /* if (wWindow > 1200) {

      function scrollArrow() {

        var scrolled = $(window).scrollTop();

        if (scrolled > 10) {
          console.log("kd");
          $('ul.menu__item ul.scroll').addClass("hover");
          $('ul.menu__item li.scroll').addClass("hover");

         if ($('ul.menu__item li.scroll').hasClass("hover"))
           $('ul.menu__item li.scroll').mouseenter(function(){
            // $('ul.menu__item ul.none').fadeIn(300);
           });

        } else {
          $('ul.menu__item li.scroll').removeClass("hover");


        }
      }

    }*/

    /*  if (wWindow < 1200) {

        function scrollArrow() {

          var scrolled = $(window).scrollTop();

          if (scrolled > 10) {
            $('.header_nav').fadeOut(300);
            $('.header_burger').removeClass('active');
          }
        }
      } else {

        if (wWindow < 768) {

          function scrollArrow() {

            var scrolled = $(window).scrollTop();

            if (scrolled > 10) {

              $('.header_button, .header_nav, .header_address').fadeOut(300);
              $('.header_burger').removeClass('active');
            }
          }
        }
      }*/



   /* function scrollArrow() {

      var scrolled = $(window).scrollTop();

      if (scrolled > 10) {

       // $('.header_nav nav.menu ul.none').fadeOut(300);


        $('ul.menu__item li.none').mouseenter(function() {
          $('ul.none').fadeIn(300);

          console.log('da')
        });

        $('ul.menu__item li.none').mouseout(function() {
          $('ul.none').fadeOut(300);
          console.log('net')
        });
      }
    }



   if (wWindow > 1200) {

      $(window).scroll(scrollArrow);



    }*/

    /*

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
    */

/*    $(window).scroll(scrollArrow);

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
    }*/





    $('.yes input').on('click', function () {

      console.log('YEP');

      $('.yes').toggleClass('not-active');
    });








  });

});


