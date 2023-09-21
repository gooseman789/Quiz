var correctEL = document.querySelectorAll(".correct");
var wrongEL = document.querySelectorAll(".wrong");
var startEL = document.querySelector("#start");
<<<<<<< HEAD
var timerEL = document.querySelector("#timer");
var startCard = document.querySelector("#starter");
var questionCard1 = document.querySelector("#question1");
var questionCard2 = document.querySelector("#question2");
var questionCard3 = document.querySelector("#question3");
var questionCard4 = document.querySelector("#question4");
var questionCard5 = document.querySelector("#question5");
var questionCard6 = document.querySelector("#question6");
var questionCard7 = document.querySelector("#question7");
var questionCard8 = document.querySelector("#question8");
var questionCard9 = document.querySelector("#question9");
var questionCard10 = document.querySelector("#question10");



var cardsEL = {
    startCard,
    questionCard1,
    questionCard2,
    questionCard3,
    questionCard4,
    questionCard5,
    questionCard6,
    questionCard7,
    questionCard8,
    questionCard9,
    questionCard10,
};

localStorage.setItem("cards", JSON.stringify(cardsEL));

=======
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

>>>>>>> 8c638a20fe3d3a12d007f6424683a5ff5857e791
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        timeLeft--;
<<<<<<< HEAD
        timerEL.textContent = "Time left: " + timeLeft + " seconds";
        if (timeLeft === 0) {
            clearInterval(timeInterval);

=======
        timeInterval.textContent = "Time left: " + timeLeft + " seconds"
        if (timeLeft === 0) {
            clearInterval(timeInterval);
>>>>>>> 8c638a20fe3d3a12d007f6424683a5ff5857e791
        }
    }, 1000);
}

function nextplus(event) {
    event.preventDefault();
<<<<<<< HEAD
    console.log("check")
=======
>>>>>>> 8c638a20fe3d3a12d007f6424683a5ff5857e791
}

function nextstay(event) {
    event.preventDefault();
<<<<<<< HEAD
    currentEL = document.querySelector('#show')
}

function startgame(event) {
    event.preventDefault();
    countdown();
}


startEL.addEventListener("click", startgame);
wrongEL.forEach((el, i) => {
    el.addEventListener('click', nextstay)
})
correctEL.forEach((el, i) => {
    el.addEventListener('click', nextplus)
})
=======
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
>>>>>>> 8c638a20fe3d3a12d007f6424683a5ff5857e791
