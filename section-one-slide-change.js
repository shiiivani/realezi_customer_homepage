document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".section-one-slider .slide");
  const bottomText = document.getElementById("section-bottom-text");
  const bottomCont = document.querySelector(".section-one-bottom-outer");

  // Array of texts for each slide
  const slideTexts = [
    "Revolutionize your real estate experience with seamless, tech-driven solutions by Realezi. From first-time buyers to professional sellers, we make your journey from click to close effortless.",
    "We design your dream home! From initial planning to designing and final touches, we build a perfect home just as you like it.",
    "Be it residential or non-residential. Enjoy our end-to-end expert design solutions to transform and enhance your space tailored to your style.",
    "Leave the complexities of home financing behind. With us by your side, from home loan application to the disbursement process, you can secure the right loan at low interest rates.",
    "Anyone can do this job but not everyone can be us. We are your partners in all things legal- from due diligence, to lease agreements and much more. ",
    "Harness the Sun for sustainability. Go green with us with the best rooftop solar systems at the best prices.",
    "Let us take care of the heavy lifting (literally!). Relocating is made easy with our guarantee of safe delivery.",
  ];

  let currentIndex = -1;

  // Function to change the paragraph content based on the current slide
  function updateBottomText(index) {
    bottomText.innerHTML = slideTexts[index];

    // Add slide-up animation
    bottomCont.style.animation = "slideUp 0.5s ease-in-out";

    // Remove animation after it's finished
    setTimeout(() => {
      bottomCont.style.animation = "";
    }, 500);
  }

  // Function to handle slide changes
  function handleSlideChange(newIndex) {
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;

      // Update the bottom text content when slide changes
      updateBottomText(currentIndex);
    }
  }

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
        { threshold: 0.4 } // Trigger when 20% of the slide is visible
      );

      slides.forEach((slide) => {
        slideObserver.observe(slide);
      });
    }
  }

  // Initialize the slide observer
  initSlideObserver();

  // Initial content update for the first slide
  handleSlideChange(0);
});
