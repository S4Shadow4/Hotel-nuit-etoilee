document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        const lastName = document.getElementById('lastName').value;
        const firstName = document.getElementById('firstName').value;
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
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

        fetch("http://localhost:5000/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(`Mr./Mme ${lastName}, Votre inscription s'est realisé sans encombre`);
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
});
