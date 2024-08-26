// Property Type Animations
const riveAnimations = {
  residential: new rive.Rive({
    src: "./riv/building.riv",
    canvas: document.getElementById("residential"),
    autoplay: true,
    stateMachines: "State Machine 1",
  }),
  commercial: new rive.Rive({
    src: "./riv/commercial.riv",
    canvas: document.getElementById("commercial"),
    autoplay: true,
    stateMachines: "State Machine 1",
  }),
  plot: new rive.Rive({
    src: "./riv/plot.riv",
    canvas: document.getElementById("plot"),
    autoplay: true,
    stateMachines: "State Machine 1",
  }),
  pg: new rive.Rive({
    src: "./riv/pg.riv",
    canvas: document.getElementById("pg"),
    autoplay: true,
    stateMachines: "State Machine 1",
  }),
  coworkingspace: new rive.Rive({
    src: "./riv/coworkingspace.riv",
    canvas: document.getElementById("coworkingspace"),
    autoplay: true,
    stateMachines: "State Machine 1",
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
new rive.Rive({
  src: "./riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper"),
  autoplay: true,
  stateMachines: "State Machine 1",
});
