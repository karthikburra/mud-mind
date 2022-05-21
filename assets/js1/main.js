(function ($) {
  "use strict";
  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  var carousel = function () {
    $(".featured-carousel").owlCarousel({
      loop: false,
      autoplay: true,
      margin: 30,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: false,
      dots: true,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-ios-arrow-back'></span>",
        "<span class='ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();

  $(".about-slider-out-team").owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    nav: true,
    navText: [
      '<i class="fa fa-arrow-left " aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right " aria-hidden="true"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
        margin: 0,
      },
    },
  });

  $(".gallery-section-inner").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
})(jQuery);
