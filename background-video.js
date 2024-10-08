// // Include GSAP library in your project first
// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("background-video");
//   const slides = document.querySelectorAll(".section-one-slider .slide");
//   let currentIndex = -1;
//   let isPlaying = false;

//   const preventScroll = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
//   };

//   window.addEventListener("wheel", preventScroll, { passive: false });
//   window.addEventListener("touchmove", preventScroll, { passive: false });
//   window.addEventListener("keydown", preventScroll);

//   // Enable scrolling after 6 seconds
//   setTimeout(() => {
//     // Remove the event listeners to enable scrolling again
//     window.removeEventListener("wheel", preventScroll);
//     window.removeEventListener("touchmove", preventScroll);
//     window.removeEventListener("keydown", preventScroll);

//     // Restore scroll bar interaction
//     document.body.style.overflow = "auto";
//   }, 6000);

//   // Function to play video segments based on slide
//   function playVideoSegment(startTime, endTime) {
//     isPlaying = true;
//     video.currentTime = startTime;
//     video.play();

//     const pauseVideoAtEndTime = function () {
//       if (video.currentTime >= endTime) {
//         video.pause();
//         video.removeEventListener("timeupdate", pauseVideoAtEndTime);
//         isPlaying = false;
//       }
//     };

//     video.addEventListener("timeupdate", pauseVideoAtEndTime);
//   }

//   // Function to handle slide changes
//   function handleSlideChange(newIndex) {
//     if (newIndex !== currentIndex && !isPlaying) {
//       currentIndex = newIndex;
//       const currentSlide = slides[currentIndex];
//       const startTime = parseFloat(currentSlide.getAttribute("data-start"));
//       const endTime = parseFloat(currentSlide.getAttribute("data-end"));

//       playVideoSegment(startTime, endTime);
//     }
//   }

//   // Intersection Observer to detect visible slides
//   function initSlideObserver() {
//     if ("IntersectionObserver" in window) {
//       const slideObserver = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const index = Array.from(slides).indexOf(entry.target);
//               handleSlideChange(index);
//             }
//           });
//         },
//         { threshold: 0.5 } // Trigger when 20% of the slide is visible
//       );

//       slides.forEach((slide) => {
//         slideObserver.observe(slide);
//       });
//     }
//   }

//   // Initialize the slide observer
//   initSlideObserver();

//   // Throttle function for performance optimization
//   function throttle(func, limit) {
//     let lastFunc;
//     let lastRan;
//     return function () {
//       const context = this;
//       const args = arguments;
//       if (!lastRan) {
//         func.apply(context, args);
//         lastRan = Date.now();
//       } else {
//         clearTimeout(lastFunc);
//         lastFunc = setTimeout(function () {
//           if (Date.now() - lastRan >= limit) {
//             func.apply(context, args);
//             lastRan = Date.now();
//           }
//         }, limit - (Date.now() - lastRan));
//       }
//     };
//   }

//   // Fallback scroll-based visibility detection if IntersectionObserver is not supported
//   function checkSlideVisibility() {
//     const sliderRect = document
//       .querySelector(".section-one-slider")
//       .getBoundingClientRect();
//     slides.forEach((slide, index) => {
//       const h1 = slide.querySelector("h1");
//       const h1Rect = h1.getBoundingClientRect();

//       if (h1Rect.bottom > sliderRect.top && h1Rect.top < sliderRect.bottom) {
//         handleSlideChange(index);
//       }
//     });
//   }

//   const throttledCheckSlideVisibility = throttle(checkSlideVisibility, 100);

//   // Add scroll event listener as a fallback
//   document
//     .querySelector(".section-one-slider")
//     .addEventListener("scroll", throttledCheckSlideVisibility);
// });

// handleSlideChange(0);

// Include GSAP library in your project first
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 567) {
    const video = document.getElementById("background-video");
    const slides = document.querySelectorAll(".section-one-slider .slide");
    let currentIndex = -1;
    let isPlaying = false;

    const preventScroll = (e) => {
      const exceptionButton = document.querySelector(".skip-btn");

      if (e.target === exceptionButton || exceptionButton.contains(e.target)) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventScroll);

    setTimeout(() => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventScroll);

      document.body.style.overflow = "auto";
    }, 6000);

    function playVideoSegment(startTime, endTime) {
      isPlaying = true;
      video.currentTime = startTime;
      video.play();

      const pauseVideoAtEndTime = function () {
        if (video.currentTime >= endTime) {
          video.pause();
          video.removeEventListener("timeupdate", pauseVideoAtEndTime);
          isPlaying = false;
        }
      };

      video.addEventListener("timeupdate", pauseVideoAtEndTime);
    }

    const pauseVideoAndShowFrame = (slideIndex) => {
      const currentSlide = slides[slideIndex];
      const endTime = parseFloat(currentSlide.getAttribute("data-end"));

      video.pause();
      isPlaying = false;
      video.currentTime = endTime;
    };

    function handleSlideChange(newIndex) {
      if (newIndex !== currentIndex) {
        const previousIndex = currentIndex;
        currentIndex = newIndex;
        const currentSlide = slides[currentIndex];
        const startTime = parseFloat(currentSlide.getAttribute("data-start"));
        const endTime = parseFloat(currentSlide.getAttribute("data-end"));

        if (newIndex > previousIndex) {
          if (!isPlaying) {
            playVideoSegment(startTime, endTime);
          }
        } else {
          pauseVideoAndShowFrame(newIndex);
        }
      }
    }

    function initSlideObserver() {
      if ("IntersectionObserver" in window) {
        const slideObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const index = Array.from(slides).indexOf(entry.target);
                handleSlideChange(index);
              }
            });
          },
          { threshold: 0.3 }
        );

        slides.forEach((slide) => {
          slideObserver.observe(slide);
        });
      }
    }

    initSlideObserver();

    function throttle(func, limit) {
      let lastFunc;
      let lastRan;
      return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(function () {
            if (Date.now() - lastRan >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    }

    function checkSlideVisibility() {
      const sliderRect = document
        .querySelector(".section-one-slider")
        .getBoundingClientRect();
      slides.forEach((slide, index) => {
        const h1 = slide.querySelector("h1");
        const h1Rect = h1.getBoundingClientRect();

        if (h1Rect.bottom > sliderRect.top && h1Rect.top < sliderRect.bottom) {
          handleSlideChange(index);
        }
      });
    }

    const throttledCheckSlideVisibility = throttle(checkSlideVisibility, 100);

    document
      .querySelector(".section-one-slider")
      .addEventListener("scroll", throttledCheckSlideVisibility);
  }
});

handleSlideChange(0);
