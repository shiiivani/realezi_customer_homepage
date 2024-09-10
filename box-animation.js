// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll(".animated-box").forEach((container) => {
//     const slides = container.querySelectorAll(".brand-img");
//     const ellipse = container.querySelector(".ellipse");
//     let currentIndex = 0;

//     function showNextSlide() {
//       const previousSlide = slides[currentIndex];
//       previousSlide.classList.remove("active");

//       if (currentIndex % 4 === 0) {
//         previousSlide.style.animation = "slideOutBottom 0.5s forwards";
//         ellipse.style.background = "#2B6CDEB8";
//       } else if (currentIndex % 4 === 1) {
//         previousSlide.style.animation = "slideOutRight 0.5s forwards";
//         ellipse.style.background = "#8B8F95B8";
//       } else if (currentIndex % 4 === 2) {
//         previousSlide.style.animation = "slideOutLeft 0.5s forwards";
//         ellipse.style.background = "#EC7100";
//       } else {
//         previousSlide.style.animation = "slideOutRight 0.5s forwards";
//         ellipse.style.background = "#8B8F95B8";
//       }

//       currentIndex = (currentIndex + 1) % slides.length;
//       const nextSlide = slides[currentIndex];

//       setTimeout(() => {
//         if (currentIndex % 4 === 0) {
//           nextSlide.style.animation = "slideInRight 0.5s forwards";
//         } else if (currentIndex % 4 === 1) {
//           nextSlide.style.animation = "slideInLeft 0.5s forwards";
//         } else if (currentIndex % 4 === 2) {
//           nextSlide.style.animation = "slideInBottom 0.5s forwards";
//         } else {
//           nextSlide.style.animation = "slideInLeft 0.5s forwards";
//         }

//         nextSlide.classList.add("active");
//       }, 300);
//     }

//     setInterval(showNextSlide, 2000);
//   });

//   document.querySelectorAll(".reverse-animated-box").forEach((container) => {
//     const slides = container.querySelectorAll(".brand-img");
//     const ellipse = container.querySelector(".orange-ellipse");
//     let currentIndex = 0;

//     function showNextSlide() {
//       const previousSlide = slides[currentIndex];
//       previousSlide.classList.remove("active");

//       if (currentIndex % 4 === 0) {
//         previousSlide.style.animation = "slideOutLeft 0.5s forwards";
//         ellipse.style.background = "#EC7100";
//       } else if (currentIndex % 4 === 1) {
//         previousSlide.style.animation = "slideOutBottom 0.5s forwards";
//         ellipse.style.background = "#2B6CDEB8";
//       } else if (currentIndex % 4 === 2) {
//         previousSlide.style.animation = "slideOutBottom 0.5s forwards";
//         ellipse.style.background = "#8B8F95B8";
//       } else {
//         previousSlide.style.animation = "slideOutBottom 0.5s forwards";
//         ellipse.style.background = "#2B6CDEB8";
//       }

//       currentIndex = (currentIndex + 1) % slides.length;
//       const nextSlide = slides[currentIndex];

//       setTimeout(() => {
//         if (currentIndex % 4 === 0) {
//           nextSlide.style.animation = "slideInLeft 0.5s forwards";
//         } else if (currentIndex % 4 === 1) {
//           nextSlide.style.animation = "slideInBottom 0.5s forwards";
//         } else if (currentIndex % 4 === 2) {
//           nextSlide.style.animation = "slideInLeft 0.5s forwards";
//         } else {
//           nextSlide.style.animation = "slideInBottom 0.5s forwards";
//         }
//         nextSlide.classList.add("active");
//       }, 300);
//     }

//     setInterval(showNextSlide, 2000); // Change slide every 3 seconds
//   });
// });

