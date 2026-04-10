document.addEventListener("DOMContentLoaded", () => {

  function loadComponent(id, file) {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;

        if (id === "header") {
          initDarkMode();
          initMenu();
          activeLink();
        }
      });
  }

  loadComponent("header", "/components/header.html");
  loadComponent("footer", "/components/footer.html");

  function initDarkMode() {
    const btn = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }

    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }

  function initMenu() {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("nav-menu");

    btn.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  function activeLink() {
    document.querySelectorAll("nav a").forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  }

});