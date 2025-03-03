// ドロワーメニュー
$("#js-drawer-button").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
});

// スワイパー
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      spaceBetween: 20,
    },
  },
});
