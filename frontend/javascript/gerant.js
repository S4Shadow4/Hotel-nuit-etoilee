/* // Variables liées au menu
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');
const commandesLink = document.getElementById('Commandes');
const reservationsLink = document.querySelector('a[href="#"]:nth-child(2)');
const reservationsTableBody = document.getElementById('reservationsTableBody');
const commandesTableBody = document.getElementById('commandeTableBody');

// Écouteurs d'événements pour le menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Événement lié au lien "Réservation"
reservationsLink.addEventListener('click', () => {
    // Chargement des informations depuis le serveur
    fetch("http://localhost:5000/gerant/informations")
        .then(response => response.json())
        .then(data => {
            // Efface le contenu actuel du tbody
            reservationsTableBody.innerHTML = '';

            // Remplit le tbody avec les nouvelles données
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.sexe}</td>
                    <td>${item.age}</td>
                    <td>${item.roomId}</td>
                    <td>${item.price}</td>
                    <td>${item.status}</td>
                    <td>${item.dateArrivee}</td>
                    <td>${item.dateDepart}</td>
                `;
                reservationsTableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Erreur lors de la récupération des informations de réservation:", error));
});

// Fonction pour récupérer les informations des commandes
function fetchCommandesInformation() {
    fetch("http://localhost:5000/gerant/informations")
        .then(response => response.json())
        .then(data => {
            // Efface le contenu actuel du tbody
            commandesTableBody.innerHTML = '';

            // Remplit le tbody avec les nouvelles données
            data.forEach(item => {
                const commandesRow = document.createElement('tr');
                commandesRow.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.roomId}</td>
                    <td>${item.price}</td>
                    <td>${item.status}</td>
                    <td>${item.platCommande}</td>
                    <td>${item.dateCommande}</td>
                `;
                commandesTableBody.appendChild(commandesRow);
            });
        })
        .catch(error => console.error("Erreur lors de la récupération des informations des commandes:", error));
}

// Événement lié au lien "Commandes"
commandesLink.addEventListener('click', fetchCommandesInformation);
 */

// Variables liées au menu
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');
const commandesLink = document.getElementById('Commandes');
const reservationsLink = document.querySelector('a[href="#"]:nth-child(2)');
const reservationsTableBody = document.getElementById('reservationsTableBody');
const commandesTableBody = document.getElementById('commandeTableBody');

// Écouteurs d'événements pour le menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Événement lié au lien "Réservation"
reservationsLink.addEventListener('click', () => {
    // Chargement des informations depuis le serveur
    fetch("http://localhost:5000/gerant/informations")
        .then(response => response.json())
        .then(data => {
            // Efface le contenu actuel du tbody
            reservationsTableBody.innerHTML = '';

            // Remplit le tbody avec les nouvelles données
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.sexe}</td>
                    <td>${item.age}</td>
                    <td>${item.roomId}</td>
                    <td>${item.price}</td>
                    <td>${item.status}</td>
                    <td>${item.dateArrivee}</td>
                    <td>${item.dateDepart}</td>
                `;
                reservationsTableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Erreur lors de la récupération des informations de réservation:", error));
});

function fetchCommandesInformation() {
    fetch("http://localhost:5000/gerant/informations")
        .then(response => response.json())
        .then(data => {
            console.log('Server Response:', data);

            // Vérifiez si data est un tableau
            const dataArray = Array.isArray(data) ? data : [data];

            // Efface le contenu actuel du tbody
            commandesTableBody.innerHTML = '';

            // Remplit le tbody avec les nouvelles données
            dataArray.forEach(item => {
                const commandesRow = document.createElement('tr');
                commandesRow.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.roomId}</td>
                    <td>${item.price}</td>
                    <td>${item.status}</td>
                    <td>${item.platCommande}</td>
                    <td>${item.dateCommande}</td>
                `;
                commandesTableBody.appendChild(commandesRow);
            });
        })
        .catch(error => console.error("Erreur lors de la récupération des informations des commandes:", error));
}


// Événement lié au lien "Commandes"
commandesLink.addEventListener('click', fetchCommandesInformation);