document.querySelectorAll(".animated-box").forEach((container) => {
  const sectionFive = document.querySelector(".section-five");
  const slides = container.querySelectorAll(".brand-img");
  const ellipse = container.querySelector(".ellipse");
  let currentIndex = 0;
  let intervalId;

  function showNextSlide() {
    const previousSlide = slides[currentIndex];
    previousSlide.classList.remove("active");
    console.log("yes");
    if (currentIndex % 4 === 0) {
      previousSlide.style.animation = "slideOutBottom 0.5s forwards";
      ellipse.style.background = "#2B6CDEB8";
    } else if (currentIndex % 4 === 1) {
      previousSlide.style.animation = "slideOutRight 0.5s forwards";
      ellipse.style.background = "#8B8F95B8";
    } else if (currentIndex % 4 === 2) {
      previousSlide.style.animation = "slideOutLeft 0.5s forwards";
      ellipse.style.background = "#EC7100";
    } else {
      previousSlide.style.animation = "slideOutRight 0.5s forwards";
      ellipse.style.background = "#8B8F95B8";
    }

    currentIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[currentIndex];

    setTimeout(() => {
      if (currentIndex % 4 === 0) {
        nextSlide.style.animation = "slideInRight 0.5s forwards";
      } else if (currentIndex % 4 === 1) {
        nextSlide.style.animation = "slideInLeft 0.5s forwards";
      } else if (currentIndex % 4 === 2) {
        nextSlide.style.animation = "slideInBottom 0.5s forwards";
      } else {
        nextSlide.style.animation = "slideInLeft 0.5s forwards";
      }

      nextSlide.classList.add("active");
    }, 300);
  }

  // IntersectionObserver to detect if the container is in the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the interval when the container is in the viewport
          if (!intervalId) {
            intervalId = setInterval(showNextSlide, 2000);
          }
        } else {
          // Clear the interval when the container is out of the viewport
          clearInterval(intervalId);
          intervalId = null;
        }
      });
    },
    {
      threshold: 0.1, // Adjust this threshold if needed
    }
  );

  observer.observe(sectionFive);
});

document.querySelectorAll(".reverse-animated-box").forEach((container) => {
  const sectionFive = document.querySelector(".section-five");
  const slides = container.querySelectorAll(".brand-img");
  const ellipse = container.querySelector(".orange-ellipse");
  let currentIndex = 0;
  let intervalId;

  function showNextSlide() {
    const previousSlide = slides[currentIndex];
    previousSlide.classList.remove("active");

    if (currentIndex % 4 === 0) {
      previousSlide.style.animation = "slideOutLeft 0.5s forwards";
      ellipse.style.background = "#EC7100";
    } else if (currentIndex % 4 === 1) {
      previousSlide.style.animation = "slideOutBottom 0.5s forwards";
      ellipse.style.background = "#2B6CDEB8";
    } else if (currentIndex % 4 === 2) {
      previousSlide.style.animation = "slideOutBottom 0.5s forwards";
      ellipse.style.background = "#8B8F95B8";
    } else {
      previousSlide.style.animation = "slideOutBottom 0.5s forwards";
      ellipse.style.background = "#2B6CDEB8";
    }

    currentIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[currentIndex];

    setTimeout(() => {
      if (currentIndex % 4 === 0) {
        nextSlide.style.animation = "slideInLeft 0.5s forwards";
      } else if (currentIndex % 4 === 1) {
        nextSlide.style.animation = "slideInBottom 0.5s forwards";
      } else if (currentIndex % 4 === 2) {
        nextSlide.style.animation = "slideInLeft 0.5s forwards";
      } else {
        nextSlide.style.animation = "slideInBottom 0.5s forwards";
      }
      nextSlide.classList.add("active");
    }, 300);
  }

  // IntersectionObserver to detect if the container is in the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the interval when the container is in the viewport
          if (!intervalId) {
            intervalId = setInterval(showNextSlide, 2000);
          }
        } else {
          // Clear the interval when the container is out of the viewport
          clearInterval(intervalId);
          intervalId = null;
        }
      });
    },
    {
      threshold: 0.1, // Adjust this threshold if needed
    }
  );

  observer.observe(sectionFive);
});
