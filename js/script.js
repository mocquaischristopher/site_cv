// Déclarations des variables
let btnScroll = document.getElementById("btn_scroll");
let nav = document.getElementById("menu_nav");
let copyright = document.getElementById("date");

// Déclaration des fonctions
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        btnScroll.style.display = "block";
    } else {
        btnScroll.style.display = "none";
    }
}

function scrollTopFunction() {
    // for Safari navigator
    document.body.scrollTop = 0;
    // for other navigator
    document.documentElement.scrollTop = 0;
}

// Ouvrir et fermer la nav
function openNav(){
    nav.style.width = "100%";
    nav.style.display = "block";
}

function closeNav(){
    nav.style.width = "0";
    nav.style.display = "none"
}

// date footer
let year = new Date().getFullYear();
copyright.innerHTML = year;