
//Light Box Pilotos

function openLightbox(lightboxId) {
  var lightbox = document.getElementById(lightboxId);
  lightbox.style.display = 'block';
}


function closeLightbox(lightboxId) {
  var lightbox = document.getElementById(lightboxId);
  lightbox.style.display = 'none';
}

//Light Box Pilotos



//Carrossel Carros

const swiper = new Swiper('.swiper', {
    spaceBetween: 5,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
     autoplay: {
       delay: 4000,
    },
});

//Carrossel Carros
