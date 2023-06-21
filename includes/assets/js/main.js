jQuery(document).ready(function(){

  
  var mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30, // Distance between slides in px.
    loop: false,
    centeredSlides: false,
    autoplay: false,
    // autoplay: {
    //   delay: 3000,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },  
    fadeEffect: {
        crossFade: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    },

    
  });


});

