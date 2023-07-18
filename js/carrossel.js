//Carrossel Carros

const swiper = new Swiper('.swiper', {
  spaceBetween: 5,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
  type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});

//Carrossel Carros