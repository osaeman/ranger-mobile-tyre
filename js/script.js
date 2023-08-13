// Loader
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".loader-wrapper").style.display = "none";
    document.querySelector(".body-loader").style.overflow = "auto";
  }, 1500); // 1000ms = 1 second
});

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

// Sticky Header Appearance
const header = document.querySelector("header");
const navbarDesktop = document.querySelector(".navbar-desktop");

window.addEventListener("scroll", () => {
  const height = header.clientHeight;
  if (window.pageYOffset >= height) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
});

//  Sliding Menu Mobile Version
const hamburger_slider_close_btn = document.querySelector(
  ".hamburger-slider-close-btn"
);
const hamburger_menu = document.querySelector(".hamburger-menu");
const hamburger_slider = document.querySelector(".hamburger-slider");
const background_overlay = document.querySelector(".background-overlay");

hamburger_menu.addEventListener("click", () => {
  hamburger_slider.classList.add("hamburger-slider-show");
  background_overlay.classList.add("background-overlay-show");
  document.body.style.overflow = "hidden";
});

hamburger_slider_close_btn.addEventListener("click", () => {
  hamburger_slider.classList.remove("hamburger-slider-show");
  background_overlay.classList.remove("background-overlay-show");
  document.body.style.overflow = "auto";
});
