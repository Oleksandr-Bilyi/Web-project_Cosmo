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
// JSON data for catalog items
const catalogData = {
  planets: [
    {
      id: "mars",
      name: "Марс",
      category: "planets",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
      description:
        "Марс — четверта планета від Сонця, названа на честь давньоримського бога війни. Часто Марс називають «червоною планетою» через червонуватий відтінок поверхні, надаваний оксидом заліза.",
      details: {
        diameter: "6779 км",
        temperature: "-63°C (середня)",
        gravity: "3.721 м/с²",
        moons: "Фобос і Деймос",
      },
    },
    {
      id: "venus",
      name: "Венера",
      category: "planets",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg",
      description:
        "Венера — друга планета від Сонця. Названа на честь давньоримської богині кохання. За розміром і масою дуже близька до Землі і часто називається її «сестрою».",
      details: {
        diameter: "12104 км",
        temperature: "462°C (середня)",
        gravity: "8.87 м/с²",
        moons: "Немає",
      },
    },
    {
      id: "earth",
      name: "Земля",
      category: "planets",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
      description:
        "Земля — третя планета від Сонця, єдина планета, на якій відоме життя. Близько 71% поверхні Землі покрито водою, решту 29% складають континенти і острови.",
      details: {
        diameter: "12742 км",
        temperature: "15°C (середня)",
        gravity: "9.8 м/с²",
        moons: "Місяць",
      },
    },
    {
      id: "jupiter",
      name: "Юпітер",
      category: "planets",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
      description:
        "Юпітер — п'ята планета від Сонця і найбільша в Сонячній системі. Це газовий гігант з масою в 2.5 рази більшою за всі інші планети разом взяті.",
      details: {
        diameter: "139820 км",
        temperature: "-145°C (середня)",
        gravity: "24.79 м/с²",
        moons: "79 відомих супутників",
      },
    },
  ],
  moons: [
    {
      id: "moon",
      name: "Місяць",
      category: "moons",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
      description:
        "Місяць — єдиний природний супутник Землі і п'ятий за величиною супутник в Сонячній системі. Відповідальний за приливи і відливи на Землі.",
      details: {
        diameter: "3474 км",
        temperature: "-173°C до 127°C",
        gravity: "1.62 м/с²",
        orbitAround: "Земля",
      },
    },
    {
      id: "europa",
      name: "Європа",
      category: "moons",
      image: "img/Europa-moon.jpg",
      description:
        "Європа — шостий найближчий супутник Юпітера. Європа має гладку поверхню з льоду і, можливо, підповерхневий океан води, який може містити умови для життя.",
      details: {
        diameter: "3122 км",
        temperature: "-171°C (середня)",
        gravity: "1.315 м/с²",
        orbitAround: "Юпітер",
      },
    },
    {
      id: "titan",
      name: "Титан",
      category: "moons",
      image: "img/Титан.jpg",
      description:
        "Титан — найбільший супутник Сатурна і другий за розміром супутник у Сонячній системі. Має густу атмосферу, що складається переважно з азоту.",
      details: {
        diameter: "5149 км",
        temperature: "-179°C (середня)",
        gravity: "1.352 м/с²",
        orbitAround: "Сатурн",
      },
    },
    {
      id: "ganymede",
      name: "Ганімед",
      category: "moons",
      image: "img/Ganymede-moon.jpg",
      description:
        "Ганімед — найбільший супутник в Сонячній системі, який належить до галілеєвих супутників Юпітера. Ганімед також є єдиним супутником з власним магнітним полем.",
      details: {
        diameter: "5268 км",
        temperature: "-163°C (середня)",
        gravity: "1.428 м/с²",
        orbitAround: "Юпітер",
      },
    },
  ],
  stars: [
    {
      id: "sun",
      name: "Сонце",
      category: "stars",
      image: "img/Sun.jpg",
      description:
        "Сонце — зоря Сонячної системи, яка утримує навколо себе 8 планет, пояс астероїдів, численні комети та інші небесні тіла. Має спектральний клас G2V.",
      details: {
        diameter: "1.39 мільйона км",
        temperature: "5500°C (поверхня), 15 мільйонів °C (ядро)",
        age: "4.6 мільярда років",
        type: "Жовтий карлик",
      },
    },
    {
      id: "proxima-centauri",
      name: "Проксима Центавра",
      category: "stars",
      image: "img/images.jpg",
      description:
        "Проксима Центавра — найближча зоря до Сонячної системи, знаходиться на відстані близько 4.2 світлових років. Це червоний карлик і частина потрійної зоряної системи Альфа Центавра.",
      details: {
        diameter: "200,000 км",
        temperature: "3042°C (поверхня)",
        age: "4.85 мільярда років",
        type: "Червоний карлик",
      },
    },
    {
      id: "sirius",
      name: "Сіріус",
      category: "stars",
      image: "img/sirius 3.jpg",
      description:
        "Сіріус — найяскравіша зоря на нічному небі, знаходиться на відстані 8.6 світлових років від Сонця. Є подвійною зоряною системою, що складається з Сіріуса А та Сіріуса В.",
      details: {
        diameter: "1.7 мільйона км",
        temperature: "9940°C (поверхня)",
        age: "242 мільйони років",
        type: "Білий зоряний карлик",
      },
    },
    {
      id: "betelgeuse",
      name: "Бетельгейзе",
      category: "stars",
      image: "img/betelgeyze.jpg",
      description:
        "Бетельгейзе — дев'ята найяскравіша зоря на нічному небі і друга найяскравіша в сузір'ї Оріона. Це червоний надгігант, який наближається до кінця свого життя і може вибухнути як наднова.",
      details: {
        diameter: "1.2 мільярда км",
        temperature: "3500°C (поверхня)",
        age: "8-8.5 мільйонів років",
        type: "Червоний надгігант",
      },
    },
  ],
  galaxies: [
    {
      id: "milky-way",
      name: "Чумацький Шлях",
      category: "galaxies",
      image: "img/CHumatskyy-SHliakh.jpg",
      description:
        "Чумацький Шлях — галактика, в якій знаходиться Сонячна система. Це спіральна галактика з перемичкою, що містить від 100 до 400 мільярдів зірок.",
      details: {
        diameter: "100,000 світлових років",
        age: "13.6 мільярдів років",
        type: "Спіральна галактика з перемичкою",
        stars: "100-400 мільярдів",
      },
    },
    {
      id: "andromeda",
      name: "Андромеда",
      category: "galaxies",
      image: "img/Andromeda.jpg",
      description:
        "Галактика Андромеди (M31) — найближча до Чумацького Шляху велика галактика, знаходиться на відстані 2.5 мільйонів світлових років. Це спіральна галактика, яка в майбутньому зіллється з нашою.",
      details: {
        diameter: "220,000 світлових років",
        age: "10 мільярдів років",
        type: "Спіральна галактика",
        stars: "1 трильйон",
      },
    },
    {
      id: "triangulum",
      name: "Трикутник",
      category: "galaxies",
      image: "img/Trykutnik.jpg",
      description:
        "Галактика Трикутника (M33) — третя за розміром галактика в Місцевій групі після Андромеди і Чумацького Шляху. Знаходиться на відстані 3 мільйонів світлових років.",
      details: {
        diameter: "60,000 світлових років",
        age: "8 мільярдів років",
        type: "Спіральна галактика",
        stars: "40 мільярдів",
      },
    },
    {
      id: "sombrero",
      name: "Сомбреро",
      category: "galaxies",
      image: "img/sombrero_galaxy.jpg",
      description:
        "Галактика Сомбреро (M104) — спіральна галактика в сузір'ї Діви, відома своєю яскравою випуклістю і пиловим кільцем, що нагадує сомбреро. Знаходиться на відстані 28 мільйонів світлових років.",
      details: {
        diameter: "50,000 світлових років",
        age: "13 мільярдів років",
        type: "Спіральна галактика",
        stars: "100 мільярдів",
      },
    },
  ],
  nebulae: [
    {
      id: "orion",
      name: "Туманність Оріона",
      category: "nebulae",
      image: "img/Orion_Nebula.jpg",
      description:
        "Туманність Оріона (M42) — одна з найяскравіших туманностей, видима неозброєним оком. Це область зореутворення, розташована в сузір'ї Оріона на відстані 1344 світлових років від Землі.",
      details: {
        size: "24 світлових років",
        distance: "1344 світлових роки",
        age: "близько 3 мільйонів років",
        type: "Емісійна туманність",
      },
    },
    {
      id: "crab",
      name: "Крабоподібна туманність",
      category: "nebulae",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/00/Crab_Nebula.jpg",
      description:
        "Крабоподібна туманність (M1) — залишок наднової, яка була зафіксована астрономами в 1054 році. Розташована в сузір'ї Тельця на відстані 6500 світлових років від Землі.",
      details: {
        size: "11 світлових років",
        distance: "6500 світлових років",
        age: "967 років",
        type: "Туманність-залишок наднової",
      },
    },
    {
      id: "eagle",
      name: "Туманність Орла",
      category: "nebulae",
      image: "img/Eagle_Nebula.jpg",
      description:
        'Туманність Орла (M16) — область зореутворення, відома завдяки своїй структурі "Стовпи творіння". Розташована в сузір\'ї Змії на відстані 7000 світлових років від Землі.',
      details: {
        size: "70x55 світлових років",
        distance: "7000 світлових років",
        age: "5.5 мільйонів років",
        type: "Емісійна туманність",
      },
    },
    {
      id: "helix",
      name: "Туманність Спіраль",
      category: "nebulae",
      image: "img/Spyral.jpg",
      description:
        'Туманність Спіраль (NGC 7293) — одна з найближчих до Землі планетарних туманностей. Через свій вигляд часто називається "Око Бога". Розташована в сузір\'ї Водолія.',
      details: {
        size: "2.5 світлових роки",
        distance: "650 світлових років",
        age: "10,600 років",
        type: "Планетарна туманність",
      },
    },
  ],
};

