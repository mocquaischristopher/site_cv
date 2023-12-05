"use strict";

// Déclarations des variables
let nav = document.getElementById("menu_nav");
const slideTimeout = 5000;
const slides = document.querySelectorAll(".slide")
let dots;
let slidIntervalId;
let currentSlide = 1;
let buttonModal1 = document.getElementById("button_modal_1");
let buttonModal2 = document.getElementById("button_modal_2");
let buttonModal3 = document.getElementById("button_modal_3");
let buttonModal4 = document.getElementById("button_modal_4");
let buttonModal5 = document.getElementById("button_modal_5");
let openModal1 = document.getElementById("modal_1");
let openModal2 = document.getElementById("modal_2");
let openModal3 = document.getElementById("modal_3");
let openModal4 = document.getElementById("modal_4");
let openModal5 = document.getElementById("modal_5");
let closeModal1 = document.getElementById("close_modal_1");
let closeModal2 = document.getElementById("close_modal_2");
let closeModal3 = document.getElementById("close_modal_3");
let closeModal4 = document.getElementById("close_modal_4");
let closeModal5 = document.getElementById("close_modal_5");
let copyright = document.getElementById("date");
let btnScroll = document.getElementById("btn_scroll");

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
    nav.style.display = "none";
}

// Fonction pour afficher un slide spécifique en utilisant un index
function slideTo(index) {
    // Vérifie si l'index est valide (compris entre 0 et le nombre de slides - 1)
    currentSlide = index >= slides.length || index < 1 ? 0 : index;
    // Boucle sur tous les éléments de type "slide" pour les déplacer
    slides.forEach(elt => elt.style.transform = `translateX(-${currentSlide * 100}%)`);
    // Boucle sur tous les "dots" pour mettre à jour la couleur par la classe "active" ou "inactive"
    dots.forEach((elt, key) => elt.classList = `dot ${key === currentSlide? 'active': 'inactive'}`);
}
// Fonction pour afficher le prochain slide
function showSlide() {
    slideTo(currentSlide);
    currentSlide++;
}
// Boucle pour créer les "dots" en fonction du nombre de slides
for (let i = 1; i <= slides.length; i++) {
    let dotClass = i == currentSlide ? 'active' : 'inactive';
    let dot = `<span data-slidId="${i}" class="dot ${dotClass}"></span>`;
    document.querySelector('.carousel-dots').innerHTML += dot;
}

// Récupère tous les "dots"
dots = document.querySelectorAll('.dot');
// Boucle pour ajouter des écouteurs d'événement "click" sur chaque "dot"
dots.forEach((elt, key) => elt.addEventListener('click', () => slideTo(key)));
// Initialisation de l'intervalle pour afficher les slides
let intervalId = setInterval(showSlide, slideTimeout)
// Boucle sur tous les éléments de type "slide" pour ajouter des écouteurs d'événement pour les interactions avec la souris et le toucher
slides.forEach(elt => {
    let startX;
    let endX;
    // Efface l'intervalle d'affichage des slides lorsque la souris passe sur un slide
    elt.addEventListener('mouseover', () => {
        clearInterval(intervalId);
    }, false)
    // Réinitialise l'intervalle d'affichage des slides lorsque la souris sort d'un slide
    elt.addEventListener('mouseout', () => {
        intervalId = setInterval(showSlide, slideTimeout);
    }, false);
    // Enregistre la position initiale du toucher lorsque l'utilisateur touche un slide
    elt.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });
    // Enregistre la position finale du toucher lorsque l'utilisateur relâche son doigt
    elt.addEventListener('touchend', (event) => {
        endX = event.changedTouches[0].clientX;
        // Si la position initiale est plus grande que la position finale, affiche le prochain slide
        if (startX > endX) {
            slideTo(currentSlide + 1);
            // Si la position initiale est plus petite que la position finale, affiche le slide précédent
        } else if (startX < endX) {
            slideTo(currentSlide - 1);
        }
    });
})

// ouverture et fermeture modals
buttonModal1.addEventListener('click', function() {
    openModal1.style.display = "block";
})
closeModal1.addEventListener('click', function() {
    openModal1.style.display = "none";
})
buttonModal2.addEventListener('click', function() {
    openModal2.style.display = "block";
})
closeModal2.addEventListener('click', function() {
    openModal2.style.display = "none";
})
buttonModal3.addEventListener('click', function() {
    openModal3.style.display = "block";
})
closeModal3.addEventListener('click', function() {
    openModal3.style.display = "none";
})
buttonModal4.addEventListener('click', function() {
    openModal4.style.display = "block";
})
closeModal4.addEventListener('click', function() {
    openModal4.style.display = "none";
})
buttonModal5.addEventListener('click', function() {
    openModal5.style.display = "block";
})
closeModal5.addEventListener('click', function() {
    openModal5.style.display = "none";
})

// date footer
let year = new Date().getFullYear();
copyright.innerHTML = year;