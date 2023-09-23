$(document).ready(function () {
    $(".box-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: false,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: true,

      autoplay: true,
      autoplaySpeed: 1000,
    });
  });
  


  $(document).ready(function () {
    $(".item-img ").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: false,
      dots: true,

      autoplay: true,
      autoplaySpeed: 1000,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
     
    });
  });
  


