// This file stands for utilization the landing page

// Force on reloading page into top
$(document).ready(function () {
  $(this).scrollTop(0);
});

// Sticky header

window.onscroll = function () {
  removeStickyHeader();
};
var sticky = header.offsetTop;

function removeStickyHeader() {
  if (window.pageYOffset < sticky) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }
}

function loadVideo(selector,video_src) {
  const videoElement = document.getElementById(selector);
  videoElement.src = video_src;
  videoElement.load();
}

window.onload = function () {
  if ($(window).width() > 425) {
    scrollHandler();
    loadVideo("laptop-showcase-section-video", "assets/laptop.mp4");
    loadVideo("conference-section-video", "assets/conference_1.mp4");
    loadVideo("competition-section-video", "assets/competition_1.mp4");
    loadVideo("swags-section-video", "assets/swags.mp4");
    loadVideo("awards-section-video", "assets/awardshow2.mp4");
  }
};
