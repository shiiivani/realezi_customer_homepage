// document.addEventListener("DOMContentLoaded", function () {
//   if (window.innerWidth > 567) {
//     const video = document.getElementById("background-video");
//     const slides = document.querySelectorAll(".section-one-slider .slide");
//     let currentIndex = -1;
//     let isPlaying = false;

//     // Function to prevent scrolling
//     const preventScroll = (e) => {
//       const exceptionButton = document.querySelector(".skip-btn");
//       if (e.target === exceptionButton || exceptionButton.contains(e.target)) {
//         return;
//       }
//       e.preventDefault();
//       e.stopPropagation();
//       return false;
//     };

//     // Function to enable scrolling and remove event listeners
//     const enableScroll = () => {
//       window.removeEventListener("wheel", preventScroll);
//       window.removeEventListener("touchmove", preventScroll);
//       window.removeEventListener("keydown", preventScroll);
//       document.body.style.overflow = "auto";
//     };

//     // Disable scrolling for the first 5 seconds
//     window.addEventListener("wheel", preventScroll, { passive: false });
//     window.addEventListener("touchmove", preventScroll, { passive: false });
//     window.addEventListener("keydown", preventScroll);

//     // Set timeout to enable scroll after 5 seconds
//     const scrollTimeout = setTimeout(() => {
//       enableScroll();
//     }, 6000);

//     // Add a click event listener to the skip button to immediately enable scroll
//     const skipButton = document.querySelector(".skip-btn");
//     skipButton.addEventListener("click", () => {
//       clearTimeout(scrollTimeout); // Cancel the 5-second timer
//       enableScroll(); // Enable scrolling immediately
//     });

//     function playVideoSegment(startTime, endTime) {
//       isPlaying = true;
//       video.currentTime = startTime;
//       video.play();

//       const pauseVideoAtEndTime = () => {
//         if (video.currentTime >= endTime) {
//           video.pause();
//           video.removeEventListener("timeupdate", pauseVideoAtEndTime);
//           isPlaying = false;
//         }
//       };

//       video.addEventListener("timeupdate", pauseVideoAtEndTime);
//     }

//     const pauseVideoAndShowFrame = (slideIndex) => {
//       const currentSlide = slides[slideIndex];
//       const endTime = parseFloat(currentSlide.getAttribute("data-end"));

//       video.pause();
//       isPlaying = false;
//       video.currentTime = endTime;
//     };

//     // Handle slide change
//     function handleSlideChange(newIndex) {
//       if (newIndex !== currentIndex) {
//         const previousIndex = currentIndex;
//         currentIndex = newIndex;
//         const currentSlide = slides[currentIndex];
//         const startTime = parseFloat(currentSlide.getAttribute("data-start"));
//         const endTime = parseFloat(currentSlide.getAttribute("data-end"));

//         if (newIndex > previousIndex) {
//           if (!isPlaying) {
//             playVideoSegment(startTime, endTime);
//           }
//         } else {
//           pauseVideoAndShowFrame(newIndex);
//         }
//       }
//     }

//     function initSlideObserver() {
//       if ("IntersectionObserver" in window) {
//         const slideObserver = new IntersectionObserver(
//           (entries) => {
//             entries.forEach((entry) => {
//               if (entry.isIntersecting) {
//                 const index = Array.from(slides).indexOf(entry.target);
//                 handleSlideChange(index);
//               }
//             });
//           },
//           { threshold: 0.3 }
//         );

//         slides.forEach((slide) => {
//           slideObserver.observe(slide);
//         });
//       }
//     }

//     initSlideObserver();

//     function throttle(func, limit) {
//       let lastFunc;
//       let lastRan;
//       return function () {
//         const context = this;
//         const args = arguments;
//         if (!lastRan) {
//           func.apply(context, args);
//           lastRan = Date.now();
//         } else {
//           clearTimeout(lastFunc);
//           lastFunc = setTimeout(function () {
//             if (Date.now() - lastRan >= limit) {
//               func.apply(context, args);
//               lastRan = Date.now();
//             }
//           }, limit - (Date.now() - lastRan));
//         }
//       };
//     }

//     function checkSlideVisibility() {
//       const sliderRect = document
//         .querySelector(".section-one-slider")
//         .getBoundingClientRect();
//       slides.forEach((slide, index) => {
//         const h1 = slide.querySelector("h1");
//         const h1Rect = h1.getBoundingClientRect();

//         if (h1Rect.bottom > sliderRect.top && h1Rect.top < sliderRect.bottom) {
//           handleSlideChange(index);
//         }
//       });
//     }

//     const throttledCheckSlideVisibility = throttle(checkSlideVisibility, 100);

//     document
//       .querySelector(".section-one-slider")
//       .addEventListener("scroll", throttledCheckSlideVisibility);
//   }
// });

// handleSlideChange(0);

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 567) {
    const video = document.getElementById("background-video");
    const placeholder = document.getElementById("video-placeholder");

    // Once the video is loaded, hide the placeholder and show the video
    video.addEventListener("canplay", function () {
      placeholder.classList.add("d-none");
      video.classList.remove("d-none");
    });

    const slides = document.querySelectorAll(".section-one-slider .slide");
    let currentIndex = -1;
    let isPlaying = false;

    // Function to prevent scrolling
    // const preventScroll = (e) => {
    //   const exceptionButton = document.querySelector(".skip-btn");
    //   if (e.target === exceptionButton || exceptionButton.contains(e.target)) {
    //     return;
    //   }
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return false;
    // };

    // // Function to enable scrolling and remove event listeners
    // const enableScroll = () => {
    //   window.removeEventListener("wheel", preventScroll);
    //   window.removeEventListener("touchmove", preventScroll);
    //   window.removeEventListener("keydown", preventScroll);
    //   document.body.style.overflow = "auto";
    // };

    // // Disable scrolling for the first 5 seconds
    // window.addEventListener("wheel", preventScroll, { passive: false });
    // window.addEventListener("touchmove", preventScroll, { passive: false });
    // window.addEventListener("keydown", preventScroll);

    // // Set timeout to enable scroll after 5 seconds
    // const scrollTimeout = setTimeout(() => {
    //   enableScroll();
    // }, 6000);

    // Add a click event listener to the skip button to immediately enable scroll
    const skipButton = document.querySelector(".skip-btn");
    skipButton.addEventListener("click", () => {
      clearTimeout(scrollTimeout);
      enableScroll();
    });

    function playVideoSegment(startTime, endTime) {
      isPlaying = true;
      video.currentTime = startTime;
      video.play();

      const pauseVideoAtEndTime = () => {
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

    // Handle slide change
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
