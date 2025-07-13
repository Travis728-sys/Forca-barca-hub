// Dark Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

// Load mode from localStorage
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark-mode");
  }
});
