// Section one Categories
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(
    ".section-one-mobile-view .categories li"
  );
  const navBar = document.querySelector(".section-one-mobile-view .categories");
  let activeItem = document.querySelector(
    ".section-one-mobile-view .categories li.active"
  );
  let slideLine = document.createElement("div");
  let hoverLine = document.createElement("div");

  let mouseX = 0;
  let isCursorInside = false;

  slideLine.classList.add("slide-line");
  navBar.appendChild(slideLine);

  hoverLine.classList.add("hover-line");
  navBar.appendChild(hoverLine);

  gsap.set([slideLine, hoverLine], {
    height: 30,
    position: "absolute",
    bottom: 10,
    borderRadius: "15px",
    zIndex: 1,
    transformOrigin: "left center",
  });

  gsap.set(slideLine, {
    width: activeItem.offsetWidth,
    left: activeItem.offsetLeft,
    backgroundColor: "#111F3C",
  });

  gsap.set(hoverLine, {
    width: 0,
    left: 0,
    backgroundColor: "#F4F4F4",
    zIndex: 0,
  });

  function updateActiveItem(newActiveItem) {
    if (activeItem !== newActiveItem) {
      activeItem.classList.remove("active");
      newActiveItem.classList.add("active");

      const tl = gsap.timeline();

      const activeItemRect = activeItem.getBoundingClientRect();
      const newItemRect = newActiveItem.getBoundingClientRect();
      const direction =
        newItemRect.left < activeItemRect.left ? "left" : "right";

      tl.to(slideLine, {
        duration: 0.3,
        width: newActiveItem.offsetWidth,
        left: newActiveItem.offsetLeft,
        ease: "power2.out",
      })
        .to(
          slideLine,
          {
            duration: 0.1,
            x: direction === "left" ? "-3px" : "+3px",
            ease: "bounce.out",
          },
          "-=0.1"
        )
        .to(slideLine, {
          duration: 0.1,
          x: direction === "left" ? "+3px" : "-3px",
          ease: "bounce.out",
        })
        .to(slideLine, {
          duration: 0.2,
          x: "0px",
          ease: "power2.inOut",
        });

      activeItem = newActiveItem;
    }
  }

  function attractToCursor() {
    if (isCursorInside) {
      const slideLineRect = slideLine.getBoundingClientRect();
      const slideLineCenterX = slideLineRect.left + slideLineRect.width / 2;
      const distanceX = mouseX - slideLineCenterX;
      const distance = Math.abs(distanceX);

      const maxDistance = 100;

      if (distance < maxDistance) {
        const intensity = Math.max(0, 1 - distance / maxDistance);
        gsap.to(slideLine, {
          x: intensity * (distanceX * 0.2),
          duration: 0.1,
          ease: "power2.out",
        });
      }
    }
  }

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    attractToCursor();
  });

  navBar.addEventListener("mouseenter", () => {
    isCursorInside = true;
  });

  navBar.addEventListener("mouseleave", () => {
    isCursorInside = false;
    gsap.to(slideLine, {
      x: "0px",
      duration: 0.2,
      ease: "power2.inOut",
    });
  });

  navItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      gsap.to(hoverLine, {
        width: this.offsetWidth,
        left: this.offsetLeft,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseout", function () {
      gsap.to(hoverLine, {
        width: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    item.addEventListener("click", function () {
      updateActiveItem(this);
    });
  });

  navBar.addEventListener("mouseleave", function () {
    updateActiveItem(activeItem);
  });
});

// Section one typewriter
document.addEventListener("DOMContentLoaded", function () {
  const typewriterElements = document.querySelectorAll("#typewriter-text");
  const sentences = [
    "Real Estate Made Easy",
    "Click.Connect.Close.",
    "Buying Made Easy",
    "Architectural Service Made Easy",
    "Selling Made Easy",
    "Interior Designing Made Easy",
    "Bank Loan Made Easy",
  ];

  // Create an array to track state for each typewriter
  const typewriters = Array.from(typewriterElements).map(() => ({
    sentenceIndex: 0,
    letterIndex: 0,
    currentSentence: sentences[0],
    deleting: false,
  }));

  function typeWriter(index) {
    const element = typewriterElements[index];
    const state = typewriters[index];

    if (state.deleting) {
      if (state.letterIndex > 0) {
        state.letterIndex--;
        element.textContent = state.currentSentence.substring(
          0,
          state.letterIndex
        );
      } else {
        state.deleting = false;
        state.sentenceIndex = (state.sentenceIndex + 1) % sentences.length;
        state.currentSentence = sentences[state.sentenceIndex];
        setTimeout(() => typeWriter(index), 500);
        return;
      }
    } else {
      if (state.letterIndex < state.currentSentence.length) {
        state.letterIndex++;
        element.textContent = state.currentSentence.substring(
          0,
          state.letterIndex
        );
      } else {
        state.deleting = true;
        setTimeout(() => typeWriter(index), 2000);
        return;
      }
    }

    setTimeout(() => typeWriter(index), state.deleting ? 50 : 100);
  }

  // Start typewriter effect for each element
  typewriterElements.forEach((_, index) => {
    typeWriter(index);
  });
});
