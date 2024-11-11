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
