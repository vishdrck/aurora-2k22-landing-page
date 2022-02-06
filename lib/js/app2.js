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
  head = false,
  headStatic = undefined
) {
  const intro = document.querySelector("." + sectionName);
  const video = intro.querySelector("video");

  let scene = new ScrollMagic.Scene({
    duration: duration,
    triggerElement: intro,
    triggerHook: triggerHook,
  })
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

  scene.on("update", (e) => {
    scrollPosition = e.scrollPos / 1000 - scollBypass;
  });

  scene.on("enter", (e) => {
    if (head) {
      header.classList.add("sticky");
      header.classList.add("text-white");
      header.classList.remove("text-black");
    }
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
    // .addIndicators()
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

window.onscroll = function () {
  removeStickyHeader();
};
var sticky = header.offsetTop;

function removeStickyHeader() {
  if (window.pageYOffset < sticky) {
    header.classList.remove("sticky");
    header.classList.remove("text-white");
    header.classList.add("text-black");
  }
}

// videoOnScroll("intro6", 10000, 0, 0.3, 0, 0, 0, 80);
// videoOnScroll("intro", 5500, 0, 0.3, 0, 0, 10, 80);
// textFadeOutScroll("intro", "h1", 3, 1500, 0);
// textFadeInScroll("intro", "h2", 2, 2000, 0);

// videoOnScroll("intro5", 4000, 0, 0.3, 0, 0, 16, 80);
// textFadeInScroll("intro5", "h1", 6, 200, 0);

// videoOnScroll("intro4", 2000, 0, 0.3, 0, 0, 20, 80);
// textFadeInScroll("intro4", "h1", 6, 4000, 0);

// videoOnScroll("intro2", 2500, 0, 0.3, 0, 0, 24, 80);
// textFadeInScroll("intro2", "h1", 10, 200, 0);
// textZoomInScroll("intro2", "option1", 10, 1000, 0);

// videoOnScroll("intro3", 4000, 0, 0.3, 0, 0, 26, 80);
// textFadeInScroll("intro3", "h1", 6, 200, 0);

videoOnScroll("intro", 5500, 0, 0.3, 0, 0, 0, 80, true);
// textResize("intro", "h1", 2000, 3000, 0);
// textAnim(2,"second-section","second-section-text1",3000,0,{ opacity: 1,width: '62%',left: '39%' }, { width:'20%',left: '15%',opacity: 0 });

textGsap(
  "second-section",
  "second-section-text1",
  "second-section-text2",
  5500,
  0,
  { duration: 1, width: "20%", left: "15%", opacity: 0 },
  { duration: 2, left: "5%" }
);
// textAnim(4, "second-section", "second-section-text2", 6000, 0, { left: '100%', delay: 5 }, { left: '-100%' });
// textAnim(4, "second-section", "second-section-text3", 6000, 0, { left: '0%',delay: 5 }, { left: '100%' });
// textFadeInScroll("intro", "h2", 2, 2000, 0);

// sectionFadeOut
// sectionFateIn

videoOnScroll("intro5", 4000, 0, 0.3, 0, 0, 6, 80, false, "white");

// textFadeInScroll("intro5", "h1", 6, 200, 0);

videoOnScroll("intro4", 2000, 0, 0.3, 0, 0, 10, 80);
// textFadeInScroll("intro4", "h1", 6, 4000, 0);

videoOnScroll("intro2", 2500, 0, 0.3, 0, 0, 14, 80);
// textFadeInScroll("intro2", "h1", 10, 200, 0);
// textZoomInScroll("intro2", "option1", 10, 1000, 0);

videoOnScroll("intro3", 4000, 0, 0.3, 0, 0, 16, 80);
// textFadeInScroll("intro3", "h1", 6, 200, 0);
