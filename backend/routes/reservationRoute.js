const express = require('express');
const ReservationController = require('../controllers/reservationController');

const router = express.Router();

router.post('/submit', ReservationController.submitReservation);

module.exports = router;
