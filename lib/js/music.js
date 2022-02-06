const vis = document.getElementsByClassName("sound-vis")[0];
const state = document.getElementsByClassName("state")[0];
const toggle = document.querySelector(".music");

var OriginAudio = document.getElementById("myAudio");
var TriggerAudio = document.getElementById("myAudioTrigger");
OriginAudio.volume = 0.1;

toggle.addEventListener("click", () => {
  if (vis.className.indexOf("audio-paused") < 0) {
    vis.classList.add("audio-paused");
    vis.classList.remove("audio-playing");
    TriggerAudio.play();
    setTimeout(function () {
      OriginAudio.pause();
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
