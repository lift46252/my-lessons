const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
var date = new Date();
console.log(date)
let hr = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    hrPosition = (hr * 360/12) + (min * (360/60)/12),
    minPosition = (min * 360/60) + (sec * (360/60)/60),
    secPosition = sec * 360/60;
console.log("hour: " + hr + "\n" + "minutes: " + min + "\n" + "seconds: " + sec);

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";