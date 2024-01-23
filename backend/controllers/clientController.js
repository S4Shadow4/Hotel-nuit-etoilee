const dataBase = require("../config/mysql");

exports.signup = (req, res) => {
    const insertClientQuery = "INSERT INTO `clients` (nom_client, prenom_client, age_client, sexe_client, password_client, contact_client) VALUES (?, ?, ?, ?, ?, ?)";

    dataBase.query(insertClientQuery, [
        req.body.lastName,
        req.body.firstName,
        req.body.age,
        req.body.gender,
        req.body.password,
        req.body.contact
    ], (error, result) => {
        if (error) {
            return res.status(401).json(error);
        }
        console.log("Client inscrit avec succès");
        return res.status(201).json({ id: result.insertId });
    });
};


exports.login = (req, res) => {
    console.log("Requête de connexion reçue:", req.body);

    let selectClientQuery = "SELECT * FROM `clients` WHERE nom_client =?";
    dataBase.query(selectClientQuery, [req.body.username], (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        if (result.length > 0) {

            if (result[0].password_client === req.body.password) {

                res.status(200).json({ message: "Authentification réussie" });
            } else {

                res.status(401).json({ error: "Mot de passe incorrect" });
            }
        } else {
            
            res.status(401).json({ error: "Utilisateur non trouvé" });
        }
    });
};

