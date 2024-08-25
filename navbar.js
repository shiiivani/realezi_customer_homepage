document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-menu");
  const closeIcon = document.querySelector(".close-icon");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburgerIcon.addEventListener("click", function () {
    mobileNav.classList.add("active");
  });

  closeIcon.addEventListener("click", function () {
    mobileNav.classList.remove("active");
  });
});

const listItems = document.querySelectorAll(".upper-nav ul:first-child li");

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    listItems.forEach((li) => li.classList.remove("active"));

    this.classList.add("active");
  });
});

const listItems2 = document.querySelectorAll(".lower-nav ul li");

listItems2.forEach((item) => {
  item.addEventListener("click", function () {
    listItems2.forEach((li) => li.classList.remove("active"));

    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const upperNavHam = document.querySelector(".upper-nav-ham-menu");
  const upperNavClose = document.querySelector(".upper-nav-close");
  const upperNavHamOptions = document.querySelector(".upper-nav-ham-options");

  upperNavHam.addEventListener("click", function () {
    upperNavHamOptions.classList.add("active");
    upperNavHam.classList.add("hidden");
    upperNavClose.classList.remove("hidden");
  });
  upperNavClose.addEventListener("click", function () {
    upperNavHamOptions.classList.remove("active");
    upperNavHam.classList.remove("hidden");
    upperNavClose.classList.add("hidden");
  });
});
