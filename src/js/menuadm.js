/* Projekt DT207G VT24, Åsa Lindskog, sali1502@student.miun.se */

"use strict";

/* Funktioner för att läsa ut, uppdatera och radera poster från menyn */
         
/* Smårätter */
let urlStartersAdm = "http://localhost:3001/api/starters";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut data finns
    if (document.getElementById("startersListAdm")) {
        // Om det finns, hämta data
        getStartersAdm();
    }

    // Kolla om element för att lägga till data finns
    if (document.getElementById("addMenuForm")) {
        // Om det finns, lägg till en händelselyssnare på "Lägg till"-knappen
        document.getElementById("addMenuForm").addEventListener("submit", function (event) {
            event.preventDefault();
            let form = event.target;

            // Kalla på funktionen för att lägga till data
            createStartersAdm (
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
    
            await updateStartersAdm(
                id,
                form.name.value,
                form.description.value,
                form.price.value
            );
    
            updateModal.style.display = 'none';
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

// Hämta data och läs ut till skärmen
async function getStartersAdm() {
    try {
        const response = await fetch(urlStartersAdm);
        const data = await response.json();

        // Skriv ut till DOM
        let list = document.getElementById("startersListAdm");
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

            let buttonContainer = document.createElement("div");
            buttonContainer.className = "button-container";

            let updateButton = document.createElement("button");
            updateButton.className = "updateBtn";
            updateButton.textContent = "Ändra";
            updateButton.setAttribute('data-id', item._id);
            buttonContainer.appendChild(updateButton);

            let deleteButton = document.createElement("button");
            deleteButton.className = "deleteBtn";
            deleteButton.textContent = "Radera";
            deleteButton.onclick = () => deleteStartersAdm(item._id);
            buttonContainer.appendChild(deleteButton);

            listItem.appendChild(buttonContainer);
            list.appendChild(listItem);
        });

    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av smårätter: ", error);
    }
}

/* LÄGG TILL DATA - CRUD CREATE/POST */

// Lägg till ny data
async function createStartersAdm(name, description, price) {

    let starters = {
        name: name,
        description: description,
        price: price
    }

    try {
        const response = await fetch(urlStartersAdm, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(starters)
        });

        const data = await response.json();
        console.table(data);

        await getStartersAdm();

    } catch (error) {
        console.error("Ett fel uppstod när smårätter skulle läggas till: ", error);
    }

    // Omdirigera till startsidan
    window.location.href = "admin.html";
}

/* UPPDATERA DATA - CRUD UPDATE/PUT */

// Hämta data med id
async function getStartersById(id) {
    try {
        const response = await fetch(`${urlStartersAdm}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching starter by ID: ", error);
    }
}

async function updateStartersAdm(id, name, description, price) {
    let starters = {
        name: name,
        description: description,
        price: price,
    };

    try {
        const response = await fetch(`${urlStartersAdm}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(starters),
        });

        if (!response.ok) {
            throw new Error(`Det gick inte att uppdatera post: ${response.statusText}`);
        }

        const data = await response.json();
        console.table(data);

        await getStartersAdm();

    } catch (error) {
        console.error("Error updating starter: ", error);
    }

    updateModal.style.display = 'none';
    window.location.href = "admin.html";
}

/* RADERA DATA - CRUD DELETE/DELETE */
// Radera data
async function deleteStartersAdm(id) {
    if (!id) {
        console.error("Ingen id angiven för radering av smårätter");
        return;
    }

    try {
        const response = await fetch(`${urlStartersAdm}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Något gick fel: ${response.statusText}`);
        }

        console.log("Smårätter raderad!");
        displayMessage("Smårätter raderad!");

        await getStartersAdm();
    } catch (error) {
        console.error("Ett fel uppstod vid radering av smårätter: ", error);
    }
}

// Meddelande för raderade starters
function displayMessage(message) {
    let messageContainer = document.getElementById("message-container");
    messageContainer.innerText = message;
}

            
            
            
            
            
            
            
            
            
            
            
            
    