window.addEventListener("DOMContentLoaded", function (event) {
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero");

  const navbarOptions = {
    // rootMargin: "-200px",
  };
  const navbarObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  }, navbarOptions);

  navbarObserver.observe(heroSection);

  // section observer js
  const paragraphs = document.querySelectorAll("section p");
  const h4 = document.querySelectorAll("h4");
  const h2 = document.querySelectorAll("h2");
  const h1 = document.querySelector("h1");
  const testimonialImgs = document.querySelectorAll(".testimonials img");

  const options = {
    // treshold: 1,
    rootMargin: "-100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("show");
      }
    });
  }, options);

  paragraphs.forEach((p) => {
    observer.observe(p);
  });

  h4.forEach((h4) => {
    observer.observe(h4);
  });

  h2.forEach((h2) => {
    observer.observe(h2);
  });

  observer.observe(h1);

  testimonialImgs.forEach((el) => {
    observer.observe(el);
  });
});

// const response = fetch("https://jsconplaceholder.typicode.code/users").then(
//   function (response) {
//     return response.json();
//   }
// );
