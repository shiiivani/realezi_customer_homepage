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
  const videoContainers = document.querySelectorAll("video");

  videoContainers.forEach((videoContainer) => {
    const videoWrapper = videoContainer
      .closest(".video-slider")
      .querySelector(".video-container");
    videoWrapper.style.animationPlayState = "paused";
  });

  function isInViewportCenter(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const middlePoint = windowHeight / 2;

    return rect.top <= middlePoint && rect.bottom >= middlePoint;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const videoContainer = entry.target;
        const videoWrapper = videoContainer
          .closest(".video-slider")
          .querySelector(".video-container");

        if (entry.isIntersecting || isInViewportCenter(videoContainer)) {
          videoWrapper.style.animationPlayState = "running";
        } else {
          videoWrapper.style.animationPlayState = "paused";
        }
      });
    },
    {
      threshold: [0.1, 0.25, 0.5, 0.75],
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
    });

    videoContainer.addEventListener("mouseout", function () {
      videoWrapper.style.animationPlayState = "running";
    });

    volumeUpIcon.addEventListener("click", function () {
      video.muted = true;
      volumeUpIcon.classList.add("hidden");
    });

    volumeOffIcon.addEventListener("click", function () {
      video.muted = false;
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

  const updateSlider = () => {
    const videoWidth = videos[0].clientWidth;
    container.style.scrollBehavior = "smooth";
    container.scrollLeft = index * videoWidth;
  };

  const slidePrev = () => {
    if (index > 0) {
      index--;
    }
    updateSlider();
  };

  const slideNext = () => {
    if (index < videos.length - 1) {
      index++;
    }
    updateSlider();
  };

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
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  };

  prevBtn.addEventListener("click", slidePrev);
  nextBtn.addEventListener("click", slideNext);

  container.addEventListener("mousedown", startDragging);
  container.addEventListener("mouseleave", stopDragging);
  container.addEventListener("mouseup", stopDragging);
  container.addEventListener("mousemove", dragSlider);

  container.addEventListener("touchstart", startDragging);
  container.addEventListener("touchend", stopDragging);
  container.addEventListener("touchmove", dragSlider);

  const checkScreenSize = () => {
    if (window.innerWidth <= 420) {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    }
  };

  checkScreenSize();

  window.addEventListener("resize", checkScreenSize);
});
