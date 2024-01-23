const dataBase = require("../config/mysql");

exports.submitReservation = (req, res) => {
    const { nom, dateArrivee, dateDepart, typeChambre } = req.body;

    const getClientIdQuery = "SELECT id_client FROM clients WHERE nom_client = ?";

    dataBase.query(getClientIdQuery, [nom], (getClientError, clientResult) => {
        if (getClientError) {
            return res.status(500).json({ error: "Erreur interne du serveur lors de la recherche du client" });
        }

        if (clientResult.length === 0) {
            return res.status(400).json({ error: "Client non trouvé" });
        }

        const clientId = clientResult[0].id_client;

        const getAvailableRoomQuery = "SELECT id_chambre FROM chambres WHERE type_chambre = ? AND statut_chambre = 'D' ORDER BY RAND() LIMIT 1";

        dataBase.query(getAvailableRoomQuery, [typeChambre], (getRoomError, roomResult) => {
            if (getRoomError) {
                return res.status(500).json({ error: "Erreur interne du serveur lors de la recherche de la chambre disponible" });
            }

            if (roomResult.length === 0) {
                return res.status(400).json({ error: "Toutes les chambres de ce type sont déjà attribuées" });
            }

            const roomId = roomResult[0].id_chambre;

            const updateRoomQuery = "UPDATE chambres SET statut_chambre = 'O', id_client = ? WHERE id_chambre = ?";
            dataBase.query(updateRoomQuery, [clientId, roomId], (updateError) => {
                if (updateError) {
                    return res.status(500).json({ error: "Erreur interne du serveur lors de la mise à jour de la chambre" });
                }

                const insertReservationQuery = "INSERT INTO reservations (id_client, id_chambre, date_debut, date_fin) VALUES (?, ?, ?, ?)";
                dataBase.query(insertReservationQuery, [clientId, roomId, dateArrivee, dateDepart], (insertError) => {
                    if (insertError) {
                        return res.status(500).json({ error: "Erreur interne du serveur lors de l'insertion de la réservation" });
                    }

                    return res.status(201).json({ message: "Réservation effectuée avec succès" });
                });
            });
        });
    });
};
