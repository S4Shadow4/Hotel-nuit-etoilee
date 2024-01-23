const express = require('express');
const MessageController = require('../controllers/messageController');

const router = express.Router();

router.post('/send', MessageController.send);

module.exports = router;
