// Accessibility: lets users switch between dark and light colors (contrast)
// and remembers their choice on every page.
function setTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
  // The button text always says what clicking it will do
  $("#theme-toggle").text(theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

// Apply the saved choice right away (dark is the default)
setTheme(localStorage.getItem("theme") || "dark");

// The button is inside the navbar, which loads later, so listen on the document
$(document).on("click", "#theme-toggle", function () {
  var current = document.documentElement.getAttribute("data-bs-theme");
  setTheme(current === "dark" ? "light" : "dark");
});
