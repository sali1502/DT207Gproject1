/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

"use strict";

/* Funktioner för att läsa ut, uppdatera och radera poster från menyn */

/* SMÅRÄTTER */

let urlStartersAdm = "http://localhost:3001/api/starters";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut smårätter finns
    if (document.getElementById("startersListAdm")) {
        // Om det finns, hämta smårätter
        getStartersAdm();
    }

// Hantera formulär för att skapa smårätter
const startersForm = document.getElementById('addMenuStarters');
if (startersForm) {
    startersForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const form = event.target;
        createStartersAdm(
            form.name.value,
            form.description.value,
            form.price.value
        );
    }); 
}

    // Kolla om element för att uppdatera smårätter finns
    if (document.getElementById("updateMenuForm")) {
        // Om det finns, lägg en händelselyssnare på knappen "Ändra"
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
        });

        // När webbläsarfönstret laddas..
        window.onload = async function () {
            // Hämta URL-parametrar med formulärdata
            let params = new URLSearchParams(window.location.search);
            let id = params.get("id");
            if (id) {
                let dataset = await getStartersByIdAdm(id);
                document.getElementById("updateMenuForm").dataset.id = id;
                document.getElementById("name").value = dataset.name;
                document.getElementById("description").value = dataset.description;
                document.getElementById("price").value = dataset.price;
            }
        };
    }
});

// Hämta smårätter och läs ut till skärmen på adminsidan med radera- och ändraknappar
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
            updateButton.onclick = () => {
                window.location.href = `admin.html?id=${item._id}#updateMenuForm`;
            };
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

// Lägg till en ny smårätt
async function createStartersAdm(name, description, price) {
    const starters = { name, description, price };
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
    window.location.href = "admin.html";
}

/* UPPDATERA DATA - CRUD UPDATE/PUT */

// Hämta smårätter med id
async function getStartersByIdAdm(id) {
    try {
        const response = await fetch(`${urlStartersAdm}/${id}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av smårätter: ", error);
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
            throw new Error(`Det gick inte att uppdatera smårätter: ${response.statusText}`);
        }

        const data = await response.json();
        console.table(data);

        await getStartersAdm();

    } catch (error) {
        console.error("Ett fel uppstod med uppdatering av smårätter: ", error);
    }

    window.location.href = "admin.html";
}

/* RADERA DATA - CRUD DELETE/DELETE */

// Radera smårätter
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

// Meddelande för raderade smårätter
function displayMessage(message) {
    let messageContainer = document.getElementById("message-container");
    messageContainer.innerText = message;
}



/* SALLAD */

let urlSalladsAdm = "http://localhost:3001/api/sallads";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut sallad finns
    if (document.getElementById("salladsListAdm")) {
        // Om det finns, hämta sallad
        getSalladsAdm();
    }

    const salladsForm = document.getElementById('addMenuSallads');
    if (salladsForm) {
        salladsForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const form = event.target;
            createSalladsAdm(
                form.name.value,
                form.description.value,
                form.price.value
            );
        });
    }

    // Kolla om element för att uppdatera sallad finns
    if (document.getElementById("updateMenuForm")) {
        // Om det finns, lägg en händelselyssnare på knappen "Ändra"
        document.getElementById("updateMenuForm").addEventListener("submit", async function (event) {
            event.preventDefault();
            let form = event.target;
            let id = form.dataset.id;

            await updateSalladsAdm(
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
                let dataset = await getSalladsByIdAdm(id);
                document.getElementById("updateMenuForm").dataset.id = id;
                document.getElementById("name").value = dataset.name;
                document.getElementById("description").value = dataset.description;
                document.getElementById("price").value = dataset.price;
            }
        };
    }
});

// Hämta sallad och läs ut till skärmen på adminsidan med radera- och ändraknappar
async function getSalladsAdm() {
    try {
        const response = await fetch(urlSalladsAdm);
        const data = await response.json();

        // Skriv ut till DOM
        let list = document.getElementById("salladsListAdm");
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
            updateButton.onclick = () => {
                window.location.href = `admin.html?id=${item._id}#updateMenuForm`;
            };
            buttonContainer.appendChild(updateButton);

            let deleteButton = document.createElement("button");
            deleteButton.className = "deleteBtn";
            deleteButton.textContent = "Radera";
            deleteButton.onclick = () => deleteSalladsAdm(item._id);
            buttonContainer.appendChild(deleteButton);

            listItem.appendChild(buttonContainer);
            list.appendChild(listItem);
        });

    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av sallad: ", error);
    }
}
/* LÄGG TILL DATA - CRUD CREATE/POST */

// Lägg till ny sallad
async function createSalladsAdm(name, description, price) {
    const sallads = { name, description, price };
    try {
        const response = await fetch(urlSalladsAdm, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(sallads)
        });
        const data = await response.json();
        console.table(data);
        await getSalladsAdm();
    } catch (error) {
        console.error("Ett fel uppstod när sallad skulle läggas till: ", error);
    }
    window.location.href = "admin.html";
}

/* UPPDATERA DATA - CRUD UPDATE/PUT */

