const messageRoutes = require('./routes/messageRoutes');
const clientRoutes = require('./routes/clientRoutes');
const gerantRoutes = require('./routes/gerantRoute');
const reservationRoute = require('./routes/reservationRoute');
const commandeRoute = require('./routes/commandeRoute');


const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', clientRoutes);
app.use('/gerant', gerantRoutes);
app.use('/messages', messageRoutes);
app.use('/reservation', reservationRoute);
app.use('/commande', commandeRoute);

app.listen(5000, () => {
  console.log('Welcome to my server');
});
