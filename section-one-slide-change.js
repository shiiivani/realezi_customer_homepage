// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(".section-one-slider .slide");
// const bottomText = document.getElementById("section-bottom-text");
// const bottomCont = document.querySelector(".section-one-bottom-outer");

// // Array of texts for each slide
// const slideTexts = [
// "Revolutionize your real estate experience with seamless, tech-driven solutions by Realezi. From first-time buyers to professional sellers, we make your journey from click to close effortless.",
//   "We design your dream home! From initial planning to designing and final touches, we build a perfect home just as you like it.",
//   "Be it residential or non-residential. Enjoy our end-to-end expert design solutions to transform and enhance your space tailored to your style.",
//   "Leave the complexities of home financing behind. With us by your side, from home loan application to the disbursement process, you can secure the right loan at low interest rates.",
//   "Anyone can do this job but not everyone can be us. We are your partners in all things legal- from due diligence, to lease agreements and much more. ",
//   "Harness the Sun for sustainability. Go green with us with the best rooftop solar systems at the best prices.",
//   "Let us take care of the heavy lifting (literally!). Relocating is made easy with our guarantee of safe delivery.",
// ];

//   let currentIndex = -1;

//   // Function to change the paragraph content based on the current slide
//   function updateBottomText(index) {
//     bottomText.innerHTML = slideTexts[index];

//     // Add slide-up animation
//     bottomCont.style.animation = "slideUp 0.5s ease-in-out";

//     // Remove animation after it's finished
//     setTimeout(() => {
//       bottomCont.style.animation = "";
//     }, 500);
//   }

//   // Function to handle slide changes
//   function handleSlideChange(newIndex) {
//     console.log(newIndex);
//     if (newIndex !== currentIndex) {
//       currentIndex = newIndex;

//       // Update the bottom text content when slide changes
//       updateBottomText(currentIndex);
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
//         { threshold: 0.4 } // Trigger when 20% of the slide is visible
//       );

//       slides.forEach((slide) => {
//         slideObserver.observe(slide);
//       });
//     }
//   }

//   // Initialize the slide observer
//   initSlideObserver();

//   // Initial content update for the first slide
//   handleSlideChange(0);
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(".slide");
//   const slideContainer = document.querySelector(".slide-container");
//   const bottomText = document.getElementById("section-bottom-text");
//   const bottomCont = document.querySelector(".section-one-bottom-outer");

//   let currentSlide = 0;
//   let isScrolling = false;
//   slides[currentSlide].classList.add("active");

//   const changeSlide = (direction) => {
//     if (isScrolling) return;
//     isScrolling = true;

//     if (direction === "up") {
//       slides[currentSlide].classList.add("exit-up");
//     } else {
//       slides[currentSlide].classList.add("exit-down");
//     }
//     if (currentSlide < 0 || currentSlide >= slideTexts.length) return;
//     bottomText.innerHTML = slideTexts[currentSlide];

//     bottomCont.style.animation = "slideUp 0.5s ease-in-out";

//     setTimeout(() => {
//       bottomCont.style.animation = "";
//     }, 500);

//     setTimeout(() => {
//       slides.forEach((slide) =>
//         slide.classList.remove("active", "exit-up", "exit-down")
//       );

//       if (direction === "up") {
//         currentSlide--;
//         if (currentSlide < 0) currentSlide = 0;
//       } else {
//         currentSlide++;
//         if (currentSlide >= slides.length) currentSlide = slides.length - 1;
//       }
//       slides[currentSlide].classList.add("active");
//       isScrolling = false;
//     }, 500);
//   };

//   const isInSlideSection = () => {
//     const slideRect = slideContainer.getBoundingClientRect();
//     return slideRect.top >= 0 && slideRect.bottom <= window.innerHeight;
//   };

//   let scrollTimeout = null;
//   window.addEventListener("wheel", (e) => {
//     if (scrollTimeout) clearTimeout(scrollTimeout);

//     scrollTimeout = setTimeout(() => {
//       if (isInSlideSection()) {
//         if (e.deltaY > 0) {
//           changeSlide("down");
//         } else {
//           changeSlide("up");
//         }
//       }
//     }, 150);
//   });
// });

//

// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(".slide");
//   const slideContainer = document.querySelector(".section-one-slider");
//   const bottomText = document.getElementById("section-bottom-text");
//   const bottomCont = document.querySelector(".section-one-bottom-outer");

//   let currentSlide = 0;
//   let isScrolling = false;
//   slides[currentSlide].classList.add("active");
//   console.log(currentSlide);

//   // Function to change the slide based on direction
//   const changeSlide = (direction) => {
//     if (isScrolling) return;
//     isScrolling = true;

//     // Determine exit direction
//     if (direction === "up") {
//       slides[currentSlide].classList.add("exit-up");
//     } else {
//       slides[currentSlide].classList.add("exit-down");
//     }

//     setTimeout(() => {
//       // Remove active and exit classes from all slides
//       slides.forEach((slide) =>
//         slide.classList.remove("active", "exit-up", "exit-down")
//       );

//       // Update the current slide index based on direction
//       if (direction === "up") {
//         currentSlide--;
//         if (currentSlide < 0) currentSlide = 0;
//       } else {
//         currentSlide++;
//         if (currentSlide >= slides.length) currentSlide = slides.length - 1;
//       }

//       // Set the active class on the new slide
//       slides[currentSlide].classList.add("active");

//       // Update the bottom text after slide change
//       bottomText.innerHTML = slideTexts[currentSlide];

//       // Handle bottom text animation
//       bottomCont.style.animation = "slideUp 0.5s ease-in-out";
//       setTimeout(() => {
//         bottomCont.style.animation = "";
//       }, 500);

//       isScrolling = false;
//     }, 500);

//     console.log(currentSlide);
//   };

//   // Function to handle the slide change based on scroll direction
//   const handleSlideChange = (e) => {
//     if (isScrolling) return; // Prevent change if already scrolling

//     if (isInSlideSection()) {
//       if (!canScrollToNextSection()) {
//         e.preventDefault(); // Prevent scrolling to the next section

//         if (e.deltaY > 0) {
//           changeSlide("down");
//         } else {
//           changeSlide("up");
//         }
//       }
//     }
//   };

//   // Check if the slide section is in the viewport
//   const isInSlideSection = () => {
//     const slideRect = slideContainer.getBoundingClientRect();
//     return slideRect.top >= 0 && slideRect.bottom <= window.innerHeight;
//   };

//   // Allow scrolling to the next section only if the last slide is active
//   const canScrollToNextSection = () => {
//     return currentSlide === slides.length - 1;
//   };

//   // Listen to the wheel event to detect scroll and trigger slide change
//   let scrollTimeout = null;
//   window.addEventListener("wheel", (e) => {
//     if (scrollTimeout) clearTimeout(scrollTimeout);

//     scrollTimeout = setTimeout(() => {
//       handleSlideChange(e);
//     }, 150);
//   });
// });
