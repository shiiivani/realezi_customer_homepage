document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".animated-box").forEach((container) => {
    const slides = container.querySelectorAll(".brand-img");
    const ellipse = container.querySelector(".ellipse");
    let currentIndex = 0;

    function showNextSlide() {
      const previousSlide = slides[currentIndex];
      previousSlide.classList.remove("active");

      if (currentIndex % 4 === 0) {
        previousSlide.style.animation = "slideOutBottom 1s forwards";
        ellipse.style.background = "#EC7100";
      } else if (currentIndex % 4 === 1) {
        previousSlide.style.animation = "slideOutRight 1s forwards";
        ellipse.style.background = "#8B8F95B8";
      } else if (currentIndex % 4 === 2) {
        previousSlide.style.animation = "slideOutLeft 1s forwards";
        ellipse.style.background = "#EC7100";
      } else {
        previousSlide.style.animation = "slideOutRight 1s forwards";
        ellipse.style.background = "#8B8F95B8";
      }

      currentIndex = (currentIndex + 1) % slides.length;
      const nextSlide = slides[currentIndex];

      if (currentIndex % 4 === 0) {
        nextSlide.style.animation = "slideInRight 1s forwards";
      } else if (currentIndex % 4 === 1) {
        nextSlide.style.animation = "slideInLeft 1s forwards";
      } else if (currentIndex % 4 === 2) {
        nextSlide.style.animation = "slideInBottom 1s forwards";
      } else {
        nextSlide.style.animation = "slideInLeft 1s forwards";
      }

      setTimeout(() => {
        nextSlide.classList.add("active");
      }, 50);
    }

    setInterval(showNextSlide, 3000);
  });

  document.querySelectorAll(".reverse-animated-box").forEach((container) => {
    const slides = container.querySelectorAll(".brand-img");
    const ellipse = container.querySelector(".orange-ellipse");
    let currentIndex = 0;

    function showNextSlide() {
      const previousSlide = slides[currentIndex];
      previousSlide.classList.remove("active");

      if (currentIndex % 4 === 0) {
        previousSlide.style.animation = "slideOutLeft 1s forwards";
        ellipse.style.background = "#8B8F95B8";
      } else if (currentIndex % 4 === 1) {
        previousSlide.style.animation = "slideOutBottom 1s forwards";
        ellipse.style.background = "#EC7100";
      } else if (currentIndex % 4 === 2) {
        previousSlide.style.animation = "slideOutBottom 1s forwards";
        ellipse.style.background = "#8B8F95B8";
      } else {
        previousSlide.style.animation = "slideOutBottom 1s forwards";
        ellipse.style.background = "#EC7100";
      }

      currentIndex = (currentIndex + 1) % slides.length;
      const nextSlide = slides[currentIndex];

      if (currentIndex % 4 === 0) {
        nextSlide.style.animation = "slideInLeft 1s forwards";
      } else if (currentIndex % 4 === 1) {
        nextSlide.style.animation = "slideInBottom 1s forwards";
      } else if (currentIndex % 4 === 2) {
        nextSlide.style.animation = "slideInLeft 1s forwards";
      } else {
        nextSlide.style.animation = "slideInBottom 1s forwards";
      }

      // Briefly delay adding the active class to avoid overlap
      setTimeout(() => {
        nextSlide.classList.add("active");
      }, 50);
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
  });
});
