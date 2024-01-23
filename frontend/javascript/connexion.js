document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const formData = {
            username: username,
            password: password
        };

        fetch("http://localhost:5000/user/connexion", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                console.log(response.formData);
                console.log("ok");
                window.location.href = '../html/Accueil2.html';
                let owner = formData.username;
                alert("Bienvenue " + owner);
            } else {
                console.error("Échec de l'authentification");
                alert("Mauvaise combinaison utilisateur ou mot de passe");
            }
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
});
