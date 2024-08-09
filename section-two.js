// Budget Dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdownLabel = document.querySelector(".budget-dropdown .label");
  const dropdownOptions = document.querySelector(
    ".budget-dropdown .dropdown-options"
  );
  const dropdownContent = document.querySelector(
    ".budget-dropdown .dropdown-content"
  );
  const arrowIcon = dropdownLabel.querySelector("img");

  dropdownLabel.addEventListener("click", function () {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 520) {
      dropdownOptions.classList.toggle("active");
      dropdownContent.classList.remove("active");
    } else {
      dropdownContent.classList.toggle("active");
    }
    arrowIcon.classList.toggle("rotate");
  });

  dropdownOptions.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const selectedOption = event.target.textContent;
      dropdownLabel.querySelector("p").textContent = selectedOption;
      dropdownOptions.classList.remove("active");
      arrowIcon.classList.remove("rotate");
    }
  });

  const minSlider = document.getElementById("minSlider");
  const maxSlider = document.getElementById("maxSlider");
  const minValueDisplay = document.getElementById("minValue");
  const maxValueDisplay = document.getElementById("maxValue");

  function updateSliderValues() {
    minValueDisplay.textContent = `Rs.${minSlider.value}Cr`;
    maxValueDisplay.textContent = `Rs.${maxSlider.value}Cr`;
  }

  minSlider.addEventListener("input", function () {
    if (parseInt(minSlider.value) >= parseInt(maxSlider.value)) {
      minSlider.value = maxSlider.value - 1;
    }
    updateSliderValues();
  });

  maxSlider.addEventListener("input", function () {
    if (parseInt(maxSlider.value) <= parseInt(minSlider.value)) {
      maxSlider.value = minSlider.value + 1;
    }
    updateSliderValues();
  });

  updateSliderValues();
});

// Other dropdowns
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-label");
    const options = dropdown.querySelector(".dropdown-options");
    const listItems = dropdown.querySelectorAll("li");

    button.addEventListener("click", () => {
      options.classList.toggle("active");
    });
    listItems.forEach((item) => {
      item.addEventListener("click", function () {
        listItems.forEach((li) => li.classList.remove("selected"));
        item.classList.add("selected");
        options.classList.remove("active");
        button.textContent = item.textContent;
      });
    });
  });
});

// Section two nav
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".section-two-nav li");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((cat) => cat.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

// Property Category selected
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".single-property-category");

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      categories.forEach((cat) => cat.classList.remove("selected"));
      category.classList.add("selected");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".section-two-nav");
  const navInitialOffsetTop = nav.getBoundingClientRect().top + window.scrollY;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= navInitialOffsetTop) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".section-two-nav ul");
  const slideRightBtn = document.getElementById("slideRightNav");

  slideRightBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  });
});
