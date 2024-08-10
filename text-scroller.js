// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Create a GSAP timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-seven",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true, // Pin the section in place
  },
});

// Add the text scroller animation to the timeline
tl.fromTo(
  ".text-scroller",
  { yPercent: 110, opacity: 0 },
  {
    yPercent: -125,
    opacity: 1,
    ease: "none",
    stagger: 0.5, // Adjust for timing between texts
  }
);

// Add the section opacity change to the timeline
tl.to(
  ".section-seven-inner",
  {
    opacity: 0,
    ease: "none",
    duration: 5, // Increase duration for a slower opacity transition
  },
  "-=1" // Adjust overlap timing to ensure smooth transition
);
