const videos = document.querySelectorAll(".section-three video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

// Youtube Shots sliding
document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".video");

  // Pause the animation initially on all video wrappers
  videoContainers.forEach((videoContainer) => {
    const videoWrapper = videoContainer
      .closest(".video-slider")
      .querySelector(".video-container");
    videoWrapper.style.animationPlayState = "paused";
  });

  // Helper function to check if the element is near the center of the viewport
  function isInViewportCenter(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const middlePoint = windowHeight / 2;

    // Check if the element is near the center of the screen
    return rect.top <= middlePoint && rect.bottom >= middlePoint;
  }

  // Create an IntersectionObserver to detect when the video container is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const videoContainer = entry.target;
        const videoWrapper = videoContainer
          .closest(".video-slider")
          .querySelector(".video-container");

        if (entry.isIntersecting || isInViewportCenter(videoContainer)) {
          // Start the animation when the section comes into view
          videoWrapper.style.animationPlayState = "running";
        } else {
          // Pause the animation when the section goes out of view
          videoWrapper.style.animationPlayState = "paused";
        }
      });
    },
    {
      threshold: [0.1, 0.25, 0.5, 0.75], // Multiple thresholds for sensitivity
    }
  );

  videoContainers.forEach((videoContainer) => {
    const video = videoContainer.querySelector(".instagram-video");
    const volumeCont = videoContainer.querySelector(".volume-container");
    const volumeUpIcon = videoContainer.querySelector(".volume-up");
    const volumeOffIcon = videoContainer.querySelector(".volume-off");
    const videoSlider = videoContainer.closest(".video-slider");
    const videoWrapper = videoSlider.querySelector(".video-container");

    observer.observe(videoContainer);

    videoContainer.addEventListener("mouseover", function () {
      videoWrapper.style.animationPlayState = "paused";
      // volumeCont.classList.remove("hidden");
    });

    videoContainer.addEventListener("mouseout", function () {
      videoWrapper.style.animationPlayState = "running";
      // volumeCont.classList.add("hidden");
    });

    volumeUpIcon.addEventListener("click", function () {
      video.muted = true;
      volumeUpIcon.classList.add("hidden");
      // volumeOffIcon.classList.remove("hidden");
    });

    volumeOffIcon.addEventListener("click", function () {
      video.muted = false;
      // volumeOffIcon.classList.add("hidden");
      // volumeUpIcon.classList.remove("hidden");
    });
  });
});

const sliders = document.querySelectorAll(".video-slider");

sliders.forEach((slider) => {
  const container = slider.querySelector(".video-container");
  const videos = slider.querySelectorAll(".video");
  const prevBtn = slider.querySelector(".prev-btn");
  const nextBtn = slider.querySelector(".next-btn");
  let index = 0;
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  // Function to update the slider when buttons are clicked
  const updateSlider = () => {
    const videoWidth = videos[0].clientWidth; // Get the width of one video
    container.style.scrollBehavior = "smooth"; // Enable smooth scrolling
    container.scrollLeft = index * videoWidth; // Scroll to the correct position
  };

  const slidePrev = () => {
    if (index > 0) {
      index--; // Decrease the index to move to the previous video
    }
    updateSlider();
  };

  const slideNext = () => {
    if (index < videos.length - 1) {
      index++; // Increase the index to move to the next video
    }
    updateSlider();
  };

  // Drag/Swipe functionality for thumb responsiveness
  const startDragging = (e) => {
    isDragging = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = container.scrollLeft;
  };

  const stopDragging = () => {
    isDragging = false;
  };

  const dragSlider = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2; // Multiply by 2 for faster drag response
    container.scrollLeft = scrollLeft - walk;
  };

  // Event listeners for buttons
  prevBtn.addEventListener("click", slidePrev);
  nextBtn.addEventListener("click", slideNext);

  // Event listeners for dragging/swiping
  container.addEventListener("mousedown", startDragging);
  container.addEventListener("mouseleave", stopDragging);
  container.addEventListener("mouseup", stopDragging);
  container.addEventListener("mousemove", dragSlider);

  container.addEventListener("touchstart", startDragging);
  container.addEventListener("touchend", stopDragging);
  container.addEventListener("touchmove", dragSlider);

  // Function to handle screen size and buttons visibility
  const checkScreenSize = () => {
    if (window.innerWidth <= 420) {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    }
  };

  // Check screen size initially
  checkScreenSize();

  // Add event listener to handle screen resize
  window.addEventListener("resize", checkScreenSize);
});
