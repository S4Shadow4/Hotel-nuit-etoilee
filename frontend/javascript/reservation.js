document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        const nom = document.getElementById('nom').value;
        const typeChambre = document.getElementById('type_chambre').value;
        const dateArrivee = document.getElementById('date_arrivee').value;
        const dateDepart = document.getElementById('date_depart').value;

        const formData = {
            nom: nom,
            type_chambre: typeChambre,
            dateArrivee: dateArrivee,
            dateDepart: dateDepart
        };

        fetch("http://localhost:5000/reservation/submit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
});
