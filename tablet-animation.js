document.addEventListener("scroll", function () {
  const containers = document.querySelectorAll(".animated-container");
  const screenBottom = window.innerHeight;

  containers.forEach((container) => {
    const containerPosition = container.getBoundingClientRect().top;

    if (screenBottom - containerPosition >= 250) {
      container.classList.add("animate");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const arrowPair = document.querySelector(".arrow-pair");

  if (arrowPair) {
    // Check if arrowPair exists
    const realeziArrow = arrowPair.querySelector(".realezi-arrow");
    const filledArrow = arrowPair.querySelector(".filled-arrow");

    realeziArrow.addEventListener("click", function () {
      realeziArrow.classList.add("hidden");
      filledArrow.classList.remove("hidden");
    });

    filledArrow.addEventListener("click", function () {
      filledArrow.classList.add("hidden");
      realeziArrow.classList.remove("hidden");
    });
  }
});
