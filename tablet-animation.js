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
