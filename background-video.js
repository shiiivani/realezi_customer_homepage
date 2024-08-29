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

//   function playVideo(index) {
//     const videoData = videos[index];
//     const isLoopingVideo = videoData.loop;

//     // Swap active and next videos
//     const tempVideo = activeVideo;
//     activeVideo = nextVideo;
//     nextVideo = tempVideo;

//     // Set source and properties of the next video
//     nextVideo.src = videoData.src;
//     nextVideo.loop = videoData.loop;
//     nextVideo.currentTime = 0;
//     nextVideo.style.zIndex = "1";
//     activeVideo.style.zIndex = "0";

//     // Play the video
//     nextVideo.play();

//     // Handle non-looping videos
//     if (!isLoopingVideo) {
//       nextVideo.addEventListener("ended", onEnd);
//     } else {
//       // Clear end event listener for looping videos
//       nextVideo.removeEventListener("ended", onEnd);
//     }

//     // Pause the currently active video
//     activeVideo.pause();
//   }

//   // Define the onEnd function outside of playVideo
//   function onEnd() {
//     if (currentIndex === 2) {
//       playVideo(3); // Switch to main~2(2) on loop after main~2.mp4 ends
//     } else if (currentIndex === 3) {
//       playVideo(4); // Switch to main~3(3) on loop after main~3.mp4 ends
//     } else if (currentIndex === 6) {
//       // Stop video playback, no more transitions
//       nextVideo.removeEventListener("ended", onEnd);

//       // Ensure the last video stays on top
//       nextVideo.style.zIndex = "1";
//       activeVideo.style.zIndex = "0";
//     }
//   }

//   function handleSlideChange(newIndex) {
//     if (newIndex !== currentIndex) {
//       currentIndex = newIndex;
//       if (newIndex === 1) {
//         playVideo(1);
//       } else if (newIndex === 2) {
//         // Play main~2.mp4 and switch to main~2(2) on loop
//         playVideo(2);
//       } else if (newIndex === 3) {
//         // Play main~3.mp4 and switch to main~3(3) on loop
//         playVideo(4);
//       } else if (newIndex === 4) {
//         // Play main~8.mp4 and stop
//         playVideo(6);
//       }
//     }
//   }

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
//         { threshold: 0.5 }
//       ); // Trigger when 50% of the slide is visible

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

//   initSlideObserver();

//   // Initial playback
//   handleSlideChange(0);
// });

document.addEventListener("DOMContentLoaded", function () {
  const video1 = document.getElementById("background-video");
  const video2 = document.getElementById("background-video-2");

  const videos = [
    { src: "./videos/business-intro.mov", loop: false }, // Slide 1
    { src: "./videos/main(1).mp4", loop: true }, // Slide 2
    { src: "./videos/main~2.mp4", loop: false }, // Slide 3 - Video 1
    { src: "./videos/main~2(2).mp4", loop: true }, // Slide 3 - Video 2 (loop)
    { src: "./videos/main~3.mp4", loop: false }, // Slide 4 - Video 1
    { src: "./videos/main~3(3).mp4", loop: true }, // Slide 4 - Video 2 (loop)
    { src: "./videos/main~8.mp4", loop: false }, // Slide 5
  ];

  let currentIndex = -1;
  let activeVideo = video1;
  let nextVideo = video2;

  // Function to play video with GSAP transition
  function playVideo(index) {
    const videoData = videos[index];

    // Swap videos
    [activeVideo, nextVideo] = [nextVideo, activeVideo];

    // Set source and loop properties
    nextVideo.src = videoData.src;
    nextVideo.loop = videoData.loop;
    nextVideo.currentTime = 0;

    // GSAP transition
    gsap.set(nextVideo, { autoAlpha: 0, zIndex: 1 });
    gsap.set(activeVideo, { zIndex: 0 });
    gsap.to(nextVideo, { autoAlpha: 1, duration: 0.5 });

    // Play the next video
    nextVideo.play();

    // Handle non-looping videos with 'ended' event
    if (!videoData.loop) {
      nextVideo.onended = () => {
        if (currentIndex === 2) {
          playVideo(3); // Loop after main~2.mp4 ends
        } else if (currentIndex === 3) {
          playVideo(4); // Loop after main~3.mp4 ends
        } else if (currentIndex === 6) {
          // Stop playback, no more transitions
          gsap.set(nextVideo, { zIndex: 1 });
          nextVideo.onended = null;
        }
      };
    } else {
      nextVideo.onended = null; // Remove 'ended' event listener for looping videos
    }

    // Pause the currently active video
    activeVideo.pause();
  }

  // Function to handle slide change
  function handleSlideChange(newIndex) {
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      if (newIndex === 1) {
        playVideo(1);
      } else if (newIndex === 2) {
        playVideo(2);
      } else if (newIndex === 3) {
        playVideo(4);
      } else if (newIndex === 4) {
        playVideo(6);
      }
    }
  }

  // Initialize Intersection Observer to track slide visibility
  function initSlideObserver() {
    if ("IntersectionObserver" in window) {
      const slideObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Array.from(
                document.querySelectorAll(".section-one-slider .slide")
              ).indexOf(entry.target);
              handleSlideChange(index);
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the slide is visible
      );

      document
        .querySelectorAll(".section-one-slider .slide")
        .forEach((slide) => {
          slideObserver.observe(slide);
        });
    } else {
      // Fallback to scroll event if IntersectionObserver is not supported
      document
        .querySelector(".section-one-slider")
        .addEventListener("scroll", checkSlideVisibility);
      window.addEventListener("resize", checkSlideVisibility);
      window.addEventListener("scroll", checkSlideVisibility);
    }
  }

  // Function to check slide visibility (fallback)
  function checkSlideVisibility() {
    const sliderRect = document
      .querySelector(".section-one-slider")
      .getBoundingClientRect();
    document
      .querySelectorAll(".section-one-slider .slide")
      .forEach((slide, index) => {
        const h1 = slide.querySelector("h1");
        const h1Rect = h1.getBoundingClientRect();

        // Check if the h1 is within the slider's viewport
        if (h1Rect.bottom > sliderRect.top && h1Rect.top < sliderRect.bottom) {
          handleSlideChange(index);
        }
      });
  }

  // Initialize everything
  initSlideObserver();
  handleSlideChange(0);
});
