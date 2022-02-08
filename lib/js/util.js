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

function unloadVideo(selector) {
  const videoElement = document.getElementById(selector);
  videoElement.pause();
  videoElement.removeAttribute("src");
  videoElement.load();
}

window.onload = function () {
  if ($(window).width() > 425) {
    scrollHandler();
  } else {
    unloadVideo("laptop-showcase-section-video");
    unloadVideo("conference-section-video");
    unloadVideo("competition-section-video");
    unloadVideo("swags-section-video");
    unloadVideo("awards-section-video");
  }
};
