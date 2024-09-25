const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const filterMenu = document.querySelectorAll(".filter-menu li");
  const cards = document.querySelectorAll(".card");

  filterMenu.forEach((menu) => {
    menu.addEventListener("click", function () {
      filterMenu.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");
      cards.forEach((card) => {
        if (filterValue === "all" || card.classList.contains(filterValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
