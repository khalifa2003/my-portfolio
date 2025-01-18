const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
  navMenu.classList.toggle("active");

  // Change hamburger icon to "X" when menu is open
  if (navMenu.classList.contains("active")) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>'; // Close icon
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
  }
});

// Close Menu When a Link is Clicked (Mobile)
navMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Create Sidebar
function createSidebar() {
  return `
    <aside class="sidebar ">
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
        <a href="https://www.facebook.com/khalifa112003" class="btn" target="_blank">
          <div class="sign">
            <i class="fab fa-facebook facebook"></i>
          </div>
          <div class="text">khalifa112003</div>
        </a>

        <a href="https://github.com/khalifa2003" class="btn" target="_blank">
          <div class="sign">
            <i class="fab fa-github github"></i>
          </div>
          <div class="text">@khalifa2003</div>
        </a>

        <a href="https://www.youtube.com/@ProgrammingArea" class="btn" target="_blank">
          <div class="sign">
            <i class="fab fa-youtube youtube"></i>
          </div>
          <div class="text">@ProgrammingArea</div>
        </a>

        <a href="https://www.linkedin.com/in/khalifa2003/" class="btn" target="_blank">
          <div class="sign">
            <i class="fab fa-linkedin linkedin"></i>
          </div>
          <div class="text">khalifa2003</div>
        </a>
      </div>
    </aside>
  `;
}

// Inject Sidebar into the DOM
document.getElementById("sidebar").innerHTML = createSidebar();

// Close the hamburger menu if the screen size increases
window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Observe sections and skill cards for scroll animations
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Observe sections
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Observe skill cards
  skillCards.forEach((card) => {
    observer.observe(card);
  });
});

// Projects filter functionality
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
document.addEventListener("DOMContentLoaded", function () {
  // Target elements with slide-in classes
  const slideInElements = document.querySelectorAll(
    ".slide-in-right, .slide-in-left, .slide-in-top, .slide-in-bottom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1, // Adjust this value for small screens
    }
  );

  // Observe all slide-in elements
  slideInElements.forEach((element) => {
    observer.observe(element);
  });

  // Force trigger the observer on small screens
  if (window.innerWidth <= 991) {
    slideInElements.forEach((element) => {
      element.classList.add("active"); // Force add the active class
    });
  }
});