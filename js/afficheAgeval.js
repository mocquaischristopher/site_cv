"use strict";

const modal5SlideTimeout = 5000;
const modal5Slides = document.querySelectorAll(".modal5Slide")
let modal5Dots;
let modal5SlidIntervalId;
let modal5CurrentSlide = 1;
console.log(modal5Slides)

// Fonction pour afficher un slide spécifique en utilisant un index
function modal5SlideTo(index) {
    modal5CurrentSlide = index >= modal5Slides.length || index < 1 ? 0 : index;
    modal5Slides.forEach(elt => elt.style.transform = `translateX(-${modal5CurrentSlide * 100}%)`);
    modal5Dots.forEach((elt, key) => elt.classList = `dot ${key === modal5CurrentSlide? 'active': 'inactive'}`);
}
// Fonction pour afficher le prochain slide
function modal5ShowSlide() {
    modal5SlideTo(modal5CurrentSlide);
    modal5CurrentSlide++;
}
// Boucle pour créer les "dots" en fonction du nombre de slides
for (let i = 1; i <= modal5Slides.length; i++) {
    let dotClass = i == currentSlide ? 'active' : 'inactive';
    let dot = `<span data-slidId="${i}" class="modal5Dot ${dotClass}"></span>`;
    document.querySelector('.modal5Carousel-dots').innerHTML += dot;
}

// Récupère tous les "dots"
modal5Dots = document.querySelectorAll('.modal5Dot');
// Boucle pour ajouter des écouteurs d'événement "click" sur chaque "dot"
modal5Dots.forEach((elt, key) => elt.addEventListener('click', () => modal5SlideTo(key)));
// Initialisation de l'intervalle pour afficher les slides
modal5IntervalId = setInterval(modal5ShowSlide, modal5SlideTimeout)
// Boucle sur tous les éléments de type "slide" pour ajouter des écouteurs d'événement pour les interactions avec la souris et le toucher
modal5Slides.forEach(elt => {
    let startX;
    let endX;
    // Efface l'intervalle d'affichage des slides lorsque la souris passe sur un slide
    elt.addEventListener('mouseover', () => {
        clearInterval(modal5IntervalId);
    }, false);
    // Réinitialise l'intervalle d'affichage des slides lorsque la souris sort d'un slide
    elt.addEventListener('mouseout', () => {
        modal5IntervalId = setInterval(modal5ShowSlide, modal5SlideTimeout);
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
            modal5SlideTo(modal5CurrentSlide + 1);
            // Si la position initiale est plus petite que la position finale, affiche le slide précédent
        } else if (startX < endX) {
            modal5SlideTo(modal5CurrentSlide - 1);
        }
    });
})
