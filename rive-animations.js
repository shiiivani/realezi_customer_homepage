// Property Type Animations
// Store references to Rive instances
const riveAnimations = {};

// Initialize Rive animations
function initializeRiveAnimations(selector, src, stateMachines) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((canvas, index) => {
    const key = `${selector.replace(".", "")}_${index}`;
    riveAnimations[key] = new rive.Rive({
      src: src,
      canvas: canvas,
      autoplay: true,
      stateMachines: stateMachines,
      onLoad: () => {
        riveAnimations[key].resizeDrawingSurfaceToCanvas();
      },
      onError: (error) => {
        console.error("Rive animation error:", error);
      },
    });
  });
}

function checkScreenSizeAndInitialize() {
  if (window.innerWidth <= 860) {
    initializeRiveAnimations(
      ".residential",
      "./riv/building.riv",
      "State Machine 1"
    );
    initializeRiveAnimations(
      ".commercial",
      "./riv/commercial.riv",
      "State Machine 1"
    );
    initializeRiveAnimations(".plot", "./riv/plot.riv", "State Machine 1");
    initializeRiveAnimations(".pg", "./riv/pg.riv", "State Machine 1");
    initializeRiveAnimations(
      ".coworkingspace",
      "./riv/coworkingspace.riv",
      "State Machine 1"
    );
  }
}

// Initialize animations for different types
initializeRiveAnimations(
  ".residential",
  "./riv/building.riv",
  "State Machine 1"
);
initializeRiveAnimations(
  ".commercial",
  "./riv/commercial.riv",
  "State Machine 1"
);
initializeRiveAnimations(".plot", "./riv/plot.riv", "State Machine 1");
initializeRiveAnimations(".pg", "./riv/pg.riv", "State Machine 1");
initializeRiveAnimations(
  ".coworkingspace",
  "./riv/coworkingspace.riv",
  "State Machine 1"
);

// Handle click events
function handleClick(clickedKey) {
  // Loop through and reset all instances to initial state machine
  for (const key in riveAnimations) {
    if (riveAnimations.hasOwnProperty(key)) {
      if (key !== clickedKey) {
        riveAnimations[key].cleanup();
        riveAnimations[key] = new rive.Rive({
          src: riveAnimations[key].src,
          canvas: riveAnimations[key].canvas,
          autoplay: true,
          stateMachines: "State Machine 1",
        });
      }
    }
  }

  // Update the clicked instance to use "Timeline 1"
  riveAnimations[clickedKey].cleanup();
  riveAnimations[clickedKey] = new rive.Rive({
    src: riveAnimations[clickedKey].src,
    canvas: riveAnimations[clickedKey].canvas,
    autoplay: true,
    stateMachines: "Timeline 1",
  });
}

// Add event listeners
function addEventListeners(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element, index) => {
    const key = `${selector.replace(".", "")}_${index}`;

    element.addEventListener("click", function () {
      handleClick(key);
    });

    element.addEventListener("touchstart", function (event) {
      event.preventDefault();
      handleClick(key);
    });
  });
}

addEventListeners(".residential");
addEventListeners(".commercial");
addEventListeners(".plot");
addEventListeners(".pg");
addEventListeners(".coworkingspace");

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

// Initialize rive animations when clicking on rent button
function updateAllRiveInstances(selector, src, stateMachine) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((canvas, index) => {
    const key = `${selector.replace(".", "")}_${index}`;

    if (riveAnimations[key]) {
      riveAnimations[key].cleanup();
    }

    riveAnimations[key] = new rive.Rive({
      src: src,
      canvas: canvas,
      autoplay: true,
      stateMachines: stateMachine,
      onLoad: () => {
        riveAnimations[key].resizeDrawingSurfaceToCanvas();
      },
      onError: (error) => {
        console.error("Rive animation error:", error);
      },
    });
  });
}

// Add event listener to the "rent-btn"
document.getElementById("rent-btn").addEventListener("click", () => {
  updateAllRiveInstances(".pg", "./riv/pg.riv", "State Machine 1");
  updateAllRiveInstances(
    ".coworkingspace",
    "./riv/coworkingspace.riv",
    "State Machine 1"
  );
});
