"use strict";

let scorePlayer = document.getElementsByClassName('modal_4_scorePlayer');
let scorePlayer1 = document.querySelector('.modal_4_scorePlayer1');
let scorePlayer2 = document.querySelector('.modal_4_scorePlayer2');
let scoreTotal = document.querySelector('.modal_4_scoreTotal');
let winerp1 = document.querySelector('.modal_4_winner_p1');
let winerp2 = document.querySelector('.modal_4_winner_p2');
let winKeeperp1 = document.querySelector('.modal_4_win_p1');
let winKeeperp2 = document.querySelector('.modal_4_win_p2');

let startButtonKeeper = document.querySelector('.modal_4_start');

let buttonsKeeper = document.querySelector('.modal_4_buttons');
let player = document.querySelector('.modal_4_player');
let res = document.querySelector('.modal_4_reset');

let scoreP1 = 0;
let scoreP2 = 0;
let numberRandom;
let numberRandomPlayer;
let winner = false;
winerp1.hidden = true;
winerp2.hidden = true;
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
            winner = false;
            // winKeeperp1.hidden = false;
            winerp1.hidden = false;
            winKeeperp1.textContent = "Joueur 1";
        }
    } else {
        scoreP2 ++;
        scorePlayer2.innerHTML = scoreP2;
        if( scoreP2 === numberRandom) {
            player.disabled = true;
            winner = false;
            // winKeeperp2.hidden = false;
            winerp2.hidden = false;
            winKeeperp2.textContent = "Joueur 2";
        }
    }
}

function reset() {
    
    scoreP1 = 0;
    scoreP2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    winner = false;
    winerp1.hidden = true;
    winerp2.hidden = true;
    player.disabled = false;

    numberRandom = Math.round(Math.random() * (20 - 1 +1)+1);
    scoreTotal.textContent = numberRandom;

}