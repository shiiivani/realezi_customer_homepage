// Property Type Animations
// Store references to Rive instances
// const riveAnimations = {};

// // Initialize Rive animations
// function initializeRiveAnimations(selector, src, stateMachines) {
//   const elements = document.querySelectorAll(selector);

//   elements.forEach((canvas, index) => {
//     const key = `${selector.replace(".", "")}_${index}`;
//     riveAnimations[key] = new rive.Rive({
//       src: src,
//       canvas: canvas,
//       autoplay: true,
//       stateMachines: stateMachines,
//       onLoad: () => {
//         riveAnimations[key].resizeDrawingSurfaceToCanvas();
//       },
//       onError: (error) => {
//         console.error("Rive animation error:", error);
//       },
//     });
//   });
// }

// function checkScreenSizeAndInitialize() {
//   if (window.innerWidth <= 860) {
//     initializeRiveAnimations(
//       ".residential",
//       "./riv/building.riv",
//       "State Machine 1"
//     );
//     initializeRiveAnimations(
//       ".commercial",
//       "./riv/commercial.riv",
//       "State Machine 1"
//     );
//     initializeRiveAnimations(".plot", "./riv/plot.riv", "State Machine 1");
//     initializeRiveAnimations(".pg", "./riv/pg.riv", "State Machine 1");
//     initializeRiveAnimations(
//       ".coworkingspace",
//       "./riv/coworkingspace.riv",
//       "State Machine 1"
//     );
//   }
// }

// // Initialize animations for different types
// initializeRiveAnimations(
//   ".residential",
//   "./riv/building.riv",
//   "State Machine 1"
// );
// initializeRiveAnimations(
//   ".commercial",
//   "./riv/commercial.riv",
//   "State Machine 1"
// );
// initializeRiveAnimations(".plot", "./riv/plot.riv", "State Machine 1");
// initializeRiveAnimations(".pg", "./riv/pg.riv", "State Machine 1");
// initializeRiveAnimations(
//   ".coworkingspace",
//   "./riv/coworkingspace.riv",
//   "State Machine 1"
// );

// // Handle click events
// function handleClick(clickedKey) {
//   // Loop through and reset all instances to initial state machine
//   for (const key in riveAnimations) {
//     if (riveAnimations.hasOwnProperty(key)) {
//       if (key !== clickedKey) {
//         riveAnimations[key].cleanup();
//         riveAnimations[key] = new rive.Rive({
//           src: riveAnimations[key].src,
//           canvas: riveAnimations[key].canvas,
//           autoplay: true,
//           stateMachines: "State Machine 1",
//         });
//       }
//     }
//   }

//   // Update the clicked instance to use "Timeline 1"
//   riveAnimations[clickedKey].cleanup();
//   riveAnimations[clickedKey] = new rive.Rive({
//     src: riveAnimations[clickedKey].src,
//     canvas: riveAnimations[clickedKey].canvas,
//     autoplay: true,
//     stateMachines: "Timeline 1",
//   });
// }

// // Add event listeners
// function addEventListeners(selector) {
//   const elements = document.querySelectorAll(selector);

//   elements.forEach((element, index) => {
//     const key = `${selector.replace(".", "")}_${index}`;

//     element.addEventListener("click", function () {
//       handleClick(key);
//     });

//     element.addEventListener("touchstart", function (event) {
//       event.preventDefault();
//       handleClick(key);
//     });
//   });
// }

// addEventListeners(".residential");
// addEventListeners(".commercial");
// addEventListeners(".plot");
// addEventListeners(".pg");
// addEventListeners(".coworkingspace");

// Initialize rive animations when clicking on rent button
// function updateAllRiveInstances(selector, src, stateMachine) {
//   const elements = document.querySelectorAll(selector);

//   elements.forEach((canvas, index) => {
//     const key = `${selector.replace(".", "")}_${index}`;

//     if (riveAnimations[key]) {
//       riveAnimations[key].cleanup();
//     }

//     riveAnimations[key] = new rive.Rive({
//       src: src,
//       canvas: canvas,
//       autoplay: true,
//       stateMachines: stateMachine,
//       onLoad: () => {
//         riveAnimations[key].resizeDrawingSurfaceToCanvas();
//       },
//       onError: (error) => {
//         console.error("Rive animation error:", error);
//       },
//     });
//   });
// }

// // Add event listener to the "rent-btn"
// document.getElementById("rent-btn").addEventListener("click", () => {
//   updateAllRiveInstances(".pg", "./riv/pg.riv", "State Machine 1");
//   updateAllRiveInstances(
//     ".coworkingspace",
//     "./riv/coworkingspace.riv",
//     "State Machine 1"
//   );
// });

const riveAnimations = {
  residential: new rive.Rive({
    src: "./riv/building.riv",
    canvas: document.getElementById("residential"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      riveAnimations.residential.resizeDrawingSurfaceToCanvas();
    },
  }),
  commercial: new rive.Rive({
    src: "./riv/commercial.riv",
    canvas: document.getElementById("commercial"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      riveAnimations.commercial.resizeDrawingSurfaceToCanvas();
    },
  }),
  plot: new rive.Rive({
    src: "./riv/plot.riv",
    canvas: document.getElementById("plot"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      riveAnimations.plot.resizeDrawingSurfaceToCanvas();
    },
  }),
  pg: new rive.Rive({
    src: "./riv/pg.riv",
    canvas: document.getElementById("pg"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      riveAnimations.pg.resizeDrawingSurfaceToCanvas();
    },
  }),
  coworkingspace: new rive.Rive({
    src: "./riv/coworkingspace.riv",
    canvas: document.getElementById("coworkingspace"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      riveAnimations.coworkingspace.resizeDrawingSurfaceToCanvas();
    },
  }),
};

function handleClick(clickedKey) {
  for (const key in riveAnimations) {
    if (riveAnimations.hasOwnProperty(key)) {
      riveAnimations[key].cleanup();
      riveAnimations[key] = new rive.Rive({
        src: riveAnimations[key].src,
        canvas: riveAnimations[key].canvas,
        autoplay: true,
        stateMachines: "State Machine 1",
      });
    }
  }

  riveAnimations[clickedKey].cleanup();
  riveAnimations[clickedKey] = new rive.Rive({
    src: riveAnimations[clickedKey].src,
    canvas: riveAnimations[clickedKey].canvas,
    autoplay: true,
    stateMachines: "Timeline 1",
  });
}

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

addEventListeners("residential");
addEventListeners("commercial");
addEventListeners("plot");
addEventListeners("pg");
addEventListeners("coworkingspace");

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
