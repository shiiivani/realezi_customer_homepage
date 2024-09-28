document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburgerIcon.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
  });
  window.addEventListener("scroll", function () {
    if (mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active");
      hamburgerIcon.checked = false;
    }
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

// Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 577) {
    const lowerNav = document.querySelector(".lower-nav");
    const stickyClass = "sticky";

    // Get the original offsetTop of the lowerNav
    const lowerNavOffsetTop = lowerNav.offsetTop;

    window.addEventListener("scroll", function () {
      // Check if the scroll position is greater than or equal to the original offsetTop
      if (window.scrollY >= lowerNavOffsetTop) {
        lowerNav.classList.add(stickyClass);
      } else {
        lowerNav.classList.remove(stickyClass);
      }
    });
  } else {
    console.error("Element .lower-nav not found");
  }
});

// Resources Dropdown
document.addEventListener("DOMContentLoaded", () => {
  const resourceContainerItem = document.querySelector(
    ".resource-container li"
  );
  const resourceMainDropdown = document.querySelector(
    ".resource-main-dropdown"
  );
  const mainDropdownItems = resourceMainDropdown.querySelectorAll("li");
  const sideDropdowns = document.querySelectorAll(".resource-side-dropdown");

  resourceContainerItem.addEventListener("click", () => {
    const isActive = resourceMainDropdown.classList.toggle("active");

    if (!isActive) {
      sideDropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    }
  });

  mainDropdownItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const type = item.getAttribute("data-type");
      const activeDropdown = document.querySelector(
        `.resource-side-dropdown[data-type="${type}"]`
      );

      sideDropdowns.forEach((dropdown) => dropdown.classList.remove("active"));

      if (activeDropdown) {
        activeDropdown.classList.add("active");
      }

      mainDropdownItems.forEach((mainItem) =>
        mainItem.classList.remove("active")
      );
      item.classList.add("active");
    });
  });

  sideDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      dropdown.classList.toggle("active");
    });
  });
  document.addEventListener("click", (e) => {
    if (
      !resourceContainerItem.contains(e.target) &&
      !resourceMainDropdown.contains(e.target)
    ) {
      resourceMainDropdown.classList.remove("active");
      sideDropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    }
  });
});
