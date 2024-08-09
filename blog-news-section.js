// Blog and News Section
document.addEventListener("DOMContentLoaded", function () {
  const blogButton = document.getElementById("blogs-btn");
  const newsButton = document.getElementById("news-btn");
  const blogSection = document.getElementById("blog-section");
  const newsSection = document.getElementById("news-section");

  // Function to handle button clicks
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

// Blog section pagination
document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 6;
  let currentPage = 0;

  const allItems = document.querySelectorAll(".single-blog");
  const totalItems = allItems.length;

  function updateItems() {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    allItems.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    const viewMoreButton = document.getElementById("view-more-btn");
    if (endIndex >= totalItems) {
      viewMoreButton.style.display = "none";
    } else {
      viewMoreButton.style.display = "block";
    }
  }

  updateItems();

  document
    .getElementById("view-more-btn")
    .addEventListener("click", function () {
      currentPage++;
      updateItems();
    });
});

// News section pagination
document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 3;
  let currentPage = 0;

  const newsItems = document.querySelectorAll(".single-news-card");
  const totalItems = newsItems.length;

  function updateItems() {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    newsItems.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });

    const viewMoreButton = document.getElementById("view-more-news-btn");
    if (endIndex >= totalItems) {
      viewMoreButton.style.display = "none";
    } else {
      viewMoreButton.style.display = "flex";
    }
  }

  updateItems();

  document
    .getElementById("view-more-news-btn")
    .addEventListener("click", function () {
      currentPage++;
      updateItems();
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
