document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        const nom = document.getElementById('nom').value;
        const plat = document.getElementById('plat').value;
        const dateCommande = document.getElementById('date').value;

        const formData = {
            nom: nom,
            plat: plat,
            dateCommande: dateCommande
        };

        fetch("http://localhost:5000/commande/submit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(`Mr./Mme ${nom}, Votre plat a été commandé avec succès`);
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
});
