
  let dropBtn = document.querySelectorAll(".dropdown__toggle");
  let dropItem = document.querySelectorAll(".dropdown");
  let dropLink = document.querySelectorAll(".dropdown-item__link");

  dropBtn.forEach(function (element) {
    element.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;

      dropBtn.forEach(function (btn) {
        btn.classList.remove("dropdown-toggle--active");
      });
      e.currentTarget.classList.add("dropdown-toggle--active");

      dropItem.forEach(function (element) {
        element.classList.remove("dropdown--active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("dropdown--active");
    });
  });

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".header__nav");
  let menuLinks = menu.querySelectorAll(".nav-list__link");
  let inBtn = document.querySelector(".header-nav__btn");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__nav--active");
  inBtn.classList.toggle("header-nav__btn--active");
  document.body.classList.toggle("stop__scroll");
});

menuLinks.forEach(function (el) {
  burger.classList.remove("burger--active");
  menu.classList.remove("header__nav--active");
  document.body.classList.remove("stop__scroll");
});


let search = document.querySelector(".search-mobile__form");
let searchBtn = document.querySelector(".header-top__search");
let closeBtn = document.querySelector(".close__btn");

searchBtn.addEventListener("click", function () {
  search.classList.toggle("search-mobile-form--active");
  searchBtn.classList.toggle("header-top__search--active");
  closeBtn.classList.toggle("close__btn--active");
});

closeBtn.addEventListener("click", function () {
  search.classList.remove("search-mobile-form--active");
  searchBtn.classList.remove("header-top__search--active");
  closeBtn.classList.remove("close__btn--active");
});







