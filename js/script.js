// Get references to the dark mode toggle button and icon
const toggleBtn = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");

// Function to update the icon based on current mode
function updateIcon() {
  const isDark = document.body.classList.contains("dark-mode");
  modeIcon.textContent = isDark ? "☀️" : "🌕";
}

// Toggle dark mode when button is clicked
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateIcon();
  toggleBtn.blur(); // Remove focus ring after click
});

// Keyboard shortcut: press "d" to toggle dark mode
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "d" && !e.ctrlKey && !e.metaKey) {
    document.body.classList.toggle("dark-mode");
    updateIcon();
  }
});

// Set correct icon when page loads
updateIcon();

// Smooth scroll behavior for skip link
const skipLink = document.querySelector(".skip-link");
skipLink.addEventListener("click", (e) => {
  e.preventDefault();
  const target = document.querySelector(skipLink.getAttribute("href"));
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
    target.setAttribute("tabindex", "-1"); // Make target focusable
    target.focus(); // Move focus to target
  }
});