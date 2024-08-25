// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Create a GSAP timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-seven",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
});

// Add the text scroller animation to the timeline
tl.fromTo(
  ".text-scroller",
  { yPercent: 110, opacity: 0 },
  {
    yPercent: -190,
    opacity: 1,
    ease: "none",
    duration: 120,
    stagger: 80,
  }
);

// Add the section opacity change to the timeline
tl.to(
  ".section-seven-inner",
  {
    opacity: 0,
    ease: "none",
    duration: 5,
  },
  "-=1"
);
