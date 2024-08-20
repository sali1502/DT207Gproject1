/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

// Om token inte finns, redirect till startsidan
window.onload = init;
async function init() {
    const token = localStorage.getItem("token");
    if (!token && window.location.pathname.endsWith("admin.html")) {
        window.location.href = "index.html";
    }
}