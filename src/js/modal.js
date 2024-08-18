/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

// Mindre formulär som öppnas i ett nytt fönster för att lägga till och uppdatera poster i menyn */
document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript laddad");

    const modal = document.getElementById('menuModal');
    const closeButton = document.querySelectorAll('.close-button');

    // Öppnar formulär
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            document.querySelector('#addMenuForm').setAttribute('data-category', category);
            modal.style.display = 'block';
        });
    });

    // Stänger formulär
    closeButton.forEach(button => {
        button.addEventListener('click', function () {
            modal.style.display = 'none';
            updateModal.style.display = 'none';
        });
    });

    // Stänger formulär vid klick utanför formuläret
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        } else if (event.target == updateModal) {
            updateModal.style.display = 'none';
        }
    });
});
