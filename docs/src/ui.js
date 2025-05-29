// Random 550 stars
const starCount = 550;
const field = document.querySelector(".starfield");
for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.className = "star";
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${-Math.random() * 100}vh`;
  star.style.opacity = 0.4 + Math.random() * 0.6;
  star.style.animationDelay = `${Math.random() * 20}s`;
  field.appendChild(star);
}

// DOM elements
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const userGreetingBtn = document.getElementById("userGreetingBtn");
const mobileUserGreetingBtn = document.getElementById("mobileUserGreetingBtn");
const userGreetingModal = document.getElementById("userGreetingModal");
const cancelGreetingBtn = document.getElementById("cancelGreeting");
const submitGreetingBtn = document.getElementById("submitGreeting");
const userNameInput = document.getElementById("userName");
const welcomeMessage = document.getElementById("welcomeMessage");
const greetingText = document.getElementById("greetingText");
const scrollFadeElements = document.querySelectorAll(".scroll-fade");

// Navigation
function navigateToSection(sectionId) {
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // If navigating to catalog, ensure items are loaded
    if (sectionId === "catalog") {
      catalogDataLoaded.then(() => {
        window.renderCatalogItems("all");
      });
    }
  }
}

// Event listeners for navigation
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    navigateToSection(targetId);

    // Close mobile menu if open
    mobileMenu.classList.remove("open");
  });
});

// Mobile menu functionality
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

// User greeting functionality
userGreetingBtn.addEventListener("click", () => {
  userGreetingModal.classList.remove("hidden");
});

mobileUserGreetingBtn.addEventListener("click", () => {
  userGreetingModal.classList.remove("hidden");
  mobileMenu.classList.remove("open");
});

cancelGreetingBtn.addEventListener("click", () => {
  userGreetingModal.classList.add("hidden");
});

submitGreetingBtn.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  if (userName) {
    greetingText.textContent = `Вітаємо на борту, ${userName}! Готові до космічної пригоди?`;
    welcomeMessage.classList.remove("hidden");
    welcomeMessage.classList.add("fadeInUp");
    userGreetingModal.classList.add("hidden");

    // Store username in localStorage
    localStorage.setItem("cosmicUserName", userName);

    // Update navbar greeting
    const navbarGreeting = document.createElement("span");
    navbarGreeting.className = "text-purple-400 ml-2";
    navbarGreeting.textContent = userName;
    userGreetingBtn.innerHTML = `<i class="fas fa-user-astronaut mr-2"></i>Привіт, `;
    userGreetingBtn.appendChild(navbarGreeting);
    mobileUserGreetingBtn.innerHTML = `<i class="fas fa-user-astronaut mr-2"></i>Привіт, `;
    mobileUserGreetingBtn.appendChild(navbarGreeting.cloneNode(true));
  }
});

// Check for saved username
document.addEventListener("DOMContentLoaded", () => {
  const savedUserName = localStorage.getItem("cosmicUserName");
  if (savedUserName) {
    greetingText.textContent = `Вітаємо на борту, ${savedUserName}! Готові до космічної пригоди?`;
    welcomeMessage.classList.remove("hidden");

    // Update navbar greeting
    const navbarGreeting = document.createElement("span");
    navbarGreeting.className = "text-purple-400 ml-2";
    navbarGreeting.textContent = savedUserName;
    userGreetingBtn.innerHTML = `<i class="fas fa-user-astronaut mr-2"></i>Привіт, `;
    userGreetingBtn.appendChild(navbarGreeting);
    mobileUserGreetingBtn.innerHTML = `<i class="fas fa-user-astronaut mr-2"></i>Привіт, `;
    mobileUserGreetingBtn.appendChild(navbarGreeting.cloneNode(true));
  }

  // Load initial catalog items after data is loaded
  catalogDataLoaded.then(() => {
    window.renderCatalogItems("all");
  });
});

// Scroll animations
function checkScrollFadeElements() {
  scrollFadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.8) {
      element.classList.add("visible");
    }
  });
}

// Initial check for scroll fade elements
window.addEventListener("load", checkScrollFadeElements);
window.addEventListener("scroll", checkScrollFadeElements);

// Start with home section active
navigateToSection("home");