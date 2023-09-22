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
var timeLeft = 60;
var scoreNum = 0;
var nameInput = document.querySelector('#nameform');
var saveBut = document.querySelector('#save');
var listEL = document.querySelector('#list');


function countdown() {
    timeInterval = setInterval(function() {
        timeLeft--;
        timerEL.textContent = "Time left: " + timeLeft + " seconds"
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            currentEL = document.querySelector("#show");
            if (currentEL === cardsEL[cardsEL.length-1]) {
                
            }
            else {
            cardsEL[cardsEL.length-1].setAttribute('id','show');
            currentEL.removeAttribute('id');
            }
        }
    }, 1000);
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
    timeLeft -= 5;
    scoreEL.textContent = "Your score was " + scoreNum;
})});

function scoreadd () {
    scoreNum++;
    console.log(scoreNum);
}

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
            }}
        scoreadd()
        scoreEL.textContent = "Your score was " + scoreNum;
        })});



//High score button to move to final card
HighScoreBut.addEventListener('click', function() {
    clearInterval(timeInterval)
    currentEL = document.querySelector("#show");
    cardsEL[cardsEL.length-1].setAttribute('id','show');
    currentEL.removeAttribute('id');
    scoreEL.textContent = "Your score was " + scoreNum;
})

//puts you back at the first question
restartBut.addEventListener('click', function() {
    cardsEL[cardsEL.length-1].removeAttribute('id');
    cardsEL[1].setAttribute('id', 'show');
    timeLeft = 60;
    countdown();
})

saveBut.addEventListener('click', function () {
    var inputName = nameInput.value + " " + scoreNum;
    localStorage.setItem("Score", inputName);
    var listLine = document.createElement('li');
    listLine.textContent = localStorage.getItem("Score");
    listEL.appendChild(listLine);
})

resetBut.addEventListener('click', function() {
    localStorage.clear();
    listEL.innerHTML = ' ';

})
