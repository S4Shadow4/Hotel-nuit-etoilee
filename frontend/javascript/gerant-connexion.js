document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    document.querySelector('#inscription-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const lastName = document.getElementById('lastName').value;
        const firstName  = document.getElementById('firstName').value;
        const age  = document.getElementById('age').value;
        const genderSelect = document.getElementById('gender');
        const gender = genderSelect.options[genderSelect.selectedIndex].value;
        const password = document.getElementById('password').value;
        const contact = document.getElementById('contact').value;

        const formData = {
            lastName: lastName,
            firstName: firstName,
            age: age,
            gender: gender,
            password: password,
            contact: contact
        };

        console.log(formData);

        fetch("http://localhost:5000/gerant/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(`Mr./Mme ${lastName}, Votre inscription s'est réalisée sans encombre`);
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });

    document.querySelector('#connexion-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const formData = {
            username: username,
            password: password
        };

        fetch("http://localhost:5000/gerant/connexion", {
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
                window.location.href = '../html/gerant.html';
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
