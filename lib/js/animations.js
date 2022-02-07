$(function () {
    $("scrollInto").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        { scrollTop: $("#register-now-section").offset().top },
        500,
        "linear"
      );
    });
});