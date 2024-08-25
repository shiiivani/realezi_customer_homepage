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
