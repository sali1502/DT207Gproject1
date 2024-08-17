/* Projekt DT207G VT24, Åsa Lindskog, sali1502@student.miun.se */

"use strict";

/* Meny för utskrift till sida för besökare */

/* Smårätter */

let urlStarters = "http://localhost:3001/api/starters";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut data finns
    if (document.getElementById("startersList")) {
        // Om det finns, hämta data
        getStarters();
    }

    /* // Kolla om element för att lägga till data finns
    if (document.getElementById("addMenuForm")) {
        // Om det finns, lägg till en händelselyssnare på "Lägg till"-knappen
        document.getElementById("addMenuForm").addEventListener("submit", function (event) {
            event.preventDefault();
            let form = event.target;

            // Kalla på funktionen för att lägga till data
            createStarters(
                form.name.value,
                form.description.value,
                form.price.value
            );
        });
    }

    // Kolla om element för att uppdatera data finns
    if (document.getElementById("updateMenuForm")) {
        // Om det finns, lägg en händelselyssnare på knappen "Uppdatera"
        document.getElementById("updateMenuForm").addEventListener("submit", async function (event) {
            event.preventDefault();
            let form = event.target;
            let id = form.dataset.id;

            // Kalla på funktionen för att uppdatera data från formulär
            await updateStarters(
                id,
                form.name.value,
                form.description.value,
                form.price.value
            );
        });

        // När webbläsarfönstret laddas..
        window.onload = async function () {
            // Hämta URL-parametrar med formulärdata
            let params = new URLSearchParams(window.location.search);
            let id = params.get("id");
            if (id) {
                let dataset = await getStartersById(id);
                document.getElementById("updateMenuForm").dataset.id = id;
                document.getElementById("name").value = dataset.name;
                document.getElementById("description").value = dataset.description;
                document.getElementById("price").value = dataset.price;
            }
        };
    }
});

*/

/* HÄMTA DATA - CRUD READ/GET */

// Hämta data och läs ut till skärmen
async function getStarters() {
    try {
        const response = await fetch(urlStarters);
        const data = await response.json();

        // Skriv ut till DOM
        let list = document.getElementById("startersList");
        list.innerHTML = "";

        data.forEach(item => {
            let listItem = document.createElement("li");

            let name = document.createElement("div");
            name.className = "name";
            name.textContent = `${item.name}`;
            listItem.appendChild(name);

            let description = document.createElement("div");
            description.className = "description";
            description.textContent = `${item.description}`;
            listItem.appendChild(description);

            let price = document.createElement("div");
            price.className = "price";
            price.textContent = `${item.price} kr`;
            listItem.appendChild(price);

            list.appendChild(listItem);
        });

    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av starters: ", error);
    }
}
});

/* LÄGG TILL DATA - CRUD CREATE/POST */

/* // Lägg till ny data
async function createStarters(name, description, price) {

    let starters = {
        name: name,
        description: description,
        price: price
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });

        const data = await response.json();
        console.table(data);

        await getStarters();

    } catch (error) {
        console.error("Ett fel uppstod när starters skulle läggas till: ", error);
    }

    // Omdirigera till startsidan
    window.location.href = "index.html";
} */

/* UPPDATERA DATA - CRUD UPDATE/PUT */

/* // Hämta data med id
async function getStartersById(id) {
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av starters: ", error);
    }
}

// Uppdatera data
async function updateStarters(id, name, description, price) {

    // Payload
    let starters = {
        name: name,
        description: description,
        price: price,
    };

    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });
        const data = await response.json();
        console.table(data);

    } catch (error) {
        console.error("Ett fel uppstod vid uppdatering av starters: ", error);
    }
    // Omdirigera till startsidan
    window.location.href = "index.html";
} */

/* RADERA DATA - CRUD DELETE/DELETE */

/* // Radera arbetserfarenheter med meddelande
async function deleteStarters(id) {
    if (!id) {
        console.error("Ingen id angiven för radering av starters.");
        return;
    }

    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Något gick fel: ${response.statusText}`);
        }

        console.log("Starters raderad");
        displayMessage("Starters raderad");

        await getStarters();
    } catch (error) {
        console.error("Ett fel uppstod vid radering av starters: ", error);
    }
} */

