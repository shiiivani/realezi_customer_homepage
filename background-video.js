document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("background-video");
  const slides = document.querySelectorAll(".section-one-slider .slide");
  const slider = document.querySelector(".section-one-slider");

  const videos = [
    {
      src: "./videos/business-intro.mov",
      loop: false,
      startTime: 0,
      endTime: 2,
    },
    { src: "./videos/main.mp4", loop: false, startTime: 0, endTime: 1 },
    { src: "./videos/main(1).mp4", loop: true, startTime: 0, endTime: 1 },
    { src: "./videos/main~2.mp4", loop: false, startTime: 0, endTime: 4 },
    { src: "./videos/main~2(2).mp4", loop: true, startTime: 0, endTime: 2 },
    { src: "./videos/main~3.mp4", loop: false, startTime: 0, endTime: 4 },
    { src: "./videos/main~3(3).mp4", loop: true, startTime: 0, endTime: 3 },
    { src: "./videos/main~8.mp4", loop: false, startTime: 0, endTime: 3 },
  ];

  let currentIndex = -1;
  let videoState = {
    isPlaying: false,
    currentTime: 0,
    videoSrc: "",
  };

  function playVideo(videoData) {
    video.src = videoData.src;
    video.currentTime = videoData.startTime;
    video.loop = videoData.loop;
    video.play();

    // if (!videoData.loop) {
    //   video.addEventListener("timeupdate", function onTimeUpdate() {
    //     if (video.currentTime >= videoData.endTime) {
    //       console.log("videoCurrentTime", video.currentTime);
    //       console.log("videoDataEndTime", videoData.endTime);
    //       video.pause();
    //       video.removeEventListener("timeupdate", onTimeUpdate);
    //       videoState.isPlaying = false;
    //     }
    //   });
    // } else {
    //   videoState.isPlaying = true;
    // }
  }

  function stopVideo() {
    video.pause();
    video.src = "";
    videoState.isPlaying = false;
  }

  function handleSlideChange(newIndex) {
    if (newIndex !== currentIndex) {
      if (currentIndex >= 0) {
        // Stop the previous video based on the index
        stopVideo();
      }

      // Update the current index
      currentIndex = newIndex;

      if (newIndex === 0) {
        playVideo(videos[0]);
      } else if (newIndex === 1) {
        playVideo(videos[1]);
        setTimeout(() => {
          playVideo(videos[2]);
        }, 1100);
      } else if (newIndex === 2) {
        playVideo(videos[3]);
        setTimeout(() => {
          playVideo(videos[4]);
        }, 3000);
      } else if (newIndex === 3) {
        playVideo(videos[5]);
        setTimeout(() => {
          playVideo(videos[6]);
        }, 3000);
      } else if (newIndex === 4) {
        playVideo(videos[7]);
      }
    }
  }

  function checkSlideVisibility() {
    const sliderRect = slider.getBoundingClientRect();

    slides.forEach((slide, index) => {
      const h1 = slide.querySelector("h1");
      const h1Rect = h1.getBoundingClientRect();

      // Check if the h1 is within 20px of the bottom of the slider
      if (
        h1Rect.bottom > sliderRect.bottom - 420 &&
        h1Rect.top < sliderRect.bottom
      ) {
        handleSlideChange(index);
      }
    });
  }

  slider.addEventListener("scroll", checkSlideVisibility);
  window.addEventListener("resize", checkSlideVisibility);
  window.addEventListener("scroll", checkSlideVisibility);

  // Initial playback of intro video
  playVideo(videos[0]);
});
