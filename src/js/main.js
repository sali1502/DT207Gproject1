/* Meny */

// Hämta meny-knappar
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

// Eventlyssnare
openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Toggla fram navigeringsmeny
function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");

    // Hämta in css för meny
    let style = window.getComputedStyle(navMenuEl);

    // Koll om navigering är synlig, ändrar display block/none
    if (style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}