// Get all categories in a flat array
const allItems = Object.values(catalogData).flat();

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
const catalogItemsContainer = document.getElementById("catalogItems");
const searchInput = document.getElementById("searchInput");
const categoryTabs = document.querySelectorAll(".tab-btn");
const scrollFadeElements = document.querySelectorAll(".scroll-fade");
const detailModal = document.getElementById("detailModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalDetails = document.getElementById("modalDetails");
const startGameBtn = document.getElementById("startGameBtn");
const gameCanvas = document.getElementById("gameCanvas");
const gameScore = document.getElementById("gameScore");
const gameLevel = document.getElementById("gameLevel");

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
      renderCatalogItems("all");
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

  // Load initial catalog items
  renderCatalogItems("all");
});

// Catalog functionality
function renderCatalogItems(category) {
  // Clear the container
  catalogItemsContainer.innerHTML = "";

  // Filter items by category
  let itemsToRender = [];
  if (category === "all") {
    itemsToRender = allItems;
  } else {
    itemsToRender = allItems.filter((item) => item.category === category);
  }

  // Apply search filter if there's a search term
  const searchTerm = searchInput.value.toLowerCase().trim();
  if (searchTerm) {
    itemsToRender = itemsToRender.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
  }

  // Render items
  if (itemsToRender.length === 0) {
    catalogItemsContainer.innerHTML = `
                    <div class="text-center py-10 col-span-full">
                        <i class="fas fa-satellite text-5xl mb-4 text-gray-500"></i>
                        <p>Не знайдено жодного об'єкта за вашим запитом</p>
                    </div>
                `;
    return;
  }

  itemsToRender.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "cosmic-card overflow-hidden";
    itemElement.innerHTML = `
                    <div class="relative">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-contain p-4">
                        <div class="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-70"></div>
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-bold mb-2">${item.name}</h3>
                        <p class="text-gray-300 text-sm mb-4 line-clamp-3">${item.description}</p>
                        <button class="view-details cosmic-btn text-sm py-2 px-4" data-id="${item.id}">Детальніше</button>
                    </div>
                `;
    catalogItemsContainer.appendChild(itemElement);

    // Add click event to the button
    const detailButton = itemElement.querySelector(".view-details");
    detailButton.addEventListener("click", () => {
      showItemDetails(item);
    });
  });
}

