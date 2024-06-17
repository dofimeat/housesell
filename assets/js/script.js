'use strict';

const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector(".navlist");

// Обработчик события для кнопки меню
menuIcon.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});


// const /** {NodeElement} */ $navbar = document.querySelector(".navbar-list");
// const /** {NodeElement} */ $navToggler = document.querySelector(".icon-btn");

// $navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

// const /** {NodeElement} */ $header = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//     $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
// });