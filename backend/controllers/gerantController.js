const dataBase = require("../config/mysql");

exports.signup = (req, res) => {
    const checkExistingGerantQuery = "SELECT * FROM `gerants` WHERE nom_gerant = ? AND prenom_gerant = ?";
    
    dataBase.query(checkExistingGerantQuery, [req.body.lastName, req.body.firstName], (checkError, checkResults) => {
        if (checkError) {
            return res.status(500).json(checkError);
        }

        if (checkResults.length > 0) {
            return res.status(409).json({ error: "Le gérant existe déjà dans la base de données." });
        } else {
            
            const insertGerantQuery = "INSERT INTO `gerants` (nom_gerant, prenom_gerant, age_gerant, sexe_gerant, password_gerant, contact_gerant) VALUES (?, ?, ?, ?, ?, ?)";

            dataBase.query(insertGerantQuery, [
                req.body.lastName,
                req.body.firstName,
                req.body.age,
                req.body.gender,
                req.body.password,
                req.body.contact
            ], (insertError, result) => {
                if (insertError) {
                    return res.status(401).json(insertError);
                }
                console.log("Gérant inscrit avec succès");
                return res.status(201).json({ id: result.insertId });
            });
        }
    });
};



exports.login = (req, res) => {
    console.log("Requête de connexion reçue:", req.body);

    let selectGerantQuery = "SELECT * FROM `gerants` WHERE nom_gerant =?";
    dataBase.query(selectGerantQuery, [req.body.username], (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        if (result.length > 0) {

            if (result[0].password_gerant === req.body.password) {

                res.status(200).json({ message: "Authentification réussie" });
            } else {

                res.status(401).json({ error: "Mot de passe incorrect" });
            }
        } else {
            
            res.status(401).json({ error: "Utilisateur non trouvé" });
        }
    });
};

  /* exports.getInformations = (req, res) => {
    const selectInformationsQuery = `
        SELECT 
            c.nom_client, 
            c.sexe_client, 
            c.age_client, 
            r.id_chambre, 
            ch.prix_chambre, 
            ch.statut_chambre, 
            r.date_debut, 
            r.date_fin
        FROM 
            clients c
        JOIN 
            reservations r ON c.id_client = r.id_client
        JOIN 
            chambres ch ON r.id_chambre = ch.id_chambre;`;

    dataBase.query(selectInformationsQuery, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        }


        const responseData = result.map(item => ({
            name: item.nom_client,
            sexe: item.sexe_client,
            age: item.age_client,
            roomId: item.id_chambre,
            price: item.prix_chambre,
            status: item.statut_chambre,
            dateArrivee: item.date_debut,
            dateDepart: item.date_fin
        }));

        return res.status(200).json(responseData);
    });
}; 


 */

exports.getInformations = (req, res) => {
    const selectInformationsQuery = `
        SELECT 
            c.nom_client, 
            c.sexe_client, 
            c.age_client, 
            r.id_chambre, 
            ch.prix_chambre, 
            ch.statut_chambre, 
            r.date_debut, 
            r.date_fin,
            pc.plat_commande,
            pc.date_commande
        FROM 
            clients c
        JOIN 
            reservations r ON c.id_client = r.id_client
        JOIN 
            chambres ch ON r.id_chambre = ch.id_chambre
        LEFT JOIN
            plats_commandes pc ON c.id_client = pc.id_client;`;

    dataBase.query(selectInformationsQuery, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        }

        const responseData = result.map(item => ({
            name: item.nom_client,
            sexe: item.sexe_client,
            age: item.age_client,
            roomId: item.id_chambre,
            price: item.prix_chambre,
            status: item.statut_chambre,
            dateArrivee: item.date_debut,
            dateDepart: item.date_fin,
            platCommande: item.plat_commande || null,
            dateCommande: item.date_commande || null
        }));

        return res.status(200).json(responseData);
    });
};