/* // Meddelande för raderade starters
function displayMessage(message) {
    let messageContainer = document.getElementById("message-container");
    messageContainer.innerText = message;
}

// Formatera datumsträng till format yyyy-mm-dd
function formatDate(dateString) {
    let date = new Date(dateString);
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
}
    */

/* Sallad */

let urlSallads = "http://localhost:3001/api/sallads";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut data finns
    if (document.getElementById("salladsList")) {
        // Om det finns, hämta data
        getSallads();
    }

    /* // Kolla om element för att lägga till data finns
    if (document.getElementById("addMenuForm")) {
        // Om det finns, lägg till en händelselyssnare på "Lägg till"-knappen
        document.getElementById("addMenuForm").addEventListener("submit", function (event) {
            event.preventDefault();
            let form = event.target;

            // Kalla på funktionen för att lägga till data
            createStarters(
                form.name.value,
                form.description.value,
                form.price.value
            );
        });
    }

    // Kolla om element för att uppdatera data finns
    if (document.getElementById("updateMenuForm")) {
        // Om det finns, lägg en händelselyssnare på knappen "Uppdatera"
        document.getElementById("updateMenuForm").addEventListener("submit", async function (event) {
            event.preventDefault();
            let form = event.target;
            let id = form.dataset.id;

            // Kalla på funktionen för att uppdatera data från formulär
            await updateStarters(
                id,
                form.name.value,
                form.description.value,
                form.price.value
            );
        });

        // När webbläsarfönstret laddas..
        window.onload = async function () {
            // Hämta URL-parametrar med formulärdata
            let params = new URLSearchParams(window.location.search);
            let id = params.get("id");
            if (id) {
                let dataset = await getStartersById(id);
                document.getElementById("updateMenuForm").dataset.id = id;
                document.getElementById("name").value = dataset.name;
                document.getElementById("description").value = dataset.description;
                document.getElementById("price").value = dataset.price;
            }
        };
    }
});

*/

/* HÄMTA DATA - CRUD READ/GET */

// Hämta data och läs ut till skärmen
async function getSallads() {
    try {
        const response = await fetch(urlSallads);
        const data = await response.json();

        // Skriv ut till DOM
        let list = document.getElementById("salladsList");
        list.innerHTML = "";

        data.forEach(item => {
            let listItem = document.createElement("li");

            let name = document.createElement("div");
            name.className = "name";
            name.textContent = `${item.name}`;
            listItem.appendChild(name);

            let description = document.createElement("div");
            description.className = "description";
            description.textContent = `${item.description}`;
            listItem.appendChild(description);

            let price = document.createElement("div");
            price.className = "price";
            price.textContent = `${item.price} kr`;
            listItem.appendChild(price);

            list.appendChild(listItem);
        });

    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av starters: ", error);
    }
}
});

/* LÄGG TILL DATA - CRUD CREATE/POST */

/* // Lägg till ny data
async function createStarters(name, description, price) {

    let starters = {
        name: name,
        description: description,
        price: price
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });

        const data = await response.json();
        console.table(data);

        await getStarters();

    } catch (error) {
        console.error("Ett fel uppstod när starters skulle läggas till: ", error);
    }

    // Omdirigera till startsidan
    window.location.href = "index.html";
} */

/* UPPDATERA DATA - CRUD UPDATE/PUT */

/* // Hämta data med id
async function getStartersById(id) {
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av starters: ", error);
    }
}

// Uppdatera data
async function updateStarters(id, name, description, price) {

    // Payload
    let starters = {
        name: name,
        description: description,
        price: price,
    };

    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });
        const data = await response.json();
        console.table(data);

    } catch (error) {
        console.error("Ett fel uppstod vid uppdatering av starters: ", error);
    }
    // Omdirigera till startsidan
    window.location.href = "index.html";
} */

/* RADERA DATA - CRUD DELETE/DELETE */

/* // Radera arbetserfarenheter med meddelande
async function deleteStarters(id) {
    if (!id) {
        console.error("Ingen id angiven för radering av starters.");
        return;
    }

    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Något gick fel: ${response.statusText}`);
        }

        console.log("Starters raderad");
        displayMessage("Starters raderad");

        await getStarters();
    } catch (error) {
        console.error("Ett fel uppstod vid radering av starters: ", error);
    }
} */

/* // Meddelande för raderade starters
function displayMessage(message) {
    let messageContainer = document.getElementById("message-container");
    messageContainer.innerText = message;
}

// Formatera datumsträng till format yyyy-mm-dd
function formatDate(dateString) {
    let date = new Date(dateString);
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
}
    */

/* Varma rätter */

let urlWarms = "http://localhost:3001/api/warms";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut data finns
    if (document.getElementById("warmsList")) {
        // Om det finns, hämta data
        getWarms();
    }

    /* // Kolla om element för att lägga till data finns
    if (document.getElementById("addMenuForm")) {
        // Om det finns, lägg till en händelselyssnare på "Lägg till"-knappen
        document.getElementById("addMenuForm").addEventListener("submit", function (event) {
            event.preventDefault();
            let form = event.target;

            // Kalla på funktionen för att lägga till data
            createStarters(
                form.name.value,
                form.description.value,
                form.price.value
            );
        });
    }

    // Kolla om element för att uppdatera data finns
    if (document.getElementById("updateMenuForm")) {
        // Om det finns, lägg en händelselyssnare på knappen "Uppdatera"
        document.getElementById("updateMenuForm").addEventListener("submit", async function (event) {
            event.preventDefault();
            let form = event.target;
            let id = form.dataset.id;

            // Kalla på funktionen för att uppdatera data från formulär
            await updateStarters(
                id,
                form.name.value,
                form.description.value,
                form.price.value
            );
        });

        // När webbläsarfönstret laddas..
        window.onload = async function () {
            // Hämta URL-parametrar med formulärdata
            let params = new URLSearchParams(window.location.search);
            let id = params.get("id");
            if (id) {
                let dataset = await getStartersById(id);
                document.getElementById("updateMenuForm").dataset.id = id;
                document.getElementById("name").value = dataset.name;
                document.getElementById("description").value = dataset.description;
                document.getElementById("price").value = dataset.price;
            }
        };
    }
});

*/

/* HÄMTA DATA - CRUD READ/GET */

// Hämta data och läs ut till skärmen
async function getWarms() {
    try {
        const response = await fetch(urlWarms);
        const data = await response.json();

        // Skriv ut till DOM
        let list = document.getElementById("warmsList");
        list.innerHTML = "";

        data.forEach(item => {
            let listItem = document.createElement("li");

            let name = document.createElement("div");
            name.className = "name";
            name.textContent = `${item.name}`;
            listItem.appendChild(name);

            let description = document.createElement("div");
            description.className = "description";
            description.textContent = `${item.description}`;
            listItem.appendChild(description);

            let price = document.createElement("div");
            price.className = "price";
            price.textContent = `${item.price} kr`;
            listItem.appendChild(price);

            list.appendChild(listItem);
        });

    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av starters: ", error);
    }
}
});

/* LÄGG TILL DATA - CRUD CREATE/POST */

/* // Lägg till ny data
async function createStarters(name, description, price) {

    let starters = {
        name: name,
        description: description,
        price: price
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });

        const data = await response.json();
        console.table(data);

        await getStarters();

    } catch (error) {
        console.error("Ett fel uppstod när starters skulle läggas till: ", error);
    }

    // Omdirigera till startsidan
    window.location.href = "index.html";
} */

/* UPPDATERA DATA - CRUD UPDATE/PUT */

/* // Hämta data med id
async function getStartersById(id) {
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av starters: ", error);
    }
}

// Uppdatera data
async function updateStarters(id, name, description, price) {

    // Payload
    let starters = {
        name: name,
        description: description,
        price: price,
    };

    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });
        const data = await response.json();
        console.table(data);

    } catch (error) {
        console.error("Ett fel uppstod vid uppdatering av starters: ", error);
    }
    // Omdirigera till startsidan
    window.location.href = "index.html";
} */

/* RADERA DATA - CRUD DELETE/DELETE */

/* // Radera arbetserfarenheter med meddelande
async function deleteStarters(id) {
    if (!id) {
        console.error("Ingen id angiven för radering av starters.");
        return;
    }

    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Något gick fel: ${response.statusText}`);
        }

        console.log("Starters raderad");
        displayMessage("Starters raderad");

        await getStarters();
    } catch (error) {
        console.error("Ett fel uppstod vid radering av starters: ", error);
    }
} */

/* // Meddelande för raderade starters
function displayMessage(message) {
    let messageContainer = document.getElementById("message-container");
    messageContainer.innerText = message;
}

// Formatera datumsträng till format yyyy-mm-dd
function formatDate(dateString) {
    let date = new Date(dateString);
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
}
    */

