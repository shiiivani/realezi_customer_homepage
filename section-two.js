// Buy or Rent Toggle Button
function toggleCanvasVisibility(selectedOption) {
  const pgCanvas = document.querySelectorAll(".pg-container");
  const coworkingSpaceCanvas = document.querySelectorAll(
    ".coworkingspace-container"
  );
  const plotCanvas = document.querySelectorAll(".plot-container");

  if (selectedOption === "Buy") {
    pgCanvas.forEach((canvas) => canvas.classList.add("hidden"));
    coworkingSpaceCanvas.forEach((canvas) => canvas.classList.add("hidden"));
    plotCanvas.forEach((canvas) => canvas.classList.remove("hidden"));
  } else if (selectedOption === "Rent") {
    pgCanvas.forEach((canvas) => canvas.classList.remove("hidden"));
    coworkingSpaceCanvas.forEach((canvas) => canvas.classList.remove("hidden"));
    plotCanvas.forEach((canvas) => canvas.classList.add("hidden"));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-button p");
  let activeToggle = document.querySelector(".toggle-button p.active");
  let toggleSlideLine = document.createElement("div");

  toggleSlideLine.classList.add("toggle-slide-line");
  document.querySelector(".toggle-button").appendChild(toggleSlideLine);

  gsap.set(toggleSlideLine, {
    height: 34,
    position: "absolute",
    bottom: 3,
    zIndex: 2,
    borderRadius: "2px",
    transformOrigin: "left center",
    borderRadius: 9,
  });

  if (activeToggle) {
    gsap.set(toggleSlideLine, {
      width: activeToggle.offsetWidth,
      left: activeToggle.offsetLeft,
      backgroundColor: "#111F3C",
    });
  }

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleButtons.forEach(function (p) {
        p.classList.remove("active");
      });
      this.classList.add("active");

      updateActiveToggle(this);

      const selectedOption = this.textContent.trim();
      toggleCanvasVisibility(selectedOption);
    });
  });

  function updateActiveToggle(newActiveToggle) {
    if (activeToggle !== newActiveToggle) {
      activeToggle.classList.remove("active");
      newActiveToggle.classList.add("active");

      const tl = gsap.timeline();

      const activeToggleRect = activeToggle.getBoundingClientRect();
      const newToggleRect = newActiveToggle.getBoundingClientRect();
      const direction =
        newToggleRect.left < activeToggleRect.left ? "left" : "right";

      tl.to(toggleSlideLine, {
        duration: 0.3,
        width: newActiveToggle.offsetWidth,
        left: newActiveToggle.offsetLeft,
        ease: "power2.out",
      })
        .to(
          toggleSlideLine,
          {
            duration: 0.1,
            x: direction === "left" ? "-3px" : "+3px",
            ease: "bounce.out",
          },
          "-=0.1"
        )
        .to(toggleSlideLine, {
          duration: 0.1,
          x: direction === "left" ? "+3px" : "-3px",
          ease: "bounce.out",
        })
        .to(toggleSlideLine, {
          duration: 0.2,
          x: "0px",
          ease: "power2.inOut",
        });

      activeToggle = newActiveToggle;
    }
  }

  const initialOption = document
    .querySelector(".toggle-button p.active")
    .textContent.trim();
  toggleCanvasVisibility(initialOption);
});

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

  // Function to toggle dropdown
  function toggleDropdown() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      dropdownOptions.classList.toggle("active");
      dropdownContent.classList.remove("active");
      dropdownLabel.classList.toggle("active");
    } else {
      dropdownContent.classList.toggle("active");
    }
    arrowIcon.classList.toggle("rotate");
  }

  // Function to close dropdown
  function closeDropdown() {
    dropdownOptions.classList.remove("active");
    dropdownContent.classList.remove("active");
    dropdownLabel.classList.remove("active");
    arrowIcon.classList.remove("rotate");
  }

  dropdownLabel.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from triggering document click listener
    toggleDropdown();
  });

  dropdownOptions.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const selectedOption = event.target.textContent;
      dropdownLabel.querySelector("p").textContent = selectedOption;
      closeDropdown(); // Close dropdown after selection
    }
  });

  // Close dropdown if clicked outside, but ignore clicks on range sliders
  document.addEventListener("click", function (event) {
    // Check if the click is outside the dropdown and not on sliders
    if (
      !dropdownLabel.contains(event.target) && // Click outside the label
      !dropdownOptions.contains(event.target) && // Click outside the options
      !dropdownContent.contains(event.target) // Click outside the content, including sliders
    ) {
      closeDropdown();
    }
  });

  // Slider logic for min and max sliders
  const minSlider = document.getElementById("minSlider1");
  const maxSlider = document.getElementById("maxSlider1");
  const minValueDisplay = document.getElementById("minValue1");
  const maxValueDisplay = document.getElementById("maxValue1");

  function convertToAmount(value) {
    if (value <= 100) {
      return `Rs.${value} Lakh`;
    } else {
      return `Rs.${(value / 100).toFixed(1)} Crore`;
    }
  }

  function updateSliderValues() {
    minValueDisplay.textContent = convertToAmount(minSlider.value);
    maxValueDisplay.textContent = convertToAmount(maxSlider.value);
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

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      options.classList.toggle("active");
      button.classList.toggle("active");
    });

    listItems.forEach((item) => {
      item.addEventListener("click", function () {
        listItems.forEach((li) => li.classList.remove("selected"));
        item.classList.add("selected");
        options.classList.remove("active");
        button.querySelector("p").textContent = item.textContent;
      });
    });

    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        options.classList.remove("active");
        button.classList.remove("active");
      }
    });
  });
});

