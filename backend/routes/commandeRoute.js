const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');

router.post('/submit', commandeController.submitCommande);

module.exports = router;
