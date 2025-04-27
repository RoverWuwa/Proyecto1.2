
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".right");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled2");
    } else {
      navbar.classList.remove("scrolled2");
    }
  });