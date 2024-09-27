// document.addEventListener("DOMContentLoaded", function () {
//   const video1 = document.getElementById("background-video");
//   const video2 = document.getElementById("background-video-2");

//   const videos = [
//     { src: "./videos/main~1.mp4", loop: false }, // Slide 1
//     { src: "./videos/main~2.mp4", loop: false }, // Slide 2
//     { src: "./videos/main~3.mp4", loop: false }, // Slide 3
//     { src: "./videos/main~4.mp4", loop: false }, // Slide 4
//     { src: "./videos/main~5.mp4", loop: false }, // Slide 5
//     { src: "./videos/main~6.mp4", loop: false }, // Slide 6
//     { src: "./videos/main~7.mp4", loop: false }, // Slide 7
//   ];

//   let currentIndex = -1;
//   let activeVideo = video1;
//   let nextVideo = video2;

//   // Function to play video based on slide index
//   function playVideo(index) {
//     const videoData = videos[index];

//     // Swap the videos
//     const tempVideo = activeVideo;
//     activeVideo = nextVideo;
//     nextVideo = tempVideo;

//     // Set the next video source and properties
//     nextVideo.src = videoData.src;
//     nextVideo.loop = videoData.loop;
//     nextVideo.currentTime = 0; // Reset to the start
//     nextVideo.style.zIndex = "1"; // Bring the next video to the front
//     activeVideo.style.zIndex = "0"; // Send the active video to the back

//     // Play the next video
//     nextVideo.play();

//     // Handle the end event for non-looping videos
//     if (!videoData.loop) {
//       nextVideo.addEventListener("ended", onEnd);
//     } else {
//       nextVideo.removeEventListener("ended", onEnd);
//     }

//     // Pause the active video
//     activeVideo.pause();
//   }

//   // Function to handle video end event
//   function onEnd() {
//     // Logic can be added here if needed when a video ends
//   }

//   // Handle slide changes
//   function handleSlideChange(newIndex) {
//     if (newIndex !== currentIndex) {
//       currentIndex = newIndex;
//       playVideo(currentIndex);
//     }
//   }

//   // Check which slide is currently visible
//   function checkSlideVisibility() {
//     const sliderRect = document
//       .querySelector(".section-one-slider")
//       .getBoundingClientRect();
//     document
//       .querySelectorAll(".section-one-slider .slide")
//       .forEach((slide, index) => {
//         const h1 = slide.querySelector("h1");
//         const h1Rect = h1.getBoundingClientRect();

//         // If the slide is visible in the viewport, trigger slide change
//         if (h1Rect.bottom > sliderRect.top && h1Rect.top < sliderRect.bottom) {
//           handleSlideChange(index);
//         }
//       });
//   }

//   // Initialize slide observer for visibility tracking
//   function initSlideObserver() {
//     if ("IntersectionObserver" in window) {
//       const slideObserver = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const index = Array.from(
//                 document.querySelectorAll(".section-one-slider .slide")
//               ).indexOf(entry.target);
//               handleSlideChange(index); // Handle slide change when visible
//             }
//           });
//         },
//         { threshold: 0.5 } // Trigger when half the slide is visible
//       );

//       document
//         .querySelectorAll(".section-one-slider .slide")
//         .forEach((slide) => {
//           slideObserver.observe(slide);
//         });
//     } else {
//       // Fallback for older browsers
//       document
//         .querySelector(".section-one-slider")
//         .addEventListener("scroll", checkSlideVisibility);
//       window.addEventListener("resize", checkSlideVisibility);
//       window.addEventListener("scroll", checkSlideVisibility);
//     }
//   }

//   // Initialize the slide observer
//   initSlideObserver();

//   // Initial playback for the first slide
//   handleSlideChange(0);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const video1 = document.getElementById("background-video");
//   const video2 = document.getElementById("background-video-2");

//   const videos = [
//     { src: "./videos/business-intro.mov", loop: false }, // Slide 1
//     { src: "./videos/main(1).mp4", loop: true }, // Slide 2
//     { src: "./videos/main~2.mp4", loop: false }, // Slide 3 - Video 1
//     { src: "./videos/main~2(2).mp4", loop: true }, // Slide 3 - Video 2 (loop)
//     { src: "./videos/main~3.mp4", loop: false }, // Slide 4 - Video 1
//     { src: "./videos/main~3(3).mp4", loop: true }, // Slide 4 - Video 2 (loop)
//     { src: "./videos/main~8.mp4", loop: false }, // Slide 5
//   ];

