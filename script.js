function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

loco();

var heroTl = gsap.timeline({});

heroTl.to(".localTrain", {
  right: "0%",
  duration: 2,
});

heroTl.to(".vidyavihar", {
  right: "0%",
  duration: 1,
  scale: 1,
});

heroTl.to("#girl", {
  scale: 0.7,
});

var oneTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".one",
    start: "50% center",
    end: "70% center",
    scrub: true,
    // markers: true,
  },
});

oneTl.to("#girl", {
  top: "53%",
  right: "27%",
});

gsap.from(".one h3", {
  y: 100,
  opacity: 0,
  stagger: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".one h3",
    start: "top 90%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
});

var twoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% center",
    end: "60% center",
    scrub: true,
    // markers: true,
  },
});

twoTl.to("#girl", {
  top: "123%",
  left: "37%",
  scale: 1.2,
});

gsap.from(".companyLogo", {
  x: -100,
  opacity: 0,
  stagger: 1,
  duration: 1,
  rotate: "0deg",
  scrollTrigger: {
    trigger: ".companyLogo",
    start: "top 30%",
    end: "bottom 90%",
    scrub: 1,
    // markers: true,
  },
});

gsap.from(".clock", {
  x: 200,
  opacity: 0,
  stagger: 1,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".clock",
    start: "top 35%",
    end: "bottom 90%",
    scrub: 1,
    // markers: true,
  },
});

gsap.from(".smit", {
  x: 200,
  opacity: 0,
  stagger: 1,
  duration: 5,
  scrollTrigger: {
    trigger: ".smit",
    start: "top 40%",
    end: "bottom 90%",
    scrub: 1,
    // markers: true,
  },
});

gsap.from(".two h3", {
  y: 60,
  opacity: 0,
  stagger: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".two h3",
    start: "top 50%",
    end: "top 80%",
    scrub: 1,
    // markers: true,
  },
});
var threeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "-20% center",
    end: "60% center",
    scrub: true,
    // markers: true,
  },
});

threeTl.to("#girl", {
  top: "223%",
  left: "30%",
  scale: 1.2,
});

gsap.from(".three h3", {
  x: 100,
  opacity: 0,
  stagger: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".three h3",
    start: "top 50%",
    end: "top 80%",
    scrub: 1,
    // markers: true,
  },
});

var fourTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".four",
    start: "-20% center",
    end: "10% center",
    scrub: true,
    // markers: true,
  },
});

fourTl.to("#girl", {
  top: "300%",
  left: "15%",
  scale: 1.2,
});
gsap.from(".kin", {
  x: 100,
  opacity: 0,
  stagger: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".four .kin",
    start: "top 50%",
    end: "top 80%",
    scrub: 1,
    // markers: true,
  },
});
gsap.from(".kinjal", {
  x: 100,
  opacity: 0,
  stagger: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".four .kin",
    start: "top 40%",
    end: "top 80%",
    scrub: 1,
    // markers: true,
  },
});
gsap.from(".shr", {
  x: 100,
  opacity: 0,
  stagger: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".four .kin",
    start: "top 35%",
    end: "top 80%",
    scrub: 1,
    // markers: true,
  },
});

var fiveTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".five",
    start: "-50% center",
    end: "0% center",
    scrub: true,
    // markers: true,
  },
});

fiveTl.to("#girl", {
  top: "370%",
  left: "45%",
});
gsap.from(".golu", {
  x: 100,
  opacity: 0,
  stagger: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".five .golu",
    start: "top 50%",
    end: "top 80%",
    scrub: 1,
    // markers: true,
  },
});
gsap.from(".five h3", {
  x: 100,
  opacity: 0,
  stagger: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".five h3",
    start: "top 40%",
    end: "top 80%",
    scrub: 1,
    // markers: true,
  },
});

gsap.from(".six .box1,.six .box2,.six .box3,.six .box4", {
  scrollTrigger: {
    trigger: ".six ",
    start: "top 40%",
    end: "bottom 90%",
    scrub: 1,
    // markers: true,
  },
  y: 100,
  opacity: 0,
  delay: 1,
  stagger: 0.6,
  duration: 1,
});

// gsap.from(".finalImg", {
//   scrollTrigger: {
//     trigger: ".finalImg ",
//     start: "-40% 20%",
//     end: "60% 90%",
//     scrub: 1,
//     markers: true,
//     pin: true,
//   },
//   scale: 1,
//   y: 100,
//   opacity: 0,
//   delay: 1,
//   stagger: 0.6,
//   duration: 1,
// });

gsap.from(".names h2", {
  scrollTrigger: {
    trigger: ".names ",
    start: "top 40%",
    end: "bottom 90%",
    // scrub: 1,
    // markers: true,
  },
  y: -30,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  stagger: 0.5,
});