// Property type dropdown
const propertyOptions = {
  residential: [
    "Apartment",
    "Duplex",
    "Villa",
    "Penthouse",
    "Studio",
    "Independent House",
  ],
  commercial: [
    "Ready-to use office space",
    "Bare Shell office space",
    "Shop",
    "Showroom",
    "Warehouse",
  ],
  plot: ["Residential Plots", "Commercial Plots", "Agricultural Plots"],
  pg: ["Girls", "Boys", "Both"],
  coworkingspace: [],
};

const selectedPropertyType = document.querySelector(
  ".property-dropdown .dropdown-label p"
);

function populateDropdownOptions(options) {
  const dropdownOptions = document.querySelector(
    ".property-dropdown .dropdown-options"
  );
  dropdownOptions.innerHTML = "";

  if (options.length > 0) {
    options.forEach((option) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", function () {
        document.querySelector(
          ".property-dropdown .dropdown-label p"
        ).textContent = option;
        dropdownOptions.classList.remove("active");
        document
          .querySelector(".property-dropdown img")
          .classList.remove("rotate");
      });
      dropdownOptions.appendChild(li);
    });
    dropdownOptions.classList.remove("disabled");
  } else {
    const li = document.createElement("li");
    li.textContent = "No options available";
    dropdownOptions.appendChild(li);
    document.getElementById("dropdown-button").disabled = true;
  }
}

document.querySelectorAll(".properties-categories canvas").forEach((canvas) => {
  canvas.addEventListener("click", function () {
    handleCanvasClick(this);
  });

  canvas.addEventListener("touchstart", function () {
    handleCanvasClick(this);
  });
});

function handleCanvasClick(canvas) {
  const selectedCanvasId = canvas.id;
  if (propertyOptions[selectedCanvasId]) {
    document.getElementById("dropdown-button").disabled = false;
    populateDropdownOptions(propertyOptions[selectedCanvasId]);
  }
}

const dropdownButton = document.getElementById("dropdown-button");
dropdownButton.addEventListener("click", function (event) {
  dropdownButton.querySelector("img").classList.toggle("rotate");
  if (this.disabled) {
    event.preventDefault();
  }
});

