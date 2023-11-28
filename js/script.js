// Déclarations des variables
let btnScroll = document.getElementById("btn_scroll")

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