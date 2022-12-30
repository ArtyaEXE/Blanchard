new Swiper(".header__swiper", {
  slidesPerView: 1,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
});

new Swiper(".gallery__swiper", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
    disabledClass: "swiper-gallery-disabled",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  spaceBetween: 43,
  slidesPerGroup: 3,
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
  },
});

let dropBtn = document.querySelectorAll(".dropdown-toggle");
let dropItem = document.querySelectorAll(".dropdown");
let dropLink = document.querySelectorAll(".dropdown-list__link");
let openedDropDown = null;

dropBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.stopPropagation();

    const path = e.currentTarget.dataset.path;

    dropBtn.forEach(function (btn) {
      btn.classList.remove("dropdown-toggle--active");
    });

    e.currentTarget.classList.add("dropdown-toggle--active");

    dropItem.forEach(function (element) {
      element.classList.remove("dropdown--active");
    });
    openedDropDown = document.querySelector(`[data-target="${path}"]`);
    openedDropDown.classList.add("dropdown--active");
  });
});
document.body.addEventListener("click", (e) => {
  if (!openedDropDown) return;
  dropBtn.forEach(function (btn) {
    btn.classList.remove("dropdown-toggle--active");
  });
  openedDropDown.classList.remove("dropdown--active");
  openedDropDown = null;
});

// let dropBtn = document.querySelectorAll(".dropdown__toggle");
// let dropItem = document.querySelectorAll(".dropdown");
// let dropLink = document.querySelectorAll(".dropdown-item__link");

// dropBtn.forEach(function (element) {
//   element.addEventListener("click", function (e) {
//     const path = e.currentTarget.dataset.path;

//     dropBtn.forEach(function (btn) {
//       btn.classList.remove("dropdown-toggle--active");
//     });
//     e.currentTarget.classList.add("dropdown-toggle--active");

//     dropItem.forEach(function (element) {
//       element.classList.remove("dropdown--active");
//     });
//     document
//       .querySelector(`[data-target="${path}"]`)
//       .classList.add("dropdown--active");
//   });
// });

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = document.querySelectorAll(".nav-list__link");
let inBtn = document.querySelector(".header-nav__btn");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__nav--active");
  inBtn.classList.toggle("header-nav__btn--active");
  document.body.classList.toggle("stop__scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop__scroll");
    inBtn.classList.toggle("header-nav__btn--active");
  });
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

const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
});

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion-content",
  activeClass: "accordion--active",
});

let tabsBtn = document.querySelectorAll(".list-item__tabs");
let tabsItem = document.querySelectorAll(".catalog-left__block");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("list-item-tabs-active");
    });
    e.currentTarget.classList.add("list-item-tabs-active");

    tabsItem.forEach(function (element) {
      element.classList.remove("left-block-active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("left-block-active");
  });
});

new Swiper(".events__swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".events-button-next",
    prevEl: ".events-button-prev",
    disabledClass: "events-btn-disable",
  },
  pagination: {
    el: ".events-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 25,
    },
  },
  loop: false,
});

tippy(".tooltip", {
  trigger: "click",
});

new Swiper(".project__swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".project-button-next",
    prevEl: ".project-button-prev",
    disabledClass: "project-disable",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 14,
  });
  var myPlacemark = new ymaps.Placemark(
    [55.758468, 37.601088],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "/img/Ellipse 12.svg",
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42],
    }
  );
  myMap.behaviors.disable("scrollZoom");
  myMap.geoObjects.add(myPlacemark);
}

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

const validation = new JustValidate(".contacts__form");
validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Минимум 3 символа",
    },
    {
      rule: "maxLength",
      value: 30,
    },
    {
      rule: "required",
      errorMessage: "Введите имя",
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Введите телефон",
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        console.log(phone);
        return Number(phone) && phone.lenght > 0;
      },
    },
    {
      rule: "required",
      errorMessage: "Недопустимый формат",
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        console.log(phone);
        return Number(phone) && phone.lenght === 10;
      },
    },
  ]);