// Hämta sallad med id
async function getSalladsByIdAdm(id) {
    try {
        const response = await fetch(`${urlSalladsAdm}/${id}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av sallad: ", error);
    }
}

async function updateSalladsAdm(id, name, description, price) {
    let sallads = {
        name: name,
        description: description,
        price: price,
    };

    try {
        const response = await fetch(`${urlSalladsAdm}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sallads),
        });

        if (!response.ok) {
            throw new Error(`Det gick inte att uppdatera sallad: ${response.statusText}`);
        }

        const data = await response.json();
        console.table(data);

        await getSalladsAdm();

    } catch (error) {
        console.error("Ett fel uppstod med uppdatering av sallad: ", error);
    }

    window.location.href = "admin.html";
}

/* RADERA DATA - CRUD DELETE/DELETE */

// Radera sallad
async function deleteSalladsAdm(id) {
    if (!id) {
        console.error("Ingen id angiven för radering av sallad");
        return;
    }

    try {
        const response = await fetch(`${urlSalladsAdm}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Något gick fel: ${response.statusText}`);
        }

        console.log("Sallad raderad!");
        displayMessage("Sallad raderad!");

        await getSalladsAdm();
    } catch (error) {
        console.error("Ett fel uppstod vid radering av sallad: ", error);
    }
}

// Meddelande för raderad sallad
function displayMessage(message) {
    let messageContainer = document.getElementById("message-container");
    messageContainer.innerText = message;
}


      
/* WARMS */

let urlWarmsAdm = "http://localhost:3001/api/warms";

document.addEventListener('DOMContentLoaded', (event) => {

    // Kolla om element för att skriva ut varmrätt finns
    if (document.getElementById("warmsListAdm")) {
        // Om det finns, hämta varmrätt
        getWarmsAdm();
    }

    const warmsForm = document.getElementById('addMenuWarms');
    if (warmsForm) {
        warmsForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const form = event.target;
            createWarmsAdm(
                form.name.value,
                form.description.value,
                form.price.value
            );
        });
    }

    // Kolla om element för att uppdatera varmrätt finns
    if (document.getElementById("updateMenuForm")) {
        // Om det finns, lägg en händelselyssnare på knappen "Ändra"
        document.getElementById("updateMenuForm").addEventListener("submit", async function (event) {
            event.preventDefault();
            let form = event.target;
            let id = form.dataset.id;

            await updateWarmsAdm(
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
                let dataset = await getWarmsByIdAdm(id);
                document.getElementById("updateMenuForm").dataset.id = id;
                document.getElementById("name").value = dataset.name;
                document.getElementById("description").value = dataset.description;
                document.getElementById("price").value = dataset.price;
            }
        };
    }
});

// Hämta varmrätt och läs ut till skärmen på adminsidan med radera- och ändraknappar
async function getWarmsAdm() {
    try {
        const response = await fetch(urlWarmsAdm);
        const data = await response.json();

        // Skriv ut till DOM
        let list = document.getElementById("warmsListAdm");
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
            updateButton.onclick = () => {
                window.location.href = `admin.html?id=${item._id}#updateMenuForm`;
            };
            buttonContainer.appendChild(updateButton);

            let deleteButton = document.createElement("button");
            deleteButton.className = "deleteBtn";
            deleteButton.textContent = "Radera";
            deleteButton.onclick = () => deleteWarmsAdm(item._id);
            buttonContainer.appendChild(deleteButton);

            listItem.appendChild(buttonContainer);
            list.appendChild(listItem);
        });

    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av varmrätt: ", error);
    }
}
/* LÄGG TILL DATA - CRUD CREATE/POST */

// Lägg till ny varmrätt
async function createWarmsAdm(name, description, price) {
    const warms = { name, description, price };
    try {
        const response = await fetch(urlWarmsAdm, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(warms)
        });
        const data = await response.json();
        console.table(data);
        await getWarmsAdm();
    } catch (error) {
        console.error("Ett fel uppstod när varmrätt skulle läggas till: ", error);
    }
    window.location.href = "admin.html";
}

/* UPPDATERA DATA - CRUD UPDATE/PUT */

// Hämta sallad med id
async function getWarmsByIdAdm(id) {
    try {
        const response = await fetch(`${urlWarmsAdm}/${id}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av varmrätt: ", error);
    }
}

async function updateWarmsAdm(id, name, description, price) {
    let warms = {
        name: name,
        description: description,
        price: price,
    };

    try {
        const response = await fetch(`${urlWarmsAdm}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(warms),
        });

        if (!response.ok) {
            throw new Error(`Det gick inte att uppdatera varmrätt: ${response.statusText}`);
        }

        const data = await response.json();
        console.table(data);

        await getWarmsAdm();

    } catch (error) {
        console.error("Ett fel uppstod med uppdatering av varmrätt: ", error);
    }

    window.location.href = "admin.html";
}

/* RADERA DATA - CRUD DELETE/DELETE */

// Radera varmrätt
async function deleteWarmsAdm(id) {
    if (!id) {
        console.error("Ingen id angiven för radering av varmrätt");
        return;
    }

    try {
        const response = await fetch(`${urlWarmsAdm}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Något gick fel: ${response.statusText}`);
        }

        console.log("Varmrätt raderad!");
        displayMessage("Varmrätt raderad!");

        await getWarmsAdm();
    } catch (error) {
        console.error("Ett fel uppstod vid radering av varmrätt: ", error);
    }
}

// Meddelande för raderad varmrätt
function displayMessage(message) {
    let messageContainer = document.getElementById("message-container");
    messageContainer.innerText = message;
}        
    
