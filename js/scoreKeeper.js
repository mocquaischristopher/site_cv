"use strict";

let scorePlayer1 = document.querySelector('.modal_5_scorePlayer1');
console.log(scorePlayer1)
let scorePlayer2 = document.querySelector('.modal_5_scorePlayer2');
let scoreTotal = document.querySelector('.modal_5_scoreTotal');
let winer = document.querySelector('.modal_5_winner');
let winKeeper = document.querySelector('.modal_5_win');

let input = document.querySelector('.modal_5_number');
let player1 = document.querySelector('.modal_5_player1');
let player2 = document.querySelector('.modal_5_player2');
let res = document.querySelector('.modal_5_reset');

let scoreP1;
let scoreP2;
let Total;
// scorePlayer1.innerHTML = scoreP1;
// scorePlayer2.innerHTML = scoreP2;
// scoreTotal.textContent = Total;
let winner = false;
winer.hidden = true;

input.addEventListener('change', number);
player1.addEventListener('click', P1);
player2.addEventListener('click', P2);
res.addEventListener('click', reset);

if (Total == "0") {
    player1.disabled = true;
    player2.disabled = true;

    winner = false;
    winer.hidden = true;

}

function number() {
    scoreTotal.innerHTML = this.value;
    Total = Number(this.value);
    scoreP1 = 0;
    scoreP2 = 0;
    scorePlayer1.innerHTML = 0;
    scorePlayer2.innerHTML = 0;

    player1.disabled = false;
    player2.disabled = false;

    winner = false;
    winer.hidden = true;

}

function P1() {
    if(!winner) {
        scoreP1 += 1;
    }
    if( scoreP1 === Total) {
        player1.disabled = true;
        player2.disabled = true;
        winner = true;
        winer.hidden = false;
        winKeeper.textContent = "Player1";
    }
    scorePlayer1.textContent = scoreP1;
}

function P2() {
    if(!winner) {
        scoreP2 += 1;
    }
    if( scoreP2 === Total) {
        player1.disabled = true;
        player2.disabled = true;
        winner = true;
        winer.hidden = false;
        winKeeper.textContent = "Player2";
    }
    scorePlayer2.textContent = scoreP2;
}

function reset() {
    
    scoreP1 = 0;
    scoreP2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    input.value = 0;
    Total = 0;
    scoreTotal.textContent = 0;
    if (Total == "0") {
        player1.disabled = true;
        player2.disabled = true;
    
        winner = false;
        winer.hidden = true;
    
    } else {
        player1.disabled = false;
        player2.disabled = false;
        winner = false;
        winer.hidden = true;

    }
    
}