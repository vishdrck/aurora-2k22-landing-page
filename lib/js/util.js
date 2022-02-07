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