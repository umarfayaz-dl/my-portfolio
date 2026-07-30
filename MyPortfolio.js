const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navigationItems = document.querySelectorAll(".nav-links a");
const currentYear = document.getElementById("currentYear");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuButton.innerHTML = "×";
    menuButton.setAttribute("aria-label", "Close navigation menu");
  } else {
    menuButton.innerHTML = "☰";
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }
});

navigationItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navLinks.classList.remove("show");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Open navigation menu");
  });
});

currentYear.textContent = new Date().getFullYear();
