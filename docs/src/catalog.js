let catalogData = null;

// Promise to track when catalog data is loaded
let catalogDataLoaded = null;

// Fetch catalog data from JSON file
async function loadCatalogData() {
  return new Promise((resolve, reject) => {
    fetch('data/catalog.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        catalogData = data;
        initCatalog();
        resolve();
      })
      .catch((error) => {
        console.error('Error loading catalog data:', error);
        catalogItemsContainer.innerHTML = `
          <div class="text-center py-10 col-span-full">
            <i class="fas fa-satellite text-5xl mb-4 text-gray-500"></i>
            <p>Помилка завантаження даних каталогу</p>
          </div>
        `;
        reject(error);
      });
  });
}

// Get all categories in a flat array
function getAllItems() {
  return Object.values(catalogData).flat();
}

// DOM elements
const catalogItemsContainer = document.getElementById("catalogItems");
const searchInput = document.getElementById("searchInput");
const categoryTabs = document.querySelectorAll(".tab-btn");
const detailModal = document.getElementById("detailModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalDetails = document.getElementById("modalDetails");

// Catalog functionality
function renderCatalogItems(category) {
  // Clear the container
  catalogItemsContainer.innerHTML = "";

  // Filter items by category
  let itemsToRender = [];
  if (category === "all") {
    itemsToRender = getAllItems();
  } else {
    itemsToRender = getAllItems().filter((item) => item.category === category);
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

// Initialize catalog after data is loaded
function initCatalog() {
  // Initial render of catalog items
  renderCatalogItems("all");
}

// Make renderCatalogItems globally accessible
window.renderCatalogItems = renderCatalogItems;

// Load catalog data when the script runs and store the promise
catalogDataLoaded = loadCatalogData();