// Loader
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".loader-wrapper").style.display = "none";
    document.querySelector(".body-loader").style.overflow = "auto";
  }, 1500); // 1000ms = 1 second
});

// Main Swiper
// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,
//   speed: 2500,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: true,
//     reverseDirection: true,
//   },
//   controller: {
//     inverse: true,
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-prev",
//     prevEl: ".swiper-button-next",
//   },
// });

// Posts Swiper
// var swiperPost = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   breakpoints: {
//     // When window width is >= 768px
//     768: {
//       slidesPerView: 2,
//     },
//     992: {
//       slidesPerView: 3,
//     },
//   },
//   speed: 1500,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: true,
//   },
// });
// Scroll to top
const scroll_to_top = document.querySelector(".scroll_to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= window.innerHeight / 2) {
    scroll_to_top.classList.add("scroll_to_top_show");
  } else {
    scroll_to_top.classList.remove("scroll_to_top_show");
  }
});

scroll_to_top.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Dropdown Nav Sub Menu
// const navSubMenuLink = document.querySelectorAll(".nav-sub-menu-link");
// const navSubMenuDropdown = document.querySelectorAll(".nav-sub-menu-dropdown");

// navSubMenuLink.forEach((item, index) => {
//   item.addEventListener("mouseover", () => {
//     navSubMenuDropdown[index].classList.add("nav-sub-menu-dropdown-show");
//   });

//   item.addEventListener("mouseout", () => {
//     navSubMenuDropdown[index].classList.remove("nav-sub-menu-dropdown-show");
//   });
// });

// Sticky Header
// const header = document.querySelector("header");
// const headerLogo = document.querySelector(".header-logo");
// const headerFfollowUsLinks = document.querySelector(".header-follow-us-links");
// const navbarDesktop = document.querySelector(".navbar-desktop");
// const preHeader = document.querySelector(".pre-header");

// window.addEventListener("scroll", () => {
//   const height = preHeader.clientHeight + header.clientHeight;
//   if (window.pageYOffset >= height) {
//     header.classList.add("sticky-header");
//     headerLogo.style.display = "block";
//     headerFfollowUsLinks.style.display = "none";

//     // if (window.pageYOffset >= height + 5) {
//     //   header.classList.add("sticky-header-2");
//     // }
//   } else {
//     header.classList.remove("sticky-header");
//     headerLogo.style.display = "none";
//     headerFfollowUsLinks.style.display = "block";
//     header.classList.remove("sticky-header-2");
//   }
// });

// const mobile_nav_sub_menu_dropdown = document.querySelectorAll(
//   ".mobile-nav-sub-menu-dropdown"
// );
// const mobile_nav_sub_menu = document.querySelectorAll(".mobile-nav-sub-menu");

// const arrow_down = document.querySelector(".arrow-down");
// mobile_nav_sub_menu.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     mobile_nav_sub_menu_dropdown[index].classList.toggle(
//       "mobile-nav-sub-menu-dropdown-show"
//     );
//     if (item.children[0].classList.contains("fa-angle-down")) {
//       item.children[0].classList.remove("fa-angle-down");
//       item.children[0].classList.add("fa-angle-up");
//     } else {
//       item.children[0].classList.add("fa-angle-down");
//       item.children[0].classList.remove("fa-angle-up");
//     }
//   });
// });

//  Sliding Menu Mobile Version
// const hamburger_slider_close_btn = document.querySelector(
//   ".hamburger-slider-close-btn"
// );
// const hamburger_menu = document.querySelector(".hamburger-menu");
// const hamburger_slider = document.querySelector(".hamburger-slider");
// const background_overlay = document.querySelector(".background-overlay");

// hamburger_menu.addEventListener("click", () => {
//   hamburger_slider.classList.add("hamburger-slider-show");
//   background_overlay.classList.add("background-overlay-show");
//   document.body.style.overflow = "hidden";
// });

// hamburger_slider_close_btn.addEventListener("click", () => {
//   hamburger_slider.classList.remove("hamburger-slider-show");
//   background_overlay.classList.remove("background-overlay-show");
//   document.body.style.overflow = "auto";
// });