//   let currentIndex = -1;
//   let activeVideo = video1;
//   let nextVideo = video2;

//   // Function to play video with GSAP transition
//   function playVideo(index) {
//     const videoData = videos[index];

//     // Swap videos
//     [activeVideo, nextVideo] = [nextVideo, activeVideo];

//     // Set source and loop properties
//     nextVideo.src = videoData.src;
//     nextVideo.loop = videoData.loop;
//     nextVideo.currentTime = 0;

//     // GSAP transition
//     gsap.set(nextVideo, { autoAlpha: 0, zIndex: 1 });
//     gsap.set(activeVideo, { zIndex: 0 });
//     gsap.to(nextVideo, { autoAlpha: 1, duration: 0.5 });

//     // Play the next video
//     nextVideo.play();

//     // Handle non-looping videos with 'ended' event
//     if (!videoData.loop) {
//       nextVideo.onended = () => {
//         if (currentIndex === 2) {
//           playVideo(3); // Loop after main~2.mp4 ends
//         } else if (currentIndex === 3) {
//           playVideo(4); // Loop after main~3.mp4 ends
//         } else if (currentIndex === 6) {
//           // Stop playback, no more transitions
//           gsap.set(nextVideo, { zIndex: 1 });
//           nextVideo.onended = null;
//         }
//       };
//     } else {
//       nextVideo.onended = null; // Remove 'ended' event listener for looping videos
//     }

//     // Pause the currently active video
//     activeVideo.pause();
//   }

//   // Function to handle slide change
//   function handleSlideChange(newIndex) {
//     if (newIndex !== currentIndex) {
//       currentIndex = newIndex;
//       if (newIndex === 1) {
//         playVideo(1);
//       } else if (newIndex === 2) {
//         playVideo(2);
//       } else if (newIndex === 3) {
//         playVideo(4);
//       } else if (newIndex === 4) {
//         playVideo(6);
//       }
//     }
//   }

//   // Initialize Intersection Observer to track slide visibility
//   function initSlideObserver() {
//     if ("IntersectionObserver" in window) {
//       const slideObserver = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const index = Array.from(
//                 document.querySelectorAll(".section-one-slider .slide")
//               ).indexOf(entry.target);
//               handleSlideChange(index);
//             }
//           });
//         },
//         { threshold: 0.5 } // Trigger when 50% of the slide is visible
//       );

//       document
//         .querySelectorAll(".section-one-slider .slide")
//         .forEach((slide) => {
//           slideObserver.observe(slide);
//         });
//     } else {
//       // Fallback to scroll event if IntersectionObserver is not supported
//       document
//         .querySelector(".section-one-slider")
//         .addEventListener("scroll", checkSlideVisibility);
//       window.addEventListener("resize", checkSlideVisibility);
//       window.addEventListener("scroll", checkSlideVisibility);
//     }
//   }

//   // Function to check slide visibility (fallback)
//   function checkSlideVisibility() {
//     const sliderRect = document
//       .querySelector(".section-one-slider")
//       .getBoundingClientRect();
//     document
//       .querySelectorAll(".section-one-slider .slide")
//       .forEach((slide, index) => {
//         const h1 = slide.querySelector("h1");
//         const h1Rect = h1.getBoundingClientRect();

//         // Check if the h1 is within the slider's viewport
//         if (h1Rect.bottom > sliderRect.top && h1Rect.top < sliderRect.bottom) {
//           handleSlideChange(index);
//         }
//       });
//   }

//   // Initialize everything
//   initSlideObserver();
//   handleSlideChange(0);
// });

// Include GSAP library in your project first
// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("background-video");
//   const slides = document.querySelectorAll(".section-one-slider .slide");
//   let currentIndex = -1;
//   let isPlaying = false;

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

//   function handleSlideChange(newIndex) {
//     if (newIndex !== currentIndex && !isPlaying) {
//       currentIndex = newIndex;
//       const currentSlide = slides[currentIndex];
//       const startTime = parseFloat(currentSlide.getAttribute("data-start"));
//       const endTime = parseFloat(currentSlide.getAttribute("data-end"));

