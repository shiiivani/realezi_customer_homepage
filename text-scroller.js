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

tl.fromTo(
  ".text-scroller",
  { yPercent: 110, opacity: 1 },
  {
    yPercent: -190,
    opacity: 1,
    ease: "none",
    duration: 120,
    stagger: 80,
  }
);

tl.to(
  ".section-seven-inner",
  {
    opacity: 0,
    ease: "none",
    duration: 5,
  },
  "-=5"
);
tl.fromTo(
  ".section-seven h3",
  {
    opacity: 1,
    yPercent: 100,
  },
  {
    opacity: 1,
    yPercent: 0,
    ease: "none",
    duration: 2,
  },
  "-=5"
);

tl.to(
  ".section-seven h3",
  {
    yPercent: -300,
    ease: "none",
    duration: 30,
  },
  "+=5"
);

tl.to(".section-seven", {
  scrollTrigger: {
    trigger: ".section-seven",
    start: "bottom top",
    pin: false,
  },
});
