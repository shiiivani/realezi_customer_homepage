// Blog and News Toggle button
document.addEventListener("DOMContentLoaded", function () {
  const blogButton = document.getElementById("blogs-btn");
  const newsButton = document.getElementById("news-btn");
  const blogSection = document.getElementById("blog-section");
  const newsSection = document.getElementById("news-section");

  function showSection(sectionToShow) {
    if (sectionToShow === "blog") {
      blogSection.classList.add("active");
      blogButton.classList.add("active");
      newsSection.classList.remove("active");
      newsButton.classList.remove("active");
    } else if (sectionToShow === "news") {
      newsSection.classList.add("active");
      newsButton.classList.add("active");
      blogSection.classList.remove("active");
      blogButton.classList.remove("active");
    }
  }

  blogButton.addEventListener("click", function () {
    showSection("blog");
  });

  newsButton.addEventListener("click", function () {
    showSection("news");
  });

  showSection("blog");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(
    ".blog-news-toggle-button button"
  );
  let activeToggle = document.querySelector(
    ".blog-news-toggle-button button.active"
  );
  let BlogtoggleSlideLine = document.createElement("div");

  BlogtoggleSlideLine.classList.add("toggle-slide-line");
  document
    .querySelector(".blog-news-toggle-button")
    .appendChild(BlogtoggleSlideLine);

  gsap.set(BlogtoggleSlideLine, {
    height: 34,
    position: "absolute",
    bottom: 4,
    left: 0,
    zIndex: 2,
    borderRadius: "2px",
    transformOrigin: "left center",
    borderRadius: 9,
  });

  if (activeToggle) {
    gsap.set(BlogtoggleSlideLine, {
      width: activeToggle.offsetWidth,
      left: activeToggle.offsetLeft,
      backgroundColor: "#FFFFFF",
    });
  }

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleButtons.forEach(function (button) {
        button.classList.remove("active");
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

      tl.to(BlogtoggleSlideLine, {
        duration: 0.3,
        width: newActiveToggle.offsetWidth,
        left: newActiveToggle.offsetLeft,
        ease: "power2.out",
      })
        .to(
          BlogtoggleSlideLine,
          {
            duration: 0.1,
            x: direction === "left" ? "-3px" : "+3px",
            ease: "bounce.out",
          },
          "-=0.1"
        )
        .to(BlogtoggleSlideLine, {
          duration: 0.1,
          x: direction === "left" ? "+3px" : "-3px",
          ease: "bounce.out",
        })
        .to(BlogtoggleSlideLine, {
          duration: 0.2,
          x: "0px",
          ease: "power2.inOut",
        });

      activeToggle = newActiveToggle;
    }
  }
});

// Filter dropdwon
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".filter-dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const options = dropdown.querySelector(".filter-dropdown-options");
    const listItems = options.querySelectorAll("li");

    button.addEventListener("click", function () {
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

  // Close dropdown if clicked outside
  document.addEventListener("click", function (event) {
    dropdowns.forEach((dropdown) => {
      const options = dropdown.querySelector(".filter-dropdown-options");
      if (!dropdown.contains(event.target)) {
        options.classList.remove("active");
      }
    });
  });
});

// Slide animation in blog section
document.addEventListener("DOMContentLoaded", function () {
  const blogs = document.querySelectorAll(".single-blog");

  blogs.forEach((blog) => {
    const slideContainer = blog.querySelector(".slide-container");

    blog.addEventListener("mouseenter", () => {
      slideContainer.style.left = "0";
    });

    blog.addEventListener("mouseleave", () => {
      slideContainer.style.left = "-100%";
    });
  });
});
