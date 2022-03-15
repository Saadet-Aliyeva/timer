let seconds = 0;
let tens = 0;

const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");

let Interval;
const buttonStartFunc = () => {
 Interval = setInterval(startTimer, 10);
};

const buttonStoptFunc =() => {
    clearInterval(Interval);   
};

const buttonResetFunc =() => {
    clearInterval(Interval);
    appendTens.innerHTML =`00`;
    appendSeconds.innerHTML = `00`;
};

 function startTimer() {
    tens++;
     if (tens <=9) {
    appendTens.innerHTML = `0${tens}`;
 }

 if (tens > 9) {
     appendTens.innerHTML = tens;
 }

 if (tens > 99) {
     seconds++;
   appendSeconds.innerHTML = `0${seconds}`;
   tens =0;
   appendTens.innerHTML =`00`;
 }

 if (seconds>9) {
     appendSeconds.innerHTML = seconds;
   }
 }

buttonStart.addEventListener("click",buttonStartFunc);
buttonStop.addEventListener("click",buttonStoptFunc);
buttonReset.addEventListener("click",buttonResetFunc);