// Category tabs functionality
categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    categoryTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderCatalogItems(tab.dataset.category);
  });
});

// Search functionality
searchInput.addEventListener("input", () => {
  // Get current active category
  const activeCategory =
    document.querySelector(".tab-btn.active").dataset.category;
  renderCatalogItems(activeCategory);
});

// Show item details in modal
function showItemDetails(item) {
  modalTitle.textContent = item.name;
  modalImage.src = item.image;
  modalImage.alt = item.name;
  modalDescription.textContent = item.description;

  // Generate details HTML
  modalDetails.innerHTML = "";
  if (item.details) {
    for (const [key, value] of Object.entries(item.details)) {
      const detailRow = document.createElement("div");
      detailRow.innerHTML = `
                        <div class="flex justify-between">
                            <span class="font-bold capitalize">${key
                              .replace(/([A-Z])/g, " $1")
                              .trim()}:</span>
                            <span class="text-purple-300">${value}</span>
                        </div>
                    `;
      modalDetails.appendChild(detailRow);
    }
  }

  detailModal.classList.remove("hidden");
}

// Close detail modal
closeModal.addEventListener("click", () => {
  detailModal.classList.add("hidden");
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

// Game functionality
const ctx = gameCanvas.getContext("2d");
let gameActive = false;
let scoreValue = 0;
let levelValue = 1;
let ship = {
  x: gameCanvas.width / 2 - 20,
  y: gameCanvas.height - 60,
  width: 40,
  height: 60,
  speed: 5,
};

let asteroids = [];
let crystals = [];
let keys = {};
const asteroidSpeed = 3;
let gameLoop;

function drawShip() {
  ctx.fillStyle = "#7b2cbf";
  ctx.beginPath();
  ctx.moveTo(ship.x + ship.width / 2, ship.y);
  ctx.lineTo(ship.x, ship.y + ship.height);
  ctx.lineTo(ship.x + ship.width, ship.y + ship.height);
  ctx.closePath();
  ctx.fill();

  // Add thruster flame
  ctx.fillStyle = "#ff9e00";
  ctx.beginPath();
  ctx.moveTo(ship.x + ship.width / 2 - 10, ship.y + ship.height);
  ctx.lineTo(ship.x + ship.width / 2, ship.y + ship.height + 15);
  ctx.lineTo(ship.x + ship.width / 2 + 10, ship.y + ship.height);
  ctx.closePath();
  ctx.fill();
}

function createAsteroid() {
  return {
    x: Math.random() * (gameCanvas.width - 30),
    y: -30,
    width: 20 + Math.random() * 15,
    height: 20 + Math.random() * 15,
    speed: 2 + Math.random() * (levelValue * 0.8),
  };
}

function createCrystal() {
  return {
    x: Math.random() * (gameCanvas.width - 20),
    y: -20,
    width: 20,
    height: 20,
    speed: 3 + Math.random() * 2,
  };
}

function drawAsteroids() {
  asteroids.forEach((asteroid) => {
    ctx.fillStyle = "#bbb";
    ctx.beginPath();
    ctx.arc(
      asteroid.x + asteroid.width / 2,
      asteroid.y + asteroid.height / 2,
      asteroid.width / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Add crater details
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.arc(
      asteroid.x + asteroid.width / 3,
      asteroid.y + asteroid.height / 3,
      asteroid.width / 6,
      0,
      Math.PI * 2
    );
    ctx.fill();
  });
}

function drawCrystals() {
  crystals.forEach((crystal) => {
    ctx.fillStyle = "#00ffcc";
    ctx.beginPath();
    ctx.moveTo(crystal.x, crystal.y);
    ctx.lineTo(crystal.x + crystal.width / 2, crystal.y + crystal.height);
    ctx.lineTo(crystal.x + crystal.width, crystal.y);
    ctx.lineTo(crystal.x + crystal.width / 2, crystal.y - crystal.height / 2);
    ctx.closePath();
    ctx.fill();

    // Add glow effect
    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 2;
    ctx.stroke();
  });
}

function updateGame() {
  // Update ship position
  if (keys["ArrowLeft"] && ship.x > 0) {
    ship.x -= ship.speed;
  }
  if (keys["ArrowRight"] && ship.x < gameCanvas.width - ship.width) {
    ship.x += ship.speed;
  }
  if (keys["ArrowUp"] && ship.y > 0) {
    ship.y -= ship.speed;
  }
  if (keys["ArrowDown"] && ship.y < gameCanvas.height - ship.height) {
    ship.y += ship.speed;
  }

  // Update asteroids
  for (let i = asteroids.length - 1; i >= 0; i--) {
    const asteroid = asteroids[i];
    asteroid.y += asteroid.speed;

    // Check for collisions with ship
    if (
      ship.x < asteroid.x + asteroid.width &&
      ship.x + ship.width > asteroid.x &&
      ship.y < asteroid.y + asteroid.height &&
      ship.y + ship.height > asteroid.y
    ) {
      console.log("COLLISION!", { ship, asteroid });
      gameOver();
      return;
    }

    // Remove asteroids that go off screen
    if (asteroid.y > gameCanvas.height) {
      asteroids.splice(i, 1);
      scoreValue += 5;
    }
  }

  // Update crystals
  crystals.forEach((crystal, index) => {
    crystal.y += crystal.speed;

    // Remove crystals that go off screen
    if (crystal.y > gameCanvas.height) {
      crystals.splice(index, 1);
    }

    // Check for collisions with ship
    if (
      ship.x < crystal.x + crystal.width &&
      ship.x + ship.width > crystal.x &&
      ship.y < crystal.y + crystal.height &&
      ship.y + ship.height > crystal.y
    ) {
      crystals.splice(index, 1);
      scoreValue += 50;

      // Show score animation
      const scoreAnim = document.createElement("div");
      scoreAnim.textContent = "+50";
      scoreAnim.style.position = "absolute";
      scoreAnim.style.left = `${crystal.x}px`;
      scoreAnim.style.top = `${crystal.y}px`;
      scoreAnim.style.color = "#00ffcc";
      scoreAnim.style.fontSize = "20px";
      scoreAnim.style.fontWeight = "bold";
      scoreAnim.style.opacity = "1";
      scoreAnim.style.transition = "all 1s ease";
      document.body.appendChild(scoreAnim);

      setTimeout(() => {
        scoreAnim.style.opacity = "0";
        scoreAnim.style.transform = "translateY(-30px)";
      }, 50);

      setTimeout(() => {
        document.body.removeChild(scoreAnim);
      }, 1000);
    }
  });

  // Add new asteroids randomly
  if (Math.random() < 0.02 * levelValue) {
    asteroids.push(createAsteroid());
  }

  // Add new crystals less frequently
  if (Math.random() < 0.005) {
    crystals.push(createCrystal());
  }

  // Update score and level
  gameScore.textContent = scoreValue;

  // Level up every 500 points
  const newLevel = Math.floor(scoreValue / 500) + 1;
  if (newLevel > levelValue) {
    levelValue = newLevel;
    gameLevel.textContent = levelValue;
    ship.speed += 0.5; // Increase ship speed with level

    // Show level up message
    const levelUpMsg = document.createElement("div");
    levelUpMsg.textContent = `Рівень ${levelValue}!`;
    levelUpMsg.style.position = "absolute";
    levelUpMsg.style.left = "50%";
    levelUpMsg.style.top = "50%";
    levelUpMsg.style.transform = "translate(-50%, -50%)";
    levelUpMsg.style.color = "#ff9e00";
    levelUpMsg.style.fontSize = "36px";
    levelUpMsg.style.fontWeight = "bold";
    levelUpMsg.style.zIndex = "100";
    levelUpMsg.style.opacity = "1";
    levelUpMsg.style.transition = "all 1s ease";
    document.body.appendChild(levelUpMsg);

    setTimeout(() => {
      levelUpMsg.style.opacity = "0";
      levelUpMsg.style.transform = "translate(-50%, -100%)";
    }, 800);

    setTimeout(() => {
      document.body.removeChild(levelUpMsg);
    }, 1800);
  }
}

function renderGame() {
  // Clear canvas
  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

  // Draw game objects
  drawShip();
  drawAsteroids();
  drawCrystals();
}

function startGame() {
  if (!gameActive) {
    gameActive = true;
    scoreValue = 0;
    levelValue = 1;
    gameScore.textContent = scoreValue;
    gameLevel.textContent = levelValue;
    asteroids = [];
    crystals = [];
    ship = {
      x: gameCanvas.width / 2,
      y: gameCanvas.height - 60,
      width: 40,
      height: 60,
      speed: 5,
    };

    startGameBtn.textContent = "Гра розпочата";
    startGameBtn.disabled = true;

    gameLoop = setInterval(() => {
      updateGame();
      renderGame();
    }, 1000 / 60); // 60 FPS
  }
}

function gameOver() {
  clearInterval(gameLoop);
  gameActive = false;

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

  ctx.fillStyle = "white";
  ctx.font = "36px Space Mono, monospace";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER", gameCanvas.width / 2, gameCanvas.height / 2 - 40);

  ctx.font = "24px Montserrat, sans-serif";
  ctx.fillText(
    `Ваш рахунок: ${scoreValue}`,
    gameCanvas.width / 2,
    gameCanvas.height / 2 + 10
  );
  ctx.fillText(
    `Рівень: ${levelValue}`,
    gameCanvas.width / 2,
    gameCanvas.height / 2 + 50
  );

  startGameBtn.textContent = "Спробувати знову";
  startGameBtn.disabled = false;
}

// Game event listeners
startGameBtn.addEventListener("click", startGame);

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// Init function
function init() {
  // Draw initial game screen
  ctx.fillStyle = "#0c1445";
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

  // Draw title
  ctx.fillStyle = "white";
  ctx.font = "36px Space Mono, monospace";
  ctx.textAlign = "center";
  ctx.fillText(
    "КОСМІЧНА АРКАДА",
    gameCanvas.width / 2,
    gameCanvas.height / 2 - 40
  );

  ctx.font = "18px Montserrat, sans-serif";
  ctx.fillText(
    'Натисніть "Розпочати гру", щоб почати',
    gameCanvas.width / 2,
    gameCanvas.height / 2 + 20
  );
}

// Make sure canvas is the right size
function resizeCanvas() {
  if (window.innerWidth < 800) {
    gameCanvas.width = Math.min(window.innerWidth - 40, 800);
    gameCanvas.height = gameCanvas.width * 0.75; // Keep aspect ratio
  } else {
    gameCanvas.width = 800;
    gameCanvas.height = 600;
  }
  init();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Start with home section active
navigateToSection("home");
