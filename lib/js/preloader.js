//<![CDATA[
$(window).on('load', function () { // makes sure the whole site is loaded
    $("#status").delay(1000).fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(2000).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(2000).css({ 'overflow': 'visible' });
});
//]]>