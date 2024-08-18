/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

// Hantering av modals - formulär för att lägga till poster i menyn öppnas i ett litet fönster */

document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript laddad");

    // Funktion för att hantera öppning av fönster
    function openModal(modalId, formId) {
        const modal = document.getElementById(modalId);
        const form = document.getElementById(formId);
        form.setAttribute('data-category', modalId);
        modal.style.display = 'block';
    }

    // Funktion för att hantera stängning av fönster
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }

    // Hantera öppning av fönster
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            if (category === 'starters') {
                openModal('menuStarters', 'addMenuStarters');
            } else if (category === 'sallads') {
                openModal('menuSallads', 'addMenuSallads');
            } else if (category === 'warms') {
                openModal('menuWarms', 'addMenuWarms');
            } else if (category === 'desserts') {
                openModal('menuDesserts', 'addMenuDesserts');
            } else if (category === 'drinks') {
                openModal('menuDrinks', 'addMenuDrinks');
            }
        });
    });

    // Hantera stängning av fönster
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', function () {
            closeModal('menuStarters');
            closeModal('menuSallads');
            closeModal('menuWarms');
            closeModal('menuDesserts');
            closeModal('menuDrinks');
        });
    });

    // Stäng fönster vid klick utanför
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            closeModal('menuStarters');
            closeModal('menuSallads');
            closeModal('menuWarms');
            closeModal('menuDesserts');
            closeModal('menuDrinks');
        }
    });
});