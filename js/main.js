document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");
  const toggleBtn = document.getElementById("theme-toggle");
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("searchInput");
  const body = document.body;

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
      }
    });
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", function () {
      searchInput.classList.toggle("active");
      searchInput.focus();
    });

    document.addEventListener("click", function (e) {
      if (!searchBtn.contains(e.target) && !searchInput.contains(e.target)) {
        searchInput.classList.remove("active");
      }
    });
  }

});