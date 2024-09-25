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
function createSidebar() {
  return `
      <aside class="sidebar">
        <img src="./assets/image.jpg" alt="Ahmad Khalifa" />
        <h1>Ahmad Khalifa</h1>
        <h3>Full Stack Developer</h3>

        <!-- Contact Information -->
        <div class="contact-info">
          <p><i class="fas fa-envelope"></i> khalifa14112003@gmail.com</p>
          <p><i class="fas fa-phone"></i> +20 1015388310</p>
          <p><i class="fas fa-birthday-cake"></i> 14 November, 2003</p>
          <p><i class="fas fa-map-marker-alt"></i> Alexandria, Egypt</p>
        </div>

        <!-- Social Media Icons -->
        <div class="social-buttons">
          <a href="https://www.facebook.com/khalifa112003" class="btn">
            <div class="sign">
              <i class="fab fa-facebook facebook"></i>
            </div>
            <div class="text">khalifa112003</div>
          </a>

          <a href="https://www.linkedin.com/in/khalifa2003/" class="btn">
            <div class="sign">
              <i class="fab fa-github github"></i>
            </div>
            <div class="text">@khalifa2003</div>
          </a>

          <a href="https://www.youtube.com/@ProgrammingArea" class="btn">
            <div class="sign">
              <i class="fab fa-youtube youtube"></i>
            </div>
            <div class="text">@ProgrammingArea</div>
          </a>

          <a href="https://github.com/khalifa2003" class="btn">
            <div class="sign">
              <i class="fab fa-linkedin linkedin"></i>
            </div>
            <div class="text">khalifa2003</div>
          </a>
        </div>
      </aside>
  `;
}
document.getElementById("sidebar").innerHTML = createSidebar();
