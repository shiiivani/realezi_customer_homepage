// // // Include GSAP library in your project first
// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("background-video");
//   const slides = document.querySelectorAll(".section-one-slider .slide");
//   let currentIndex = -1;
//   let isPlaying = false;

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
//         { threshold: 0.2 } // Trigger when 20% of the slide is visible
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

// // Initial playback for the first slide
// handleSlideChange(0);

////////////////////////

// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("background-video");
//   const slides = document.querySelectorAll(".slide");
//   let currentSlide = 0;
//   let isPlaying = false;
//   let isScrolling = false;

//   // Initialize the first slide
//   slides[currentSlide].classList.add("active");

//   // Function to change slides and trigger video playback
//   const changeSlide = (direction) => {
//     if (isScrolling) return; // Prevent multiple triggers during scroll
//     isScrolling = true;

//     // Exit the current slide
//     if (direction === "up") {
//       slides[currentSlide].classList.add("exit-up");
//     } else {
//       slides[currentSlide].classList.add("exit-down");
//     }

//     setTimeout(() => {
//       slides.forEach((slide) =>
//         slide.classList.remove("active", "exit-up", "exit-down")
//       );

//       // Update current slide based on scroll direction
//       if (direction === "up") {
//         currentSlide--;
//         if (currentSlide < 0) currentSlide = 0;
//       } else {
//         currentSlide++;
//         if (currentSlide >= slides.length) currentSlide = slides.length - 1;
//       }

//       // Set the new slide as active
//       slides[currentSlide].classList.add("active");

//       // Play the corresponding video segment for the new slide
//       playVideoSegmentForSlide(currentSlide);

//       isScrolling = false;
//     }, 500); // Adjust to match your slide transition timing
//   };

//   // Function to play video segment based on the current slide
//   const playVideoSegmentForSlide = (slideIndex) => {
//     if (isPlaying) return; // Prevent overlapping video playbacks

//     const currentSlide = slides[slideIndex];
//     const startTime = parseFloat(currentSlide.getAttribute("data-start"));
//     const endTime = parseFloat(currentSlide.getAttribute("data-end"));

//     // Play video segment corresponding to the active slide
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
//   };

//   // Listen for scroll events
//   let scrollTimeout = null;
//   window.addEventListener("wheel", (e) => {
//     if (scrollTimeout) clearTimeout(scrollTimeout);

//     // Debounce scroll events
//     scrollTimeout = setTimeout(() => {
//       if (e.deltaY > 0) {
//         changeSlide("down"); // Scroll down
//       } else {
//         changeSlide("up"); // Scroll up
//       }
//     }, 150); // Adjust debounce time as needed
//   });

//   // Initialize the first video segment for the first slide
//   playVideoSegmentForSlide(0);
// });

/////////

// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("background-video");
//   const slides = document.querySelectorAll(".slide");
//   let currentSlide = 0;
//   let isPlaying = false;
//   let isScrolling = false;

//   // Initialize the first slide
//   slides[currentSlide].classList.add("active");

//   // Function to change slides and trigger video playback
//   const changeSlide = (direction) => {
//     if (isScrolling) return; // Prevent multiple triggers during scroll
//     isScrolling = true;

//     // Exit the current slide
//     if (direction === "up") {
//       slides[currentSlide].classList.add("exit-up");
//     } else {
//       slides[currentSlide].classList.add("exit-down");
//     }

//     setTimeout(() => {
//       slides.forEach((slide) =>
//         slide.classList.remove("active", "exit-up", "exit-down")
//       );

//       // Update current slide based on scroll direction
//       if (direction === "up") {
//         currentSlide--;
//         if (currentSlide < 0) currentSlide = 0;
//       } else {
//         currentSlide++;
//         if (currentSlide >= slides.length) currentSlide = slides.length - 1;
//       }

//       // Set the new slide as active
//       slides[currentSlide].classList.add("active");

//       // Play or pause video based on scroll direction
//       if (direction === "down") {
//         playVideoSegmentForSlide(currentSlide); // Play video when moving down
//       } else {
//         pauseVideoAndShowFrame(currentSlide); // Pause video and show last frame when moving up
//       }

//       isScrolling = false;
//     }, 500); // Adjust to match your slide transition timing
//   };

//   // Function to pause the video and show the last frame of the current slide
//   const pauseVideoAndShowFrame = (slideIndex) => {
//     const currentSlide = slides[slideIndex];
//     const endTime = parseFloat(currentSlide.getAttribute("data-end"));

//     // Pause the video
//     video.pause();
//     isPlaying = false; // Mark video as not playing

//     // Set the current time to the end time to show the last frame of that slide
//     video.currentTime = endTime;
//   };

//   // Function to play video segment based on the current slide
//   const playVideoSegmentForSlide = (slideIndex) => {
//     if (isPlaying) return; // Prevent overlapping video playbacks

//     const currentSlide = slides[slideIndex];
//     const startTime = parseFloat(currentSlide.getAttribute("data-start"));
//     const endTime = parseFloat(currentSlide.getAttribute("data-end"));

