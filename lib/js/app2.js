const controller = new ScrollMagic.Controller();

function videoOnScroll(
  sectionName,
  duration,
  triggerHook,
  accelAmount,
  scrollPosition,
  delay,
  scollBypass,
  updateInterval
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

  setInterval(() => {
    delay += (scrollPosition - delay) * accelAmount;
    video.currentTime = delay;
  }, updateInterval);
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

videoOnScroll("intro6", 10000, 0, 0.3, 0, 0, 0, 80);
videoOnScroll("intro", 5500, 0, 0.3, 0, 0, 10, 80);
textFadeOutScroll("intro", "h1", 3, 1500, 0);
textFadeInScroll("intro", "h2", 2, 2000, 0);

videoOnScroll("intro5", 4000, 0, 0.3, 0, 0, 16, 80);
textFadeInScroll("intro5", "h1", 6, 200, 0);

videoOnScroll("intro4", 2000, 0, 0.3, 0, 0, 20, 80);
textFadeInScroll("intro4", "h1", 6, 4000, 0);

videoOnScroll("intro2", 2500, 0, 0.3, 0, 0, 24, 80);
textFadeInScroll("intro2", "h1", 10, 200, 0);
textZoomInScroll("intro2", "option1", 10, 1000, 0);

videoOnScroll("intro3", 4000, 0, 0.3, 0, 0, 26, 80);
textFadeInScroll("intro3", "h1", 6, 200, 0);
