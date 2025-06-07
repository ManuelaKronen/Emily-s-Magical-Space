// Navigation bar - highlighting active tab:

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");
  const allLinks = document.querySelectorAll("a");

  let activePage = sessionStorage.getItem("activeNav") || "index.html";

  navLinks.forEach((link) => {
    if (link.getAttribute("href").includes(activePage)) {
      link.classList.add("active");
    }
  });

  allLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (!this.getAttribute("href").includes(".html")) return;

      sessionStorage.setItem("activeNav", this.getAttribute("href"));

      navLinks.forEach((l) => l.classList.remove("active"));

      navLinks.forEach((l) => {
        if (l.getAttribute("href") === this.getAttribute("href")) {
          l.classList.add("active");
        }
      });
    });
  });
});
