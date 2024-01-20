-- Active: 1705767248744@@127.0.0.1@3306@hotel
-- Création de la table des clients
CREATE TABLE clients (
    id_client INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom_client VARCHAR(50),
    password_client VARCHAR(255),
    prenom_client VARCHAR(50),
    age_client INT,
    sexe_client VARCHAR(1),
    contact_client VARCHAR(20)
);
drop table clients;


CREATE TABLE gerants (
    id_gerant INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom_gerant VARCHAR(50),
    password_gerant VARCHAR(255),
    prenom_gerant VARCHAR(50),
    age_gerant INT,
    sexe_gerant VARCHAR(1),
    contact_gerant VARCHAR(20)
);
drop table gerants;


CREATE TABLE chambres (
    id_chambre INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    type_chambre VARCHAR(1), -- 'S' pour Standard, 'L' pour Luxueuse
    prix_chambre DECIMAL(8,2),
    statut_chambre VARCHAR(1) -- 'D' pour Disponible, 'O' pour Occupée
);

drop table chambres;


CREATE TABLE reservations (
    id_reservation INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_client INT UNSIGNED,
    id_chambre INT UNSIGNED,
    date_debut DATE,
    date_fin DATE,
    FOREIGN KEY (id_client) REFERENCES clients(id_client),
    FOREIGN KEY (id_chambre) REFERENCES chambres(id_chambre)
);

drop table reservations;

CREATE TABLE plats_commandes (
    id_commande INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_client INT UNSIGNED,
    plat_commande VARCHAR(255),
    date_commande DATETIME,
    FOREIGN KEY (id_client) REFERENCES clients(id_client)
);

drop table plats_commandes;

CREATE TABLE commentaires (
    id_commentaire INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_client INT UNSIGNED,
    commentaire_texte TEXT,
    date_commentaire DATETIME,
    FOREIGN KEY (id_client) REFERENCES clients(id_client)
);

drop table commentaires;

CREATE TABLE messages (
    id_message INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_sender INT UNSIGNED,
    id_receiver INT UNSIGNED,
    message_texte TEXT,
    date_message DATETIME,
    FOREIGN KEY (id_sender) REFERENCES clients(id_client),
    FOREIGN KEY (id_receiver) REFERENCES gerants(id_gerant)
);

drop table messages;