/* Varma rätter */

let urlDesserts = "http://localhost:3001/api/desserts";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut data finns
    if (document.getElementById("dessertsList")) {
        // Om det finns, hämta data
        getDesserts();
    }

    /* // Kolla om element för att lägga till data finns
    if (document.getElementById("addMenuForm")) {
        // Om det finns, lägg till en händelselyssnare på "Lägg till"-knappen
        document.getElementById("addMenuForm").addEventListener("submit", function (event) {
            event.preventDefault();
            let form = event.target;

            // Kalla på funktionen för att lägga till data
            createStarters(
                form.name.value,
                form.description.value,
                form.price.value
            );
        });
    }

    // Kolla om element för att uppdatera data finns
    if (document.getElementById("updateMenuForm")) {
        // Om det finns, lägg en händelselyssnare på knappen "Uppdatera"
        document.getElementById("updateMenuForm").addEventListener("submit", async function (event) {
            event.preventDefault();
            let form = event.target;
            let id = form.dataset.id;

            // Kalla på funktionen för att uppdatera data från formulär
            await updateStarters(
                id,
                form.name.value,
                form.description.value,
                form.price.value
            );
        });

        // När webbläsarfönstret laddas..
        window.onload = async function () {
            // Hämta URL-parametrar med formulärdata
            let params = new URLSearchParams(window.location.search);
            let id = params.get("id");
            if (id) {
                let dataset = await getStartersById(id);
                document.getElementById("updateMenuForm").dataset.id = id;
                document.getElementById("name").value = dataset.name;
                document.getElementById("description").value = dataset.description;
                document.getElementById("price").value = dataset.price;
            }
        };
    }
});

*/

/* HÄMTA DATA - CRUD READ/GET */

// Hämta data och läs ut till skärmen
async function getDesserts() {
    try {
        const response = await fetch(urlDesserts);
        const data = await response.json();

        // Skriv ut till DOM
        let list = document.getElementById("dessertsList");
        list.innerHTML = "";

        data.forEach(item => {
            let listItem = document.createElement("li");

            let name = document.createElement("div");
            name.className = "name";
            name.textContent = `${item.name}`;
            listItem.appendChild(name);

            let description = document.createElement("div");
            description.className = "description";
            description.textContent = `${item.description}`;
            listItem.appendChild(description);

            let price = document.createElement("div");
            price.className = "price";
            price.textContent = `${item.price} kr`;
            listItem.appendChild(price);

            list.appendChild(listItem);
        });

    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av starters: ", error);
    }
}
});

/* LÄGG TILL DATA - CRUD CREATE/POST */

/* // Lägg till ny data
async function createStarters(name, description, price) {

    let starters = {
        name: name,
        description: description,
        price: price
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });

        const data = await response.json();
        console.table(data);

        await getStarters();

    } catch (error) {
        console.error("Ett fel uppstod när starters skulle läggas till: ", error);
    }

    // Omdirigera till startsidan
    window.location.href = "index.html";
} */

/* UPPDATERA DATA - CRUD UPDATE/PUT */

/* // Hämta data med id
async function getStartersById(id) {
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av starters: ", error);
    }
}

// Uppdatera data
async function updateStarters(id, name, description, price) {

    // Payload
    let starters = {
        name: name,
        description: description,
        price: price,
    };

    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });
        const data = await response.json();
        console.table(data);

    } catch (error) {
        console.error("Ett fel uppstod vid uppdatering av starters: ", error);
    }
    // Omdirigera till startsidan
    window.location.href = "index.html";
} */

/* RADERA DATA - CRUD DELETE/DELETE */

/* // Radera arbetserfarenheter med meddelande
async function deleteStarters(id) {
    if (!id) {
        console.error("Ingen id angiven för radering av starters.");
        return;
    }

    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Något gick fel: ${response.statusText}`);
        }

        console.log("Starters raderad");
        displayMessage("Starters raderad");

        await getStarters();
    } catch (error) {
        console.error("Ett fel uppstod vid radering av starters: ", error);
    }
} */

/* // Meddelande för raderade starters
function displayMessage(message) {
    let messageContainer = document.getElementById("message-container");
    messageContainer.innerText = message;
}

// Formatera datumsträng till format yyyy-mm-dd
function formatDate(dateString) {
    let date = new Date(dateString);
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
}
    */