//     // Play video segment corresponding to the active slide
//     isPlaying = true;
//     video.currentTime = startTime; // Start the video at the slide's start time
//     video.play();

//     const pauseVideoAtEndTime = function () {
//       if (video.currentTime >= endTime) {
//         video.pause();
//         video.removeEventListener("timeupdate", pauseVideoAtEndTime);
//         isPlaying = false;
//       }
//     };

//     video.addEventListener("timeupdate", pauseVideoAtEndTime);
//   };

//   // Listen for scroll events
//   let scrollTimeout = null;
//   window.addEventListener("wheel", (e) => {
//     if (scrollTimeout) clearTimeout(scrollTimeout);

//     // Debounce scroll events
//     scrollTimeout = setTimeout(() => {
//       if (e.deltaY > 0) {
//         changeSlide("down"); // Scroll down
//       } else {
//         changeSlide("up"); // Scroll up
//       }
//     }, 150); // Adjust debounce time as needed
//   });

//   // Initialize the first video segment for the first slide
//   playVideoSegmentForSlide(0);
// });

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("background-video");
  const slides = document.querySelectorAll(".slide");
  const header = document.querySelector("header");
  const bottomText = document.getElementById("section-bottom-text");
  const bottomCont = document.querySelector(".section-one-bottom-outer");

  const slideTexts = [
    "Revolutionize your real estate experience with seamless, tech-driven solutions by Realezi. From first-time buyers to professional sellers, we make your journey from click to close effortless.",
    "We design your dream home! From initial planning to designing and final touches, we build a perfect home just as you like it.",
    "Be it residential or non-residential. Enjoy our end-to-end expert design solutions to transform and enhance your space tailored to your style.",
    "Leave the complexities of home financing behind. With us by your side, from home loan application to the disbursement process, you can secure the right loan at low interest rates.",
    "Anyone can do this job but not everyone can be us. We are your partners in all things legal- from due diligence, to lease agreements and much more. ",
    "Harness the Sun for sustainability. Go green with us with the best rooftop solar systems at the best prices.",
    "Let us take care of the heavy lifting (literally!). Relocating is made easy with our guarantee of safe delivery.",
  ];

  let currentSlide = 0;
  let isPlaying = false;
  let isScrolling = false;
  let isHeaderFixed = false;

  document.body.classList.add("overflow-hidden");

  slides[currentSlide].classList.add("active");

  const changeSlide = (direction) => {
    // Check if the current slide is the last one
    // Check if the user is scrolling and the conditions for the current slide
    if (
      isScrolling ||
      (currentSlide === slides.length - 1 && direction === "down") ||
      (direction === "up" && isHeaderFixed) // New condition added here
    ) {
      return;
    }
    isScrolling = true;

    if (direction === "up") {
      slides[currentSlide].classList.add("exit-up");
    } else {
      slides[currentSlide].classList.add("exit-down");
    }

    setTimeout(() => {
      slides.forEach((slide) =>
        slide.classList.remove("active", "exit-up", "exit-down")
      );

      if (direction === "up") {
        currentSlide--;
        if (currentSlide < 0) currentSlide = 0;
      } else {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = slides.length - 1;
      }

      // Only update if not at the last slide
      if (currentSlide <= slides.length - 1) {
        slides[currentSlide].classList.add("active");
        bottomText.innerHTML = slideTexts[currentSlide];
        bottomCont.style.animation = "slideUp 0.5s ease-in-out";

        setTimeout(() => {
          bottomCont.style.animation = "";
        }, 500);

        if (direction === "down") {
          playVideoSegmentForSlide(currentSlide);
        } else {
          pauseVideoAndShowFrame(currentSlide);
        }
      } else {
        // Keep the last slide active if it's the last one
        slides[slides.length - 1].classList.add("active");
      }

      isScrolling = false;
    }, 500);
  };

  const pauseVideoAndShowFrame = (slideIndex) => {
    const currentSlide = slides[slideIndex];
    const endTime = parseFloat(currentSlide.getAttribute("data-end"));

    video.pause();
    isPlaying = false;
    video.currentTime = endTime;
  };

  const playVideoSegmentForSlide = (slideIndex) => {
    if (isPlaying) return;
    const currentSlide = slides[slideIndex];
    const startTime = parseFloat(currentSlide.getAttribute("data-start"));
    const endTime = parseFloat(currentSlide.getAttribute("data-end"));

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
  };

  // Use IntersectionObserver to detect when header touches the top of the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && currentSlide < slides.length - 1) {
          document.body.classList.add("overflow-hidden");
          isHeaderFixed = true;
        } else {
          document.body.classList.remove("overflow-hidden");
          isHeaderFixed = false;
        }
      });
    },
    { threshold: 0 }
  );
  observer.observe(header);

  let scrollTimeout = null;
  window.addEventListener("wheel", (e) => {
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      if (e.deltaY > 0) {
        changeSlide("down");
      } else {
        changeSlide("up");
      }

      // Ensure the overflow is hidden when header is fixed and slide is not the last one
      if (currentSlide < slides.length - 1) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }, 60);
  });

  playVideoSegmentForSlide(0);
});
