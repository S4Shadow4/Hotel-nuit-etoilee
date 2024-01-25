const dataBase = require("../config/mysql");

exports.submitCommande = (req, res) => {
    const {nom, plat, dateCommande } = req.body;

    //const nomClient = "NomDuClient";
    const getClientIdQuery = "SELECT id_client FROM `clients` WHERE nom_client = ?";

    dataBase.query(getClientIdQuery, [nom], (getClientError, clientResult) => {
        console.log("voici le nom du client:",nom);
        console.log("voici le nom du plat:",plat);
        console.log("voici la date de commande:",dateCommande);
        if (getClientError) {
            return res.status(500).json({ error: "Erreur interne du serveur lors de la recherche du client" });
        }

        if (clientResult.length === 0) {
            return res.status(400).json({ error: "Client non trouvé" });
        }

        const idClient = clientResult[0].id_client;

        const insertCommandeQuery = "INSERT INTO plats_commandes (id_client, plat_commande, date_commande) VALUES (?, ?, ?)";
        dataBase.query(insertCommandeQuery, [idClient, plat, dateCommande], (insertError) => {
            if (insertError) {
                return res.status(500).json({ error: "Erreur interne du serveur lors de l'insertion de la commande" });
            }

            return res.status(201).json({ message: "Commande effectuée avec succès" });
        });
    });
};
