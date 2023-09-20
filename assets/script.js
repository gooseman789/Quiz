var correctEL = document.querySelectorAll(".correct");
var wrongEL = document.querySelectorAll(".wrong");
var startEL = document.querySelector("#start");
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

function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEL.textContent = "Time left: " + timeLeft + " seconds";
        if (timeLeft === 0) {
            clearInterval(timeInterval);

        }
    }, 1000);
}

function nextplus(event) {
    event.preventDefault();
    console.log("check")
}

function nextstay(event) {
    event.preventDefault();
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