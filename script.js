'use strict';

// Selecting Elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// Starting Condition
let scores,currentScore,activePlayer,playing;
const inti = function () {
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
}
inti();

// player Shift
var playerShift = function () {
    document.getElementById("current--" + activePlayer).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

// New Game
btnNew.addEventListener("click", inti);

// Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
        // 1 Generating Random Number
        const dice = Math.trunc(Math.random() * 6) + 1;
        //  Display Dice
        diceEl.classList.remove("hidden");
        diceEl.src = './images/dice-' + dice + '.png';
        //Checked for rolled 1: if true,  
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById("current--" + activePlayer).textContent = currentScore;
        } else {
            // switch to next player
            playerShift();

            // Active Playe set to 0;

        }
    }

})
// Hold the score
btnHold.addEventListener("click", function () {

    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById("score--" + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.remove("hidden");
            document.querySelector(".player--" + activePlayer).classList.add("player--winner");
            document.querySelector(".player--" + activePlayer).classList.remove("player--active");
        } else {
            playerShift();
        }
    }

})


// add current score to active player score
// if (activePlayer == 0) {
//     scores[0] = scores[0] + currentScore;
//     score0El.textContent = scores[0];
//     currentScore = 0;
//     current0El.textContent = currentScore;
//     activePlayer = 1;
//     playerShift();
// } else {
//     scores[1] = scores[1] + currentScore;
//     score1El.textContent = scores[1];
//     currentScore = 0;
//     current1El.textContent = currentScore;
//     activePlayer = 0;
//     playerShift();
// }
// Check if player score is >=100


// Finish the game































// const dice = document.querySelector(".dice");
// const btnRollDice = document.querySelector(".btn--roll");
// const btnHold= document.querySelector(".btn--hold");
// const currentScore = function (score) {
//     document.querySelector(".current-score").textContent = score;
// };
// let score = 0;
// btnRollDice.addEventListener("click", function () {
//     dice.classList.remove("hidden");

//     // Dice Roll

//     const randNumber = Number(Math.floor(Math.random() * 6 + 1));


//     switch (randNumber) {
//         case 1:
//             document.querySelector(".dice").setAttribute("src", "./images/dice-1.png");
//             score = 0;
//             currentScore(score);
//             break;
//         case 2:
//             document.querySelector(".dice").setAttribute("src", "./images/dice-2.png");
//             score = score + randNumber;
//             currentScore(score);
//             break;
//         case 3:
//             document.querySelector(".dice").setAttribute("src", "./images/dice-3.png");
//             score = score + randNumber;
//             currentScore(score);
//             break;
//         case 4:
//             document.querySelector(".dice").setAttribute("src", "./images/dice-4.png");
//             score = score + randNumber;
//             currentScore(score);
//             break;
//         case 5:
//             document.querySelector(".dice").setAttribute("src", "./images/dice-5.png");
//             score = score + randNumber;
//             currentScore(score);
//             break;
//         case 6:
//             document.querySelector(".dice").setAttribute("src", "./images/dice-6.png");
//             score = score + randNumber;
//             currentScore(score);
//             break;

//     }

// })


// btnHold.addEventListener("click",function(){
//     document.querySelector("#score--0").innerHTML=score;
//     currentScore(0);
// })