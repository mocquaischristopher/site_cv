"use strict";

let scorePlayer = document.getElementsByClassName('modal_4_scorePlayer');
let scorePlayer1 = document.querySelector('.modal_4_scorePlayer1');
let scorePlayer2 = document.querySelector('.modal_4_scorePlayer2');
let scoreTotal = document.querySelector('.modal_4_scoreTotal');
let winer = document.querySelector('.modal_4_winner');
let winKeeper = document.querySelector('.modal_4_win');

let startButtonKeeper = document.querySelector('.modal_4_start');

let buttonsKeeper = document.querySelector('.modal_4_buttons');
let player = document.querySelector('.modal_4_player');
let res = document.querySelector('.modal_4_reset');

let scoreP1 = 0;
let scoreP2 = 0;
let numberRandom;
let numberRandomPlayer;
let winner = false;
winer.hidden = true;
buttonsKeeper.hidden = true;

startButtonKeeper.addEventListener('click', start);
player.addEventListener('click', playerRandom);
res.addEventListener('click', reset);


function start() {
    startButtonKeeper.hidden = true;
    buttonsKeeper.hidden = false;
    numberRandom = Math.round(Math.random() * (20 - 1 +1)+1);
    scoreTotal.textContent = numberRandom;
}

function playerRandom() {
    numberRandomPlayer = Math.round(Math.random());
    if(numberRandomPlayer === 0 ) {
        scoreP1 ++;
        scorePlayer1.innerHTML = scoreP1;
        if( scoreP1 === numberRandom) {
            player.disabled = true;
            winner = true;
            winer.hidden = false;
            winKeeper.textContent = "Joueur 1";
        }
    } else {
        scoreP2 ++;
        scorePlayer2.innerHTML = scoreP2;
        if( scoreP2 === numberRandom) {
            player.disabled = true;
            winner = true;
            winer.hidden = false;
            winKeeper.textContent = "Joueur 2";
        }
    }
}

function reset() {
    
    scoreP1 = 0;
    scoreP2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    winner = false;
    winer.hidden = true;
    player.disabled = false;

    numberRandom = Math.round(Math.random() * (20 - 1 +1)+1);
    scoreTotal.textContent = numberRandom;

}