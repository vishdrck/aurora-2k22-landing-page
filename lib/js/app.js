// Victorious champs of the rival competitions.

// Ambitious technical crew fit for reach to the next level.

// A Conference consists of top experts in the industry.

// To be industrialized over tradition

// Swags are ready to be yours!
// Keyboards and Mouses
// Pen Drives
// Swag Bag
// Bottle
// Mug



const intro = document.querySelector(".intro");
const swags-section = document.querySelector(".swags-section");

const video = intro.querySelector("video");
const video2 = swags-section.querySelector("video");

const text = intro.querySelector("h1");
const text1_1 = intro.querySelector("h2");
const text2 = swags-section.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

let scene4 = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: swags-section,
  triggerHook: 0,
})
  .setPin(swags-section)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
const textAnim2 = TweenMax.fromTo(text1_1, 3, { opacity: 0 }, { opacity: 1 });
const textAnim3 = TweenMax.fromTo(text2, 3, { opacity: 0 }, { opacity: 1 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

let scene1_1 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim2)
  .addTo(controller);

let scene2_1 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: swags-section,
  triggerHook: 0,
})
  .setTween(textAnim3)
  .addTo(controller);

//Video Animation
let accelamount = 0.3;
let scrollpos = 0;
let delay = 0;

let accelamount2 = 0.3;
let scrollpos2 = 0;
let delay2 = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 40);

scene4.on("update", (e) => {
  scrollpos2 = e.scrollPos / 1000 - 9;
});

setInterval(() => {
  delay2 += (scrollpos2 - delay2) * accelamount2;
  video2.currentTime = delay2;
}, 100);
