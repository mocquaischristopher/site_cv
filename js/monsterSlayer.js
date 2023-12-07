"use strict";
let pvYouSpan = document.querySelector(".modal_2_pvYou");
let pvMonsterSpan = document.querySelector(".modal_2_pvMonster");
let pvYou;
let pvMonster;

let progressYou = document.getElementById("modal_2_barYou");
let progressMonster = document.getElementById("modal_2_barMonster");

let log = document.querySelector(".modal_2_log");

let startButton = document.querySelector(".modal_2_start");
let buttons = document.querySelector(".modal_2_buttons");
let attackButton = document.querySelector(".modal_2_attack");
let specialButton = document.querySelector(".modal_2_specialAttack");
let healButton = document.querySelector(".modal_2_heal");
let giveUpButton = document.querySelector(".modal_2_giveUp");

let deleteBoom = false;

buttons.hidden = true;

startButton.addEventListener("click", startMonsterSlayer);
attackButton.addEventListener("click", attack);
specialButton.addEventListener("click", special);
healButton.addEventListener("click", heal);
giveUpButton.addEventListener("click", giveUp);

function startMonsterSlayer() {
    pvYou = 100;
    pvMonster = 100;
    let colorGreen = "green";

    pvYouSpan.innerHTML = pvYou + " %";
    pvMonsterSpan.innerHTML = pvMonster + " %";

    progressYou.style.background = colorGreen;
    progressYou.style.width = pvYou + "%";
    progressMonster.style.background = "green";
    progressMonster.style.width = pvMonster + "%";

    startButton.hidden = true;
    attackButton.disabled = false;
    specialButton.disabled = false;
    healButton.disabled = false;
    buttons.hidden = false;

    let turns = document.createElement("section");
    turns.classList.add("modal_2_ul");
    log.append(turns);
}

function li(key, attackMonster, attackYou) {
    let articleP = document.createElement("article");
    articleP.classList.add("blue");
    let articleI = document.createElement("img");
    articleI.classList.add("articleImg");
    let articleM = document.createElement("article");
    articleM.classList.add("red");

    let txtYou;
    let txtMonster = "- " + attackMonster + " PV";

    switch (key) {
        case "attack":
            txtYou = "- " + attackYou + " PV";
            break;

        case "special":
            txtYou = "- " + attackYou + " PV";
            break;

        case "heal":
            txtYou = "+ 10 PV";
            break;
    }

    let textYou = document.createTextNode(txtYou);
    let textMonster = document.createTextNode(txtMonster);
    articleI.src = './img/portfolio/modal2/boom.webp';

    let turn = document.getElementsByClassName("modal_2_ul");
    if(deleteBoom === true) {
        turn[0].remove();
        deleteBoom = false;
        let turns = document.createElement("section");
        turns.classList.add("modal_2_ul");
        log.append(turns);
    
    }
    console.log(turn)
    turn[0].append(articleP);
    turn[0].append(articleI);
    turn[0].append(articleM);
    articleP.append(textYou);
    articleM.append(textMonster);
    console.log(Object.keys(turn).length);
    deleteBoom = true;
}

function attack() {
    let attackYou = Math.floor(Math.random() * (10 - 3 + 1) + 3);
    let attackMonster = Math.floor(Math.random() * (10 - 5 + 1) + 5);

    li("attack", attackMonster, attackYou);

    pvYou -= attackMonster;
    pvYouSpan.innerHTML = pvYou + " %";
    progressYou.style.width = pvYou + "%";
    pvMonster -= attackYou;
    pvMonsterSpan.innerHTML = pvMonster + " %";
    progressMonster.style.width = pvMonster + "%";

    win();
}

function special() {
    let attackYou = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    let attackMonster = Math.floor(Math.random() * (10 - 5 + 1) + 5);

    li("special", attackMonster, attackYou);

    pvYou -= attackMonster;
    pvMonster -= attackYou;
    pvYouSpan.innerHTML = pvYou + " %";
    progressYou.style.width = pvYou + "%";
    pvMonsterSpan.innerHTML = pvMonster + " %";
    progressMonster.style.width = pvMonster + "%";

    win();
}

function heal() {
    if ((pvYou += 10) >= 100) {
        pvYou = 100;
    } else {
        pvYou += 10;
    }

    let attackMonster = Math.floor(Math.random() * (10 - 5 + 1) + 5);

    li("heal", attackMonster);

    pvYou -= attackMonster;
    pvMonster;
    pvYouSpan.innerHTML = pvYou + " %";
    progressYou.style.width = pvYou + "%";
    pvMonsterSpan.innerHTML = pvMonster + " %";
    progressMonster.style.width = pvMonster + "%";

    win();
}

function giveUp() {
    let turn = document.getElementsByClassName("modal_2_ul");

    Swal.fire({
        title: "Etes-vous sur?",
        text: "Vous abandonnez, nouvelle partie?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, j'abandonne!",
        cancelButtonText: "Annuler",
    }).then((result) => {
        if (result.isConfirmed) {
            turn[0].remove();
            startMonsterSlayer();
        } else {
            attackButton.disabled = true;
            specialButton.disabled = true;
            healButton.disabled = true;
        }
    });
}

function win() {
    let turn = document.getElementsByClassName("modal_2_ul");

    let progressYouWidth = parseInt(document.getElementById("modal_2_barYou").style.width);

    let progressMonsterWidth = parseInt(document.getElementById("modal_2_barMonster").style.width);

    if(progressYouWidth<= 50 ) {
        progressYou.style.background = "orange";
    }
    if(progressYouWidth <= 25 ) {
        progressYou.style.background = "red";
    }

    if(progressMonsterWidth<= 50 ) {
        progressMonster.style.background = "orange";
    }
    if( progressMonsterWidth <= 25 ) {
        progressMonster.style.background = "red";
    }

    if (pvYou <= 0) {
        Swal.fire({
            title: "Pas de chance",
            text: "L'Ennemi à gagner la partie, nouvelle partie?",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, je veux me venger!",
            cancelButtonText: "Annuler",
        }).then((result) => {
            if (result.isConfirmed) {
                turn[0].remove();
                startMonsterSlayer();
            } else {
            attackButton.disabled = true;
            specialButton.disabled = true;
            healButton.disabled = true;
            }
        });
    } else if (pvMonster <= 0) {
        Swal.fire({
            title: "Félicitation",
            text: "Vous avez gagner gagner la partie, nouvelle partie?",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, je veux re-essayer!",
            cancelButtonText: "Annuler",
        }).then((result) => {
            if (result.isConfirmed) {
                turn[0].remove();
                startMonsterSlayer();
            } else {
            attackButton.disabled = true;
            specialButton.disabled = true;
            healButton.disabled = true;
            }
        });
    }
}
