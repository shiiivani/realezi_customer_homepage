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

// Expanding content of Tablet sectino for mobile view
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtns = document.querySelectorAll(".read-more-btn");
  const shortTexts = document.querySelectorAll(".short-text");

  readMoreBtns.forEach((btn, index) => {
    const shortText = shortTexts[index];

    const fullText = shortText.textContent;
    const shortenedText = fullText.slice(0, 90) + "...";

    shortText.textContent = shortenedText;

    btn.addEventListener("click", function () {
      if (shortText.textContent === shortenedText) {
        shortText.textContent = fullText;
        btn.textContent = "Read less";
      } else {
        shortText.textContent = shortenedText;
        btn.textContent = "Read more";
      }
    });
  });
});
