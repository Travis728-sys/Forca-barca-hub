// script.js

// Dark Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  document.querySelectorAll(".navbar").forEach(nav => {
    nav.classList.toggle("dark-mode");
  });

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

// Load mode on refresh
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark-mode");
    document.querySelectorAll(".navbar").forEach(nav => {
      nav.classList.add("dark-mode");
    });
  }
});
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 600); // Match with CSS transition time
});
