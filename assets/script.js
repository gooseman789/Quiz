var correctEL = document.querySelectorAll(".correct");
var wrongEL = document.querySelectorAll(".wrong");
var startEL = document.querySelector("#start");
var timerEL = document.querySelector('#timer');
var question0EL = document.querySelector('#question0');
var question1EL = document.querySelector('#question1');
var question2EL = document.querySelector('#question2');
var question3EL = document.querySelector('#question3');
var question4EL = document.querySelector('#question4');
var question5EL = document.querySelector('#question5');
var question6EL = document.querySelector('#question6');
var question7EL = document.querySelector('#question7');
var question8EL = document.querySelector('#question8');
var question9EL = document.querySelector('#question9');
var question10EL = document.querySelector('#question10');
var question11EL = document.querySelector('#question11');

var cardsEL = [
    question0EL,
    question1EL,
    question2EL,
    question3EL,
    question4EL,
    question5EL,
    question6EL,
    question7EL,
    question8EL,
    question9EL,
    question10EL,
    question11EL,
]

function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        timeLeft--;
        timeInterval.textContent = "Time left: " + timeLeft + " seconds"
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

function nextplus(event) {
    event.preventDefault();
}

function nextstay(event) {
    event.preventDefault();
    currentEL = document.querySelector("#show");
   // currentEL.removeAttribute('id');
}

function startgame(event) {
    event.preventDefault();
    countdown();
    nextstay();
}

startEL.addEventListener("click", startgame)
wrongEL.forEach((el, i) => {
    el.addEventListener('click', () => alert('clicked loss'))
})
correctEL.forEach((el,i) => {
    el.addEventListener('click', () => alert("clicked correct"))
})

//this is a test to see if this actually worked.