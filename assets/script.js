var correctEL = document.querySelectorAll(".correct");
var wrongEL = document.querySelectorAll(".wrong");
var startEL = document.querySelector("#start");
var timerEL = document.querySelector('#timer');
var cardsEL = document.querySelectorAll('.questions');
var HighScoreBut = document.querySelector('#highscore');
var scoreEL = document.querySelector('#score');
var restartBut = document.querySelector('#restart');
var resetBut  = document.querySelector('#reset');
var timeInterval  ;

var scoreNum = 0;
scoreEL.textContent = "Your score was " + scoreNum;


function countdown() {
    var timeLeft = 60;
    timeInterval = setInterval(function() {
        timeLeft--;
        timerEL.textContent = "Time left: " + timeLeft + " seconds"
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            currentEL = document.querySelector("#show");
            cardsEL[cardsEL.length-1].setAttribute('id','show');
            currentEL.removeAttribute('id');
        }
    }, 1000);
}

function nextplus() {
}

function nextstay() {
    currentEL = document.querySelector("#show");
    console.log("test1");
    for (let i=0; i < cardsEL.length; i++) {
        if (cardsEL[i] === currentEL) {
            console.log(cardsEL[i]);
            cardsEL[i+1].setAttribute('id', 'show');
            currentEL.removeAttribute('id');
            break
        }
    }
    
}

function startgame() {
    countdown();
    nextstay();
    console.log("test");
}
//starts game
startEL.addEventListener("click", startgame);

//move to next card, lower time
wrongEL.forEach((el, i) => {
el.addEventListener('click', function() {
    currentEL = document.querySelector("#show");
    console.log("test1");
    for (let i=0; i < cardsEL.length; i++) {
        if (cardsEL[i] === currentEL) {
            cardsEL[i+1].setAttribute('id', 'show');
            currentEL.removeAttribute('id');
            break
        }
    }
    
})});

//move to next card, add one to score
correctEL.forEach((el,i) => {
    el.addEventListener('click', function() {
        currentEL = document.querySelector("#show");
        console.log("test1");
        for (let i=0; i < cardsEL.length; i++) {
            if (cardsEL[i] === currentEL) {
                cardsEL[i+1].setAttribute('id', 'show');
                currentEL.removeAttribute('id');
                break
            }}})});


//High score button to move to final card
HighScoreBut.addEventListener('click', function() {
    clearInterval(timeInterval)
    currentEL = document.querySelector("#show");
    cardsEL[cardsEL.length-1].setAttribute('id','show');
    currentEL.removeAttribute('id');
})

//puts you back at the first question
restartBut.addEventListener('click', function() {
    cardsEL[cardsEL.length-1].removeAttribute('id');
    cardsEL[1].setAttribute('id', 'show');
    countdown();
})