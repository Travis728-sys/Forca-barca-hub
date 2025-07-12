// script.js

// Dark Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  document.querySelectorAll(".navbar").forEach((nav) => {
    nav.classList.toggle("dark-mode");
  });

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

// On Load - Apply saved mode
window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    body.classList.add("dark-mode");
    document.querySelectorAll(".navbar").forEach((nav) => {
      nav.classList.add("dark-mode");
    });
  }
});
