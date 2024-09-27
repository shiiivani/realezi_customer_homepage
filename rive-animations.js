const riveAnimations = {};

// Function to initialize Rive animation
function loadRiveAnimation(
  key,
  src,
  canvasId,
  stateMachine = "State Machine 1"
) {
  return new rive.Rive({
    src: src,
    canvas: document.getElementById(canvasId),
    autoplay: true,
    stateMachines: stateMachine,
    onLoad: () => {
      riveAnimations[key].resizeDrawingSurfaceToCanvas();
    },
  });
}

// Function to clean up and reload animations on click
function handleClick(clickedKey) {
  for (const key in riveAnimations) {
    if (riveAnimations.hasOwnProperty(key)) {
      riveAnimations[key].cleanup();
      riveAnimations[key] = loadRiveAnimation(
        key,
        riveConfigs[key].src,
        riveConfigs[key].id,
        "State Machine 1"
      );
    }
  }

  riveAnimations[clickedKey].cleanup();
  riveAnimations[clickedKey] = loadRiveAnimation(
    clickedKey,
    riveConfigs[clickedKey].src,
    riveConfigs[clickedKey].id,
    "Timeline 1"
  );
}

// Add event listeners to each element for click and touchstart
function addEventListeners(elementId) {
  const element = document.getElementById(elementId);

  element.addEventListener("click", function () {
    handleClick(elementId);
  });

  element.addEventListener("touchstart", function (event) {
    event.preventDefault();
    handleClick(elementId);
  });
}

// List of canvas elements and corresponding Rive animation files
const riveConfigs = {
  residential: { id: "residential", src: "./riv/building.riv" },
  commercial: { id: "commercial", src: "./riv/commercial.riv" },
  plot: { id: "plot", src: "./riv/plot.riv" },
  pg: { id: "pg", src: "./riv/pg.riv" },
  coworkingspace: { id: "coworkingspace", src: "./riv/coworkingspace.riv" },
};

// Create an Intersection Observer to defer loading of animations
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const canvasId = entry.target.id;
        const config = riveConfigs[canvasId];

        if (config && !riveAnimations[canvasId]) {
          // Load the Rive animation when the element becomes visible
          riveAnimations[canvasId] = loadRiveAnimation(
            canvasId,
            config.src,
            config.id
          );

          // Add event listeners to handle click events
          addEventListeners(canvasId);

          // Stop observing once the animation has been loaded
          observer.unobserve(entry.target);
        }
      }
    });
  },
  {
    root: null, // Viewport is the root
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is visible
  }
);

// Observe each canvas element
Object.values(riveConfigs).forEach((config) => {
  const canvasElement = document.getElementById(config.id);
  if (canvasElement) {
    observer.observe(canvasElement);
  }
});

document.getElementById("rent-btn").addEventListener("click", () => {
  riveAnimations.pg.cleanup();
  riveAnimations.pg = new rive.Rive({
    src: "./riv/pg.riv",
    canvas: document.getElementById("pg"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      riveAnimations.pg.resizeDrawingSurfaceToCanvas();
    },
  });

  riveAnimations.coworkingspace.cleanup();
  riveAnimations.coworkingspace = new rive.Rive({
    src: "./riv/coworkingspace.riv",
    canvas: document.getElementById("coworkingspace"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      riveAnimations.coworkingspace.resizeDrawingSurfaceToCanvas();
    },
  });
});

// Party Popper Animation
const partyPopper = new rive.Rive({
  src: "./riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    partyPopper.resizeDrawingSurfaceToCanvas();
  },
});

const partyPopper2 = new rive.Rive({
  src: "./riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper2"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    partyPopper.resizeDrawingSurfaceToCanvas();
  },
});
