window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const controller = new ScrollMagic.Controller();

const header = document.getElementById("page-header");

function videoOnScroll(
  sectionName,
  duration,
  triggerHook,
  accelAmount,
  scrollPosition,
  delay,
  scollBypass,
  updateInterval,
  headStatic = undefined
) {
  const intro = document.querySelector("." + sectionName);
  const video = intro.querySelector("video");

  let scene = new ScrollMagic.Scene({
    duration: duration,
    triggerElement: intro,
    triggerHook: triggerHook,
  })
    .setPin(intro)
    .addTo(controller);

  scene.on("update", (e) => {
    scrollPosition = e.scrollPos / 1000 - scollBypass;
  });

  scene.on("enter", (e) => {
    if (headStatic !== undefined) {
      header.classList.remove("mix-blend");
      header.classList.add(`text-${headStatic}`);
    }
  });
  scene.on("leave", (e) => {
    if (headStatic !== undefined) {
      header.classList.add("mix-blend");
      header.classList.remove(`text-${headStatic}`);
      header.classList.add(`text-white`);
    }
  });

  setInterval(() => {
    delay += (scrollPosition - delay) * accelAmount;
    video.currentTime = delay;
  }, updateInterval);
}

function textGsap(
  triggerElementID,
  idName1,
  idName2,
  duration,
  triggerHook,
  text1_action,
  text2_action
) {
  const text1 = document.getElementById(idName1);
  const text2 = document.getElementById(idName2);
  const triggerElem = document.getElementById(triggerElementID);
  var action = gsap
    .timeline()
    .to(text1, text1_action, "-=0.2")
    .to(text2, text2_action, "-=0.2");

  new ScrollMagic.Scene({
    triggerElement: triggerElem,
    duration: duration,
    triggerHook: triggerHook,
  })
    .setTween(action)
    .addTo(controller);
}

function textAnim(
  startTime,
  triggerElementID,
  idName,
  duration,
  triggerHook,
  before,
  after
) {
  const text = document.getElementById(idName);
  const triggerElem = document.getElementById(triggerElementID);
  const textAnim = TweenMax.fromTo(text, startTime, before, after);

  new ScrollMagic.Scene({
    duration: duration,
    triggerElement: triggerElem,
    triggerHook: triggerHook,
  })
    .setTween(textAnim)
    .addTo(controller);
}

function textFadeOutScroll(
  sectionName,
  className,
  startTime,
  duration,
  triggerHook
) {
  const intro = document.querySelector("." + sectionName);
  const text = intro.querySelector(className);
  const textAnim = TweenMax.fromTo(
    text,
    startTime,
    { opacity: 1 },
    { opacity: 0 }
  );

  let scene2 = new ScrollMagic.Scene({
    duration: duration,
    triggerElement: intro,
    triggerHook: triggerHook,
  })
    .setTween(textAnim)
    .addTo(controller);
}

function textFadeInScroll(
  sectionName,
  className,
  startTime,
  duration,
  triggerHook
) {
  const intro = document.querySelector("." + sectionName);
  const text = intro.querySelector(className);
  const textAnim = TweenMax.fromTo(
    text,
    startTime,
    { opacity: 0 },
    { opacity: 1 }
  );

  let scene2 = new ScrollMagic.Scene({
    duration: duration,
    triggerElement: intro,
    triggerHook: triggerHook,
  })
    .setTween(textAnim)
    .addTo(controller);
}

function textZoomInScroll(
  sectionName,
  className,
  startTime,
  duration,
  triggerHook
) {
  const intro = document.querySelector("." + sectionName);
  const text = intro.querySelector("." + className);
  const textAnim = TweenMax.fromTo(
    text,
    startTime,
    {
      autoAlpha: 0,
      scale: 3,
    },
    {
      autoAlpha: 1,
      scale: 1,
    }
  );

  let scene2 = new ScrollMagic.Scene({
    duration: duration,
    triggerElement: intro,
    triggerHook: triggerHook,
  })
    .setTween(textAnim)
    .addTo(controller);
}

function textResize(sectionName, className, startTime, duration, triggerHook) {
  const intro = document.querySelector("." + sectionName);
  const text = intro.querySelector(className);
  const textAnim = TweenMax.fromTo(
    text,
    startTime,
    { opacity: 1, width: "62%", left: "39%" },
    { width: "20%", left: "15%", opacity: 0 }
  );

  let scene2 = new ScrollMagic.Scene({
    duration: duration,
    triggerElement: intro,
    triggerHook: triggerHook,
  })
    .setTween(textAnim)
    .addTo(controller);
}

function textMarquee(
  sectionName,
  className = "",
  idName = "",
  duration,
  triggerHook
) {}

function scrollHandler() {
  videoOnScroll("intro", 5500, 0, 0.3, 0, 0, 1, 80);
  textGsap(
    "second-section",
    "laptop-showcase-section-text1",
    "second-section-text2",
    5500,
    0,
    { duration: 3.5, width: "20%", left: "0%",opacity:0 },
    { duration: 2, left: "0%" }
  );

  videoOnScroll("conference-section", 6000, 0, 0.3, 0, 0, 8, 80, "white");
  textFadeOutScroll("conference-section", "h1", 6, 4000, 0);

  videoOnScroll("competition-section", 6500, 0, 0.3, 0, 0, 14.5, 80);
  textFadeOutScroll("competition-section", "h1", 6, 4000, 0);

  videoOnScroll("swags-section", 2500, 0, 0.3, 0, 0, 22, 80);
  textGsap(
    "fifth-section",
    "fifth-section-text1",
    "fifth-section-text2",
    2000,
    0,
    { duration: 0.8, opacity: 1 },
    { duration: 0.5, opacity: 1 }
  );
  videoOnScroll("awards-section", 3500, 0, 0.3, 0, 0, 25, 80);
  textFadeInScroll("awards-section", "h1", 6, 200, 0);
}
