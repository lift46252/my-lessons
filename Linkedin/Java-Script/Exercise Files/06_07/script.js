const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {
    hrPosition = hrPosition + (3/360),//30/3600 или на 30 градусов за час потомучто 360/12 = 30
    minPosition = minPosition + (6/60),//(1/60)*6 она должна менятся на эти же 6 градусов в минуту 1/60 сколько секунд в минуте * сколько градусов делает секунда
    secPosition = secPosition + 6;//360 градусов / на колтчество секунд и получаешь кольчество градусов в сикунду

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
/* устанавливавет интервал
 1 аргумент что запускает 
 2 каждые n милисекунд */