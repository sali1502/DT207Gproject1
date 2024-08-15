/* Mindre fönster som öppnas med ett formulär för att uppdatera poster i menyn */

document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript är laddad");

    const modal = document.getElementById('menuModal');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            document.querySelector('#addMenuForm').setAttribute('data-category', category);
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
