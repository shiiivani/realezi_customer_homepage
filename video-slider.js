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

document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".video");

  videoContainers.forEach((videoContainer) => {
    const video = videoContainer.querySelector("video");
    const volumeCont = videoContainer.querySelector(".volume-container");
    const volumeUpIcon = videoContainer.querySelector(".volume-up");
    const volumeOffIcon = videoContainer.querySelector(".volume-off");
    const videoSlider = videoContainer.closest(".video-slider");
    const videoWrapper = videoSlider.querySelector(".video-container");

    videoContainer.addEventListener("mouseover", function () {
      videoWrapper.style.animationPlayState = "paused";
      volumeCont.classList.remove("hidden");
    });

    videoContainer.addEventListener("mouseout", function () {
      videoWrapper.style.animationPlayState = "running";
      volumeCont.classList.add("hidden");
    });

    volumeUpIcon.addEventListener("click", function () {
      video.muted = true;
      volumeUpIcon.classList.add("hidden");
      volumeOffIcon.classList.remove("hidden");
    });

    volumeOffIcon.addEventListener("click", function () {
      video.muted = false;
      volumeOffIcon.classList.add("hidden");
      volumeUpIcon.classList.remove("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".video-slider");

  sliders.forEach((slider) => {
    const container = slider.querySelector(".video-container");
    const videos = slider.querySelectorAll(".video");
    const prevBtn = slider.querySelector(".prev-btn");
    const nextBtn = slider.querySelector(".next-btn");
    let index = 0;
    let startX = 0;
    let isDragging = false;

    const updateSlider = () => {
      container.style.transform = `translateX(-${index * 60}%)`;
    };

    const checkScreenSize = () => {
      if (window.innerWidth <= 420) {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";

        prevBtn.addEventListener("click", slidePrev);
        nextBtn.addEventListener("click", slideNext);
      } else {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";

        prevBtn.removeEventListener("click", slidePrev);
        nextBtn.removeEventListener("click", slideNext);
      }
    };

    const slidePrev = () => {
      if (index > 0) {
        index--;
        updateSlider();
      }
    };

    const slideNext = () => {
      if (index < videos.length - 1) {
        index++;
        updateSlider();
      }
    };

    // Touch event handlers for swiping
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;

      const touchX = e.touches[0].clientX;
      const deltaX = touchX - startX;

      if (deltaX > 50) {
        slidePrev();
        isDragging = false; // Prevents multiple slides in a single swipe
      } else if (deltaX < -50) {
        slideNext();
        isDragging = false;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    // Add touch event listeners to the container
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
  });
});
