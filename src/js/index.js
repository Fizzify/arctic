import "../scss/index.scss";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".hero",
  {
    y: -40,
    duration: 1,
    opacity: 0,
  },
  {
    y: 0,
    duration: 1,
    opacity: 1,
  }
);

gsap.fromTo(
  ".hero__btn",
  {
    y: -40,
    duration: 3,
    stagger: 0.1,
  },
  {
    y: 0,
    duration: 3,
    stagger: 0.1,
  },
  "-=-2"
);

gsap.fromTo(
  ".nav__btn",
  {
    y: -40,
    duration: 1,
  },
  {
    y: 0,
    duration: 1,
  },
  "-=-0.2"
);

gsap.from(".information__item", {
  scrollTrigger: {
    trigger: ".information__item",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});

gsap.from(".information__item__img", {
  scrollTrigger: {
    trigger: ".information__item__text",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 0.4,
  stagger: -1,
});
