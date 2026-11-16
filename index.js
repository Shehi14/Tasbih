
// Variables

let count = 0;

let seconds = 0;

let interval = null;


// Selecting HTML Elements

let counter = document.getElementById("counter");

let countBtn = document.getElementById("countBtn");

let resetBtn = document.getElementById("resetBtn");

let target = document.getElementById("target");

let message = document.getElementById("message");

let time = document.getElementById("time");

let startBtn = document.getElementById("startBtn");

let stopBtn = document.getElementById("stopBtn");


// Tasbih Counter

countBtn.addEventListener("click", function () {

    if (count < Number(target.value)) {

        count++;

        counter.innerText = count;

    }

    if (count === Number(target.value)) {

        message.innerText = "Alhamdulillah! Target Completed.";

    }

});


// Reset Counter

resetBtn.addEventListener("click", function () {

    count = 0;

    counter.innerText = count;

    message.innerText = "Start your Tasbih";

});


// Timer Function using setInterval()

startBtn.addEventListener("click", function () {

    if (interval !== null) {

        return;

    }

    interval = setInterval(function () {

        seconds++;

        let minutes = Math.floor(seconds / 60);

        let remainingSeconds = seconds % 60;

        time.innerText =
            String(minutes).padStart(2, "0") + ":" +
            String(remainingSeconds).padStart(2, "0");

    }, 1000);

});


// Stop Timer using clearInterval()

stopBtn.addEventListener("click", function () {

    clearInterval(interval);

    interval = null;

});
