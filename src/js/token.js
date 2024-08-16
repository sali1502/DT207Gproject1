/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

// Koll om token finns, finns inte token redirect till förstasidan
window.onload = init;
async function init() {
    const token = localStorage.getItem("token");
    if (!token && window.location.pathname.endsWith("admin.html")) {
        window.location.href = "index.html";
    }
}