const products = [
  {
    name: "Gaming Laptop",
    category: "electronics",
    price: 1299,
    description: "High-performance gaming laptop with RTX graphics",
    rating: 4.5,
    icon: "💻",
  },
  {
    name: "Wireless Headphones",
    category: "electronics",
    price: 199,
    description: "Premium noise-cancelling wireless headphones",
    rating: 4.8,
    icon: "🎧",
  },
  {
    name: "Cotton T-Shirt",
    category: "clothing",
    price: 25,
    description: "Comfortable 100% cotton t-shirt in multiple colors",
    rating: 4.2,
    icon: "👕",
  },
  {
    name: "Denim Jeans",
    category: "clothing",
    price: 79,
    description: "Classic fit denim jeans with stretch comfort",
    rating: 4.3,
    icon: "👖",
  },
  {
    name: "JavaScript Guide",
    category: "books",
    price: 45,
    description: "Complete guide to modern JavaScript programming",
    rating: 4.7,
    icon: "📚",
  },
  {
    name: "Python Cookbook",
    category: "books",
    price: 52,
    description: "Advanced Python recipes and techniques",
    rating: 4.6,
    icon: "📖",
  },
  {
    name: "Garden Tool Set",
    category: "home",
    price: 89,
    description: "Complete gardening tool set with carrying case",
    rating: 4.4,
    icon: "🌱",
  },
  {
    name: "Coffee Maker",
    category: "home",
    price: 159,
    description: "Programmable drip coffee maker with thermal carafe",
    rating: 4.1,
    icon: "☕",
  },
  {
    name: "Yoga Mat",
    category: "sports",
    price: 35,
    description: "Non-slip premium yoga mat with alignment guides",
    rating: 4.5,
    icon: "🧘",
  },
  {
    name: "Basketball",
    category: "sports",
    price: 28,
    description: "Official size basketball with superior grip",
    rating: 4.3,
    icon: "🏀",
  },
  {
    name: "Smartphone",
    category: "electronics",
    price: 699,
    description: "Latest smartphone with advanced camera system",
    rating: 4.6,
    icon: "📱",
  },
  {
    name: "Winter Jacket",
    category: "clothing",
    price: 149,
    description: "Warm winter jacket with waterproof coating",
    rating: 4.4,
    icon: "🧥",
  },
];

const filterSelect = document.getElementById("filter");
const priceFilter = document.getElementById("price-filter");
const searchBox = document.getElementById("search-box");
const clearFilters = document.getElementById("clear-filters");
const sortSelect = document.getElementById("sort-select");
const productsContainer = document.getElementById("products-container");
const resultsCount = document.getElementById("results-count");

let currentProducts = [...products];

filterSelect.addEventListener("change", applyFilters);
priceFilter.addEventListener("change", applyFilters);
searchBox.addEventListener("input", applyFilters);
clearFilters.addEventListener("click", clearAllFilters);
sortSelect.addEventListener("change", applySorting);

function applyFilters() {
  showLoading();

  setTimeout(() => {
    let filtered = [...products];

    const selectedCategory = filterSelect.value;
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    const selectedPrice = priceFilter.value;
    if (selectedPrice !== "all") {
      filtered = filtered.filter((product) => {
        const price = product.price;
        switch (selectedPrice) {
          case "0-50":
            return price <= 50;
          case "51-200":
            return price >= 51 && price <= 200;
          case "201-500":
            return price >= 201 && price <= 500;
          case "501+":
            return price >= 501;
          default:
            return true;
        }
      });
    }

    const searchTerm = searchBox.value.toLowerCase().trim();
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      );
    }

    currentProducts = filtered;
    applySorting();
    updateResultsCount();

  }, 500);
}

function applySorting() {
  const sortBy = sortSelect.value;
  let sorted = [...currentProducts];

  switch (sortBy) {
    case "name":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "price-low":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
  }

  renderProducts(sorted);
}

function renderProducts(productsToRender) {
  if (productsToRender.length === 0) {
    productsContainer.innerHTML = `
                    <div class="no-results">
                        <h3>No products found</h3>
                        <p>Try adjusting your filters or search terms.</p>
                    </div>
                `;
    return;
  }

  const productHTML = productsToRender
    .map(
      (product) => `
                <div class="product" onclick="addToCart('${product.name}')">
                    <div class="product-image">${product.icon}</div>
                    <div class="product-category">${product.category}</div>
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">${"⭐".repeat(
                      Math.floor(product.rating)
                    )} (${product.rating})</div>
                    <div class="product-price">$${product.price}</div>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart('${
                      product.name
                    }')">
                        Add to Cart
                    </button>
                </div>
            `
    )
    .join("");

  productsContainer.innerHTML = productHTML;
}

function showLoading() {
  productsContainer.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                    <p>Loading products...</p>
                </div>
            `;
}

function updateResultsCount() {
  const count = currentProducts.length;
  const total = products.length;
  resultsCount.textContent = `Showing ${count} of ${total} products`;
}

function clearAllFilters() {
  filterSelect.value = "all";
  priceFilter.value = "all";
  searchBox.value = "";
  sortSelect.value = "name";

  currentProducts = [...products];
  applySorting();
  updateResultsCount();

  console.log("All filters cleared");
}

function addToCart(productName) {
  alert(`${productName} added to cart!`);
  console.log(`Added to cart: ${productName}`);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Product Filter System loaded!");
  console.log(`Total products: ${products.length}`);

  renderProducts(products);
  updateResultsCount();
});
