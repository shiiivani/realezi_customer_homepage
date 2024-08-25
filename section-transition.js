document.addEventListener("DOMContentLoaded", function () {
  const sectionFive = document.getElementById("section-five");
  const sectionFour = document.querySelector(".section-four");

  window.addEventListener("scroll", function () {
    const sectionFiveRect = sectionFive.getBoundingClientRect();
    const sectionFourRect = sectionFour.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Check if section five is 100px above the bottom of the viewport
    if (sectionFiveRect.top <= viewportHeight - 100) {
      sectionFour.style.backgroundColor = "#111F3C";
      sectionFive.style.backgroundColor = "#111F3C";
    }
    // Check if 200px of section four is visible
    else if (sectionFourRect.bottom >= 200) {
      sectionFour.style.backgroundColor = "#FFFFFF";
      sectionFive.style.backgroundColor = "#FFFFFF";
    }
    // Default case to reset colors when scrolling past section four
    else {
      sectionFour.style.backgroundColor = ""; // Reset to default
      sectionFive.style.backgroundColor = ""; // Reset to default
    }
  });
});
