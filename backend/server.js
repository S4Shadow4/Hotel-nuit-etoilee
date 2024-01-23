const messageRoutes = require('./routes/messageRoutes');
const clientRoutes = require('./routes/clientRoutes');
const reservationRoutes = require('./routes/reservationRoute');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/messages', messageRoutes);
app.use('/user', clientRoutes);
app.use('/reservation', reservationRoutes);

app.listen(5000, () => {
  console.log('Welcome to my server');
});
