/* Mindre fönster som öppnas med formulär för att lägga till poster och uppdatera poster i menyn */
document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript är laddad");

    const modal = document.getElementById('menuModal');
    const updateModal = document.getElementById('updateModal');
    const closeButton = document.querySelectorAll('.close-button');

    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            document.querySelector('#addMenuForm').setAttribute('data-category', category);
            modal.style.display = 'block';
        });
    });

    // Knapp för att stänga fönster
    closeButton.forEach(button => {
        button.addEventListener('click', function () {
            modal.style.display = 'none';
            updateModal.style.display = 'none';
        });
    });

    // Stänger fönster om man klickar utanför
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        } else if (event.target == updateModal) {
            updateModal.style.display = 'none';
        }
    });

    // Knapp för att uppdatera poster
    document.querySelectorAll('.updateBtn').forEach(button => {
        button.addEventListener('click', async function (event) {
            event.preventDefault();
            const id = this.getAttribute('data-id');

            // Hämta smårätter med id
            let dataset = await getStartersById(id);

            // Skicka med data som ska uppdateras till formuläret
            document.getElementById("updateMenuForm").dataset.id = id;
            document.getElementById("name").value = dataset.name;
            document.getElementById("description").value = dataset.description;
            document.getElementById("price").value = dataset.price;

            // Visa fönster för att uppdatera poster
            updateModal.style.display = 'block';
        });
    });
});