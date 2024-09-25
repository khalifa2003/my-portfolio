// Select the hamburger button and the nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// When the hamburger is clicked
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