// Bounce animation on section two nav
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".section-two-nav li");
  const navBar = document.querySelector(".section-two-nav");
  let activeItem = document.querySelector(".section-two-nav li.active");
  let slideLine = document.createElement("div");
  let hoverLine = document.createElement("div");

  let mouseX = 0;
  let isCursorInside = false;

  slideLine.classList.add("slide-line");
  navBar.appendChild(slideLine);

  hoverLine.classList.add("hover-line");
  navBar.appendChild(hoverLine);

  gsap.set([slideLine, hoverLine], {
    height: 30,
    position: "absolute",
    bottom: 10,
    borderRadius: "15px",
    zIndex: 1,
    transformOrigin: "left center",
  });

  gsap.set(slideLine, {
    width: activeItem.offsetWidth,
    left: activeItem.offsetLeft,
    backgroundColor: "#111F3C",
  });

  gsap.set(hoverLine, {
    width: 0,
    left: 0,
    backgroundColor: "#F4F4F4",
    zIndex: 0,
  });

  function updateActiveItem(newActiveItem) {
    if (activeItem !== newActiveItem) {
      activeItem.classList.remove("active");
      newActiveItem.classList.add("active");

      const tl = gsap.timeline();

      const activeItemRect = activeItem.getBoundingClientRect();
      const newItemRect = newActiveItem.getBoundingClientRect();
      const direction =
        newItemRect.left < activeItemRect.left ? "left" : "right";

      tl.to(slideLine, {
        duration: 0.3,
        width: newActiveItem.offsetWidth,
        left: newActiveItem.offsetLeft,
        ease: "power2.out",
      })
        .to(
          slideLine,
          {
            duration: 0.1,
            x: direction === "left" ? "-3px" : "+3px",
            ease: "bounce.out",
          },
          "-=0.1"
        )
        .to(slideLine, {
          duration: 0.1,
          x: direction === "left" ? "+3px" : "-3px",
          ease: "bounce.out",
        })
        .to(slideLine, {
          duration: 0.2,
          x: "0px",
          ease: "power2.inOut",
        });

      activeItem = newActiveItem;
    }
  }

  function attractToCursor() {
    if (isCursorInside) {
      const slideLineRect = slideLine.getBoundingClientRect();
      const slideLineCenterX = slideLineRect.left + slideLineRect.width / 2;
      const distanceX = mouseX - slideLineCenterX;
      const distance = Math.abs(distanceX);

      const maxDistance = 100;

      if (distance < maxDistance) {
        const intensity = Math.max(0, 1 - distance / maxDistance);
        gsap.to(slideLine, {
          x: intensity * (distanceX * 0.2),
          duration: 0.1,
          ease: "power2.out",
        });
      }
    }
  }

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    attractToCursor();
  });

  navBar.addEventListener("mouseenter", () => {
    isCursorInside = true;
  });

  navBar.addEventListener("mouseleave", () => {
    isCursorInside = false;
    gsap.to(slideLine, {
      x: "0px",
      duration: 0.2,
      ease: "power2.inOut",
    });
  });

  navItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      gsap.to(hoverLine, {
        width: this.offsetWidth,
        left: this.offsetLeft,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseout", function () {
      gsap.to(hoverLine, {
        width: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    item.addEventListener("click", function () {
      updateActiveItem(this);
    });
  });

  navBar.addEventListener("mouseleave", function () {
    updateActiveItem(activeItem);
  });
});

// Section two fixed navbar
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".section-two-nav");
  const sectionTwoHeader = document.querySelector(".section-two h2");

  const navInitialOffsetTop = nav.getBoundingClientRect().top + window.scrollY;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= navInitialOffsetTop) {
      nav.classList.add("fixed");
      sectionTwoHeader.style.marginTop = "85px";
    } else {
      nav.classList.remove("fixed");
      sectionTwoHeader.style.marginTop = "15px";
    }
  });
});
