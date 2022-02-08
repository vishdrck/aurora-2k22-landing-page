const vis = document.getElementsByClassName("sound-vis")[0];
const visMobile = document.getElementsByClassName("sound-vis")[1];

const toggle = document.querySelector(".music");
const toggleMobile = document.querySelector(".music-mobile");

var OriginAudio = document.getElementById("myAudio");
var OriginAudioMobile = document.getElementById("myAudio-mobile");
var TriggerAudio = document.getElementById("myAudioTrigger");
var TriggerAudioMobile = document.getElementById("myAudioTrigger-mobile");
OriginAudio.volume = 0.1;
OriginAudioMobile.volume = 0.1;

toggle.addEventListener("click", () => {
  if (vis.className.indexOf("audio-paused") < 0) {
    vis.classList.add("audio-paused");
    vis.classList.remove("audio-playing");
    TriggerAudio.play();
    setTimeout(function () {
      OriginAudio.pause();
      OriginAudioMobile.pause();
    }, 1000);
    TriggerAudio.currentTime = 0;

    // state.classList.add("paused");
    // state.classList.remove("playing");
  } else {
    vis.classList.add("audio-playing");
    vis.classList.remove("audio-paused");
    TriggerAudio.play();
    setTimeout(function () {
      OriginAudio.play();
    }, 1000);
    TriggerAudio.currentTime = 0;

    // state.classList.add("playing");
    // state.classList.remove("paused");
  }
});

toggleMobile.addEventListener("click", () => {
  if (visMobile.className.indexOf("audio-paused") < 0) {
    visMobile.classList.add("audio-paused");
    visMobile.classList.remove("audio-playing");
    TriggerAudioMobile.play();
    setTimeout(function () {
      OriginAudio.pause();
      OriginAudioMobile.pause();
    }, 1000);
    TriggerAudioMobile.currentTime = 0;

    // state.classList.add("paused");
    // state.classList.remove("playing");
  } else {
    visMobile.classList.add("audio-playing");
    visMobile.classList.remove("audio-paused");
    TriggerAudioMobile.play();
    setTimeout(function () {
      OriginAudioMobile.play();
    }, 1000);
    TriggerAudioMobile.currentTime = 0;
  }
});
