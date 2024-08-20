/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */


"use strict";

/* Funktion för att hämta och skriva ut meny till sidan för besökare */

/* SMÅRÄTTER */

let urlStarters = "http://localhost:3001/api/starters";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut smårätter finns
    if (document.getElementById("startersList")) {
        // Om det finns, hämta smårätter
        getStarters();
    }

    // Hämta smårätter och läs ut till skärmen
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

/* SALLAD */

let urlSallads = "http://localhost:3001/api/sallads";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut sallad finns
    if (document.getElementById("salladsList")) {
        // Om det finns, hämta sallad
        getSallads();
    }

    // Hämta sallad och läs ut till skärmen
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
            console.error("Ett fel uppstod vid hämtning av sallad: ", error);
        }
    }
});

/* VARMA RÄTTER */

let urlWarms = "http://localhost:3001/api/warms";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut varmrätter finns
    if (document.getElementById("warmsList")) {
        // Om det finns, hämta varmrätter
        getWarms();
    }

    // Hämta varmrätter och läs ut till skärmen
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
            console.error("Ett fel uppstod vid hämtning av varmrätt: ", error);
        }
    }
});

/* DESSERT */
let urlDesserts = "http://localhost:3001/api/desserts";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut dessert finns
    if (document.getElementById("dessertsList")) {
        // Om det finns, hämta dessert
        getDesserts();
    }

    // Hämta dessert och läs ut till skärmen
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
            console.error("Ett fel uppstod vid hämtning av dessert: ", error);
        }
    }
});


/* DRYCK */
let urlDrinks = "http://localhost:3001/api/drinks";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut dryck finns
    if (document.getElementById("drinksList")) {
        // Om det finns, hämta dryck
        getDrinks();
    }

    // Hämta dryck och läs ut till skärmen
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
            console.error("Ett fel uppstod vid hämtning av dryck: ", error);
        }
    }
});

