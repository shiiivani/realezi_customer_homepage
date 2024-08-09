document.addEventListener("DOMContentLoaded", function () {
  // Handle each .animated-box container
  document.querySelectorAll(".animated-box").forEach((container) => {
    const slides = container.querySelectorAll(".brand-img");
    let currentIndex = 0;

    function showNextSlide() {
      const previousSlide = slides[currentIndex];
      previousSlide.classList.remove("active");

      // Determine exit animation for the previous slide
      if (currentIndex % 3 === 0) {
        previousSlide.style.animation = "slideOutLeft 1s forwards";
      } else if (currentIndex % 3 === 1) {
        previousSlide.style.animation = "slideOutBottom 1s forwards";
      } else {
        previousSlide.style.animation = "slideOutLeft 1s forwards";
      }

      currentIndex = (currentIndex + 1) % slides.length;
      const nextSlide = slides[currentIndex];

      // Ensure the next slide starts from the correct position
      if (currentIndex % 3 === 0) {
        nextSlide.style.animation = "slideInLeft 1s forwards";
      } else if (currentIndex % 3 === 1) {
        nextSlide.style.animation = "slideInBottom 1s forwards";
      } else {
        nextSlide.style.animation = "slideInRight 1s forwards";
      }

      // Briefly delay adding the active class to avoid overlap
      setTimeout(() => {
        nextSlide.classList.add("active");
      }, 50);
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
  });

  // Handle each .reverse-animated-box container
  document.querySelectorAll(".reverse-animated-box").forEach((container) => {
    const slides = container.querySelectorAll(".brand-img");
    let currentIndex = 0;

    function showNextSlide() {
      const previousSlide = slides[currentIndex];
      previousSlide.classList.remove("active");

      // Determine exit animation for the previous slide
      if (currentIndex % 3 === 0) {
        previousSlide.style.animation = "slideOutBottom 1s forwards";
      } else if (currentIndex % 3 === 1) {
        previousSlide.style.animation = "slideOutLeft 1s forwards";
      } else {
        previousSlide.style.animation = "slideOutRight 1s forwards";
      }

      currentIndex = (currentIndex + 1) % slides.length;
      const nextSlide = slides[currentIndex];

      // Ensure the next slide starts from the correct position
      if (currentIndex % 3 === 0) {
        nextSlide.style.animation = "slideInBottom 1s forwards";
      } else if (currentIndex % 3 === 1) {
        nextSlide.style.animation = "slideInLeft 1s forwards";
      } else {
        nextSlide.style.animation = "slideInLeft 1s forwards";
      }

      // Briefly delay adding the active class to avoid overlap
      setTimeout(() => {
        nextSlide.classList.add("active");
      }, 50);
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
  });
});
