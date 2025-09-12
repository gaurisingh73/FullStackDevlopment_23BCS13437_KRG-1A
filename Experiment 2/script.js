// Get elements
const toggle = document.getElementById("theme-toggle");
const dashboard = document.querySelector(".dashboard");

// Theme toggle functionality
toggle.addEventListener("click", () => {
  const currentTheme = dashboard.dataset.theme;
  const newTheme = currentTheme === "light" ? "dark" : "light";

  dashboard.dataset.theme = newTheme;

  // Update button text
  if (newTheme === "dark") {
    toggle.textContent = "Toggle Light Mode";
  } else {
    toggle.textContent = "Toggle Dark Mode";
  }

  console.log("Theme switched to:", newTheme);
});

// Navigation functionality
const navLinks = document.querySelectorAll(".nav-link");
const headerTitle = document.querySelector(".header h1");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach((l) => l.classList.remove("active"));

    // Add active class to clicked link
    e.target.classList.add("active");

    // Update header title
    headerTitle.textContent = e.target.textContent;

    console.log("Navigation clicked:", e.target.textContent);
  });
});

// Simple animation for cards
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

console.log("Dashboard loaded successfully!");
