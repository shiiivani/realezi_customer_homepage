const riveAnimation = new rive.Rive({
  src: "./riv/building.riv",
  canvas: document.getElementById("residential"),
  autoplay: true,
  stateMachines: "State Machine 1",
});

new rive.Rive({
  src: "./riv/commercial.riv",
  canvas: document.getElementById("commercial"),
  autoplay: true,
  stateMachines: "State Machine 1",
});

new rive.Rive({
  src: "./riv/plot.riv",
  canvas: document.getElementById("plot"),
  autoplay: true,
  stateMachines: "State Machine 1",
});

new rive.Rive({
  src: "./riv/pg.riv",
  canvas: document.getElementById("pg"),
  autoplay: true,
  stateMachines: "State Machine 1",
});

new rive.Rive({
  src: "./riv/coworkingspace.riv",
  canvas: document.getElementById("coworkingspace"),
  autoplay: true,
  stateMachines: "State Machine 1",
});

new rive.Rive({
  src: "./riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper"),
  autoplay: true,
  stateMachines: "State Machine 1",
});
