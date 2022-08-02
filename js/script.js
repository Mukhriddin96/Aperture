window.addEventListener("DOMContentLoaded", function (event) {
  const barsIcon = document.querySelector(".bars-icon");
  const barsItems = barsIcon.querySelectorAll("span");
  const sidebar = document.querySelector("nav");

  barsIcon.addEventListener("click", animeBars);

  function animeBars(e) {
    barsItems[1].classList.toggle("hide");
    barsItems[0].classList.toggle("close1");
    barsItems[2].classList.toggle("close2");

    sidebar.classList.toggle("show-menu");
  }

  // smooth scrolling
  const navItems = document.querySelector(".nav-items");

  navItems.addEventListener("click", (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");

    if (href && href !== "/") {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      if (sidebar.classList.contains("show-menu")) animeBars();
    }
  });
});