/* Varma rätter */

let urlDrinks = "http://localhost:3001/api/drinks";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut data finns
    if (document.getElementById("drinksList")) {
        // Om det finns, hämta data
        getDrinks();
    }

    /* // Kolla om element för att lägga till data finns
    if (document.getElementById("addMenuForm")) {
        // Om det finns, lägg till en händelselyssnare på "Lägg till"-knappen
        document.getElementById("addMenuForm").addEventListener("submit", function (event) {
            event.preventDefault();
            let form = event.target;

            // Kalla på funktionen för att lägga till data
            createStarters(
                form.name.value,
                form.description.value,
                form.price.value
            );
        });
    }

    // Kolla om element för att uppdatera data finns
    if (document.getElementById("updateMenuForm")) {
        // Om det finns, lägg en händelselyssnare på knappen "Uppdatera"
        document.getElementById("updateMenuForm").addEventListener("submit", async function (event) {
            event.preventDefault();
            let form = event.target;
            let id = form.dataset.id;

            // Kalla på funktionen för att uppdatera data från formulär
            await updateStarters(
                id,
                form.name.value,
                form.description.value,
                form.price.value
            );
        });

        // När webbläsarfönstret laddas..
        window.onload = async function () {
            // Hämta URL-parametrar med formulärdata
            let params = new URLSearchParams(window.location.search);
            let id = params.get("id");
            if (id) {
                let dataset = await getStartersById(id);
                document.getElementById("updateMenuForm").dataset.id = id;
                document.getElementById("name").value = dataset.name;
                document.getElementById("description").value = dataset.description;
                document.getElementById("price").value = dataset.price;
            }
        };
    }
});

*/

/* HÄMTA DATA - CRUD READ/GET */

// Hämta data och läs ut till skärmen
async function getDrinks() {
    try {
        const response = await fetch(urlDrinks);
        const data = await response.json();

        // Skriv ut till DOM
        let list = document.getElementById("drinksList");
        list.innerHTML = "";

        data.forEach(item => {
            let listItem = document.createElement("li");

            let name = document.createElement("div");
            name.className = "name";
            name.textContent = `${item.name}`;
            listItem.appendChild(name);

            let description = document.createElement("div");
            description.className = "description";
            description.textContent = `${item.description}`;
            listItem.appendChild(description);

            let price = document.createElement("div");
            price.className = "price";
            price.textContent = `${item.price} kr`;
            listItem.appendChild(price);

            list.appendChild(listItem);
        });

    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av starters: ", error);
    }
}
});

/* LÄGG TILL DATA - CRUD CREATE/POST */

/* // Lägg till ny data
async function createStarters(name, description, price) {

    let starters = {
        name: name,
        description: description,
        price: price
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });

        const data = await response.json();
        console.table(data);

        await getStarters();

    } catch (error) {
        console.error("Ett fel uppstod när starters skulle läggas till: ", error);
    }

    // Omdirigera till startsidan
    window.location.href = "index.html";
} */

/* UPPDATERA DATA - CRUD UPDATE/PUT */

/* // Hämta data med id
async function getStartersById(id) {
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av starters: ", error);
    }
}

// Uppdatera data
async function updateStarters(id, name, description, price) {

    // Payload
    let starters = {
        name: name,
        description: description,
        price: price,
    };

    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });
        const data = await response.json();
        console.table(data);

    } catch (error) {
        console.error("Ett fel uppstod vid uppdatering av starters: ", error);
    }
    // Omdirigera till startsidan
    window.location.href = "index.html";
} */

/* RADERA DATA - CRUD DELETE/DELETE */

/* // Radera arbetserfarenheter med meddelande
async function deleteStarters(id) {
    if (!id) {
        console.error("Ingen id angiven för radering av starters.");
        return;
    }

    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Något gick fel: ${response.statusText}`);
        }

        console.log("Starters raderad");
        displayMessage("Starters raderad");

        await getStarters();
    } catch (error) {
        console.error("Ett fel uppstod vid radering av starters: ", error);
    }
} */

/* // Meddelande för raderade starters
function displayMessage(message) {
    let messageContainer = document.getElementById("message-container");
    messageContainer.innerText = message;
}

// Formatera datumsträng till format yyyy-mm-dd
function formatDate(dateString) {
    let date = new Date(dateString);
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
}
    */
