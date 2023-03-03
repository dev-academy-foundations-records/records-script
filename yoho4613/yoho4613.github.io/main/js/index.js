const menuIcon = document.querySelector(".menu-icon");
const navbarLinks = document.querySelector(".mobile__menu");
const icon = document.querySelector('#icon');

menuIcon.addEventListener("click", () => {
  navbarLinks.classList.toggle("show-menu");
});