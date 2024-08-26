// Property Type Animations
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
