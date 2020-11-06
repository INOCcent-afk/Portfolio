import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Preloader
gsap.registerPlugin(ScrollTrigger);

var loader;

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.05);
    }, 50);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.getElementById("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(1);
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#content",
    start: "top  top",
    end: "+=1000",
    scrub: 1,
  },
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#project-jump",
    start: "center center",
    scrub: false,
  },
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-section-header-title",
    start: "center center",
  },
});

tl.to(".firstTextAni", 2, {
  x: 200,
})
  .to(
    ".secondTextAni",
    2,
    {
      x: -200,
    },
    "-=2"
  )
  .to(
    ".intro-section-bg",
    2,
    {
      y: -130,
    },
    "-=2"
  );

tl2
  .to(".project-section-header-title", 2, {
    y: -10,
    opacity: 1,
  })
  .to(
    ".project-section-header-sticker",
    2,
    {
      y: -10,
      opacity: 1,
    },
    "-=2"
  );

tl3.to(".project", 3, {
  opacity: 1,
  stagger: 0.2,
});
