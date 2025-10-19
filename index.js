// ===================================
// FICHIER: js/index.js
// JavaScript pour tout le site Elle Naturelle
// ===================================

// ===================================
// ÉVÉNEMENT 1: CLICK - Bouton panier
// ===================================
function incrementerPanier() {
    let compteur = document.querySelector('.header__cart-count');
    let nombre = parseInt(compteur.textContent);
    nombre = nombre + 1;
    compteur.textContent = nombre;
}

// ===================================
// ÉVÉNEMENT 2: SUBMIT - Formulaire contact
// ===================================
function soumettreFormulaire(event) {
    event.preventDefault();
    
    let nom = document.getElementById('nom');
    let email = document.getElementById('email');
    let sujet = document.getElementById('sujet');
    let message = document.getElementById('message');
    
    // Vérifier que les champs ne sont pas vides
    if (nom.value !== '' && email.value !== '' && sujet.value !== '' && message.value !== '') {
        alert('Merci ' + nom.value + ' ! Votre message a été envoyé.');
        
        // Vider les champs
        nom.value = '';
        email.value = '';
        sujet.value = '';
        message.value = '';
        document.getElementById('telephone').value = '';
    } else {
        alert('Veuillez remplir tous les champs obligatoires.');
    }
}

// ===================================
// ÉVÉNEMENT 3: CLICK - Liens du menu
// ===================================
function activerLienMenu() {
    // Retirer la classe active de tous les liens
    let tousLesLiens = document.querySelectorAll('.header__nav-link');
    
    let i = 0;
    while (i < tousLesLiens.length) {
        tousLesLiens[i].className = 'nav-link text-white fw-semibold text-uppercase px-3 header__nav-link';
        i = i + 1;
    }
    
    // Ajouter la classe active au lien cliqué
    let lienClique = event.target;
    lienClique.className = 'nav-link text-white fw-semibold text-uppercase px-3 header__nav-link header__nav-link--active';
}

// ===================================
// INITIALISATION
// ===================================

// Écouteur 1: Bouton panier
let btnPanier = document.getElementById('cartBtn');
if (btnPanier) {
    btnPanier.addEventListener('click', incrementerPanier);
}

// Écouteur 2: Formulaire contact
let formContact = document.getElementById('contactForm');
if (formContact) {
    formContact.addEventListener('submit', soumettreFormulaire);
}

// Écouteur 3: Liens du menu
let liensMenu = document.querySelectorAll('.header__nav-link');
let j = 0;
while (j < liensMenu.length) {
    liensMenu[j].addEventListener('click', activerLienMenu);
    j = j + 1;
}