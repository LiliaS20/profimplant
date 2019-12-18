

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

  });

  $('ul.menu__item li:nth-child(2)').hover(function(){
    $('ul.none').fadeToggle(300);
  });

});


