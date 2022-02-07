(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let eventDate = "03-05-2022";
  //end

  const countDown = new Date(eventDate).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days-desktop").innerText = Math.floor(
        distance / day
      )),
        (document.getElementById("hours-desktop").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes-desktop").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds-desktop").innerText = Math.floor(
          (distance % minute) / second
        ));

      (document.getElementById("days-mobile").innerText =
        Math.floor(distance / day)),
        (document.getElementById("hours-mobile").innerText =
          Math.floor((distance % day) / hour)),
        (document.getElementById("minutes-mobile").innerText = Math.floor((distance % hour) / minute)),
        (document.getElementById("seconds-mobile").innerText = Math.floor((distance % minute) / second));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("countdown-desktop").style.display = "none";
        document.getElementById("content-desktop").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
