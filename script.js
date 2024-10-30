// Initial GSAP animations
gsap.to("#overlay-dark", 2, {
  top: "-100%",
  ease: "power3.inOut",
  delay: 4,
});
gsap.from(".divider", 3, {
  scaleX: 0,
  ease: "power3.inOut",
  delay: 1,
  stagger: { amount: 1 },
});
gsap.from(".row > .col", 2, {
  opacity: 0,
  y: 40,
  ease: "power3.inOut",
  delay: 2,
  stagger: { amount: 1.5 },
});
gsap.from(".marquee", 1, {
  bottom: "-5%",
  opacity: 0,
  ease: "power3.inOut",
  delay: 4.5,
});

// Split each link text into individual letters for animation
document.querySelectorAll(".row > .col a").forEach((link) => {
  const text = link.textContent;
  link.innerHTML = ""; // Clear existing text

  // Wrap each letter in a span for individual animations
  text.split("").forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.classList.add("letter");
    link.appendChild(span);
  });

  // GSAP animations for letters on hover
  link.addEventListener("mouseenter", () => {
    gsap.to(link.querySelectorAll(".letter"), {
      scale: 1.3,
      y: -2,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link.querySelectorAll(".letter"), {
      scale: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.in",
    });
  });
});

// Preview images for each daily code challenge link
const previews = {
  DAY_001: "./assets/day1.png",
  DAY_002: "./assets/day2.png",
  DAY_003: "./assets/day3.png",
  DAY_004: "./assets/day4.png",
  DAY_005: "./assets/day5.png",
  DAY_006: "./assets/day6.png",
  DAY_007: "./assets/day7.png",
  DAY_008: "./assets/day8.png",
  DAY_009: "./assets/day9.png",
  DAY_010: "./assets/day10.png",
  DAY_011: "./assets/day11.png",
  DAY_012: "./assets/day12.png",
  DAY_013: "./assets/day13.png",
  DAY_014: "./assets/day14.png",
  DAY_015: "./assets/day15.png",
  DAY_016: "./assets/day16.png",
  DAY_017: "./assets/day17.png",
  DAY_018: "./assets/day18.png",
  DAY_019: "./assets/day19.png",
  DAY_020: "./assets/day20.png",
  DAY_021: "./assets/day21.png",
  DAY_022: "./assets/day22.png",
  DAY_023: "./assets/day23.png",
  DAY_024: "./assets/day24.png",
  DAY_025: "./assets/day25.png",
  DAY_026: "./assets/day26.png",
  DAY_027: "./assets/day27.png",
  DAY_028: "./assets/day28.png",
  DAY_029: "./assets/day29.png",
  DAY_030: "./assets/day30.png",
};

const previewCard = document.getElementById("preview-card");

// Apply hover effects to daily challenge links only
document.querySelectorAll(".row > .col a").forEach((link) => {
  const dayId = link.textContent.trim();

  if (previews[dayId]) {
    link.addEventListener("mouseenter", () => {
      // Set the background image for the preview card
      previewCard.style.backgroundImage = `url(${previews[dayId]})`;

      // Pop and bounce animation when entering a new link
      gsap.fromTo(
        previewCard,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
          overwrite: "auto",
        }
      );
    });

    link.addEventListener("mouseleave", () => {
      // Smoothly shrink and fade out the preview card
      gsap.to(previewCard, {
        scale: 0.9,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    });
  }
});
