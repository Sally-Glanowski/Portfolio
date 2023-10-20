//affichage numero de tel au clic sur bouton
document.getElementById('contactButton').addEventListener('click', function() {
    if (this.textContent === 'Contactez-moi !') {
        this.textContent = '06 88 72 81 30';
    } 
});


//Effet d'apparition des cartes
const cards = document.querySelectorAll(".card");

// Fonction pour vérifier si une carte est dans la zone visible
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour activer l'animation des cartes
function activateCards() {
  cards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add("animate-card");
    }
  });
}

// Écouteur d'événements pour activer l'animation au scroll
window.addEventListener("scroll", activateCards);
window.addEventListener("resize", activateCards); //gére le redimensionnement de la fenêtre

// Activation des cartes qui sont déjà dans la zone visible (au chargement de la page)
activateCards();

// MODAL
//  ouvrir et fermer la modal

var modal = document.getElementById("modal");

// Fonction pour ouvrir la modal avec une transition
function openModal(imageSrc) {
    var modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.style.opacity = 1; // Augmente l'opacité pour afficher la modal lentement
    modal.style.display = "block";

    // Ajoutez un gestionnaire d'événements pour fermer la modal en cliquant dessus
    modal.onclick = function() {
        closeModal();
    };
}

// Fonction pour fermer la modal avec une transition
function closeModal() {
    modal.style.opacity = 0; // Diminue l'opacité pour masquer la modal lentement
    setTimeout(function () {
        modal.style.display = "none";
    }, 300); //  la modal est masquée après la fin de la transition (300 ms)
}

// lie des écouteurs d’événements aux éléments de lien modal
var modalLinks = document.getElementsByClassName("modal-link");
for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        var imageSrc = this.getAttribute("href");
        openModal(imageSrc);
    });
}


// Sélectionne tous les liens dans la navigation
const navLinks = document.querySelectorAll("nav a");

// Ajoute un gestionnaire d'événements au clic sur chaque lien
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Empêche le comportement par défaut du lien (naviguer vers une autre page)
    event.preventDefault();
    
    // Supprime la classe "active" de tous les liens
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    
    // Ajoute la classe "active" au lien cliqué
    link.classList.add("active");
    
    // Récupére l'ancre cible depuis l'attribut href du lien
    const targetAnchor = document.querySelector(link.getAttribute("href"));
    
    // Faites défiler vers l'ancre cible (peut-être avec un effet de défilement en douceur)
    if (targetAnchor) {
      targetAnchor.scrollIntoView({ behavior: "smooth" });
    }
  });
});


