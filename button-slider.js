document.addEventListener("scroll", function () {
  const section = document.querySelector(".section-seven");
  const container = section.querySelector(".section-seven-inner");
  const scrollers = document.querySelectorAll(".text-scroller");

  const sectionBottom = section.getBoundingClientRect().bottom + window.scrollY;
  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const scrollPosition = window.scrollY + window.innerHeight;
  const lastScroller = scrollers[scrollers.length - 1];

  // Calculate the index of the current scroller
  const scrollerHeight = scrollers[0].offsetHeight;
  const scrollOffset = scrollPosition - sectionBottom;
  const index = Math.floor(scrollOffset / scrollerHeight);

  // Handling scrolling down
  if (scrollPosition > sectionBottom) {
    container.classList.add("fixed");

    if (index < scrollers.length) {
      scrollers.forEach((scroller, i) => {
        if (i < index) {
          scroller.classList.add("exit");
          scroller.classList.remove("active");
        } else if (i === index) {
          scroller.classList.add("active");
          scroller.classList.remove("exit");
        } else {
          scroller.classList.remove("active", "exit");
        }
      });
    } else {
      // Start fading out after the last scroller gets the active class
      //   if (lastScroller.classList.contains("active")) {
      //     const fadeScrollOffset =
      //       scrollOffset - scrollers.length * scrollerHeight;
      //     const maxFadeScroll = window.innerHeight;
      //     const opacity = Math.max(1 - fadeScrollOffset / maxFadeScroll, 0);
      //     container.style.opacity = opacity;

      //     if (opacity <= 0.2) {
      //       container.classList.remove("fixed");
      //     }
      container.classList.remove("fixed");
      //   }
    }
  } else {
    // Reset when scrolling up
    container.classList.remove("fixed");
    // document.body.classList.remove("no-scroll");
    container.style.opacity = 1;
    scrollers.forEach((scroller) => {
      scroller.classList.remove("active", "exit");
    });
  }
});
