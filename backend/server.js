const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const dataBase = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'hotel',
  host: 'localhost',
});

dataBase.connect((Error) => {
  if (Error) throw Error;
  console.log('connect to database successfully');
});

app.use((req, res) => {
  res.status(201).json('hehoo');
});
 
app.listen(5000, () => {
  console.log('Welcome to my server');
});