//       playVideoSegment(startTime, endTime);
//     }
//   }

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

//   // Add event listeners to capture the slide changes
//   document
//     .querySelector(".section-one-slider")
//     .addEventListener("scroll", () => {
//       gsap.to(window, { duration: 0.5, onComplete: checkSlideVisibility });
//     });

//   // Optionally call checkSlideVisibility on load to set the initial state
//   checkSlideVisibility();
// });

// // Intersection Observer to detect visible slides
// function initSlideObserver() {
//   if ("IntersectionObserver" in window) {
//     const slideObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = Array.from(slides).indexOf(entry.target);
//             handleSlideChange(index);
//           }
//         });
//       },
//       { threshold: 0.2 } // Trigger when half the slide is visible
//     );

//     slides.forEach((slide) => {
//       slideObserver.observe(slide);
//     });
//   } else {
//     document
//       .querySelector(".section-one-slider")
//       .addEventListener("scroll", checkSlideVisibility);
//     window.addEventListener("resize", checkSlideVisibility);
//     window.addEventListener("scroll", checkSlideVisibility);
//   }
// }

// // Initialize the slide observer
// initSlideObserver();

// // Initial playback for the first slide
// handleSlideChange(0);

// // Simple throttle function
// function throttle(func, limit) {
//   let lastFunc;
//   let lastRan;
//   return function () {
//     const context = this;
//     const args = arguments;
//     if (!lastRan) {
//       func.apply(context, args);
//       lastRan = Date.now();
//     } else {
//       clearTimeout(lastFunc);
//       lastFunc = setTimeout(function () {
//         if (Date.now() - lastRan >= limit) {
//           func.apply(context, args);
//           lastRan = Date.now();
//         }
//       }, limit - (Date.now() - lastRan));
//     }
//   };
// }

// // Use throttle on the visibility check
// const throttledCheckSlideVisibility = throttle(checkSlideVisibility, 100);

// document
//   .querySelector(".section-one-slider")
//   .addEventListener("scroll", throttledCheckSlideVisibility);

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".section-one-slider .slide");
  let currentIndex = -1;
  let isPlaying = false;
  let player;

  // Load the YouTube IFrame API and create the player
  function onYouTubeIframeAPIReady() {
    if (typeof YT !== "undefined" && YT.Player) {
      console.log("YouTube Player is accessible");
      player = new YT.Player("background-video", {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }
  }

  // When the player is ready
  function onPlayerReady(event) {
    console.log("Player is ready!");
    checkSlideVisibility(); // Check visibility on page load
  }

  // Handle video state changes (like pause after segment ends)
  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      isPlaying = true;
    } else if (
      event.data === YT.PlayerState.PAUSED ||
      event.data === YT.PlayerState.ENDED
    ) {
      isPlaying = false;
    }
  }

  // Function to play a specific segment of the video
  function playVideoSegment(startTime, endTime) {
    if (!player) {
      console.error("YouTube player is not initialized.");
      return;
    }

    isPlaying = true;
    player.seekTo(startTime);
    player.playVideo();

    const checkVideoEnd = setInterval(function () {
      const currentTime = player.getCurrentTime();
      if (currentTime >= endTime) {
        player.pauseVideo();
        clearInterval(checkVideoEnd);
        isPlaying = false;
      }
    }, 100);
  }

  function handleSlideChange(newIndex) {
    if (newIndex !== currentIndex && !isPlaying) {
      currentIndex = newIndex;
      const currentSlide = slides[currentIndex];
      const startTime = parseFloat(currentSlide.getAttribute("data-start"));
      const endTime = parseFloat(currentSlide.getAttribute("data-end"));

      playVideoSegment(startTime, endTime);
    }
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

  // Throttle function to limit execution
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

  // Scroll event with throttle to check visibility of slides
  document
    .querySelector(".section-one-slider")
    .addEventListener("scroll", throttle(checkSlideVisibility, 100));

  // Initial visibility check on load
  checkSlideVisibility();

  // Intersection Observer to detect visible slides
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
        { threshold: 0.2 } // Trigger when a portion of the slide is visible
      );

      slides.forEach((slide) => {
        slideObserver.observe(slide);
      });
    }
  }

  // Initialize the observer
  initSlideObserver();

  // Expose the YouTube API to the window so it can be called
  onYouTubeIframeAPIReady();
});
