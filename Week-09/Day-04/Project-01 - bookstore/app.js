"use strict";

require('dotenv').config();

const mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());

const mySqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD
});

app.use("/static", express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/author', (req, res) => {
  const sql = 'SELECT * FROM author'
  mySqlConnection.query(sql, (error, data) => {
    if (error) {
      console.log(error.message);
      res.status(500).json({ error: 'internal server issue' });
      return;
    }
    res.json(data);
  });
});

app.listen(PORT, () => console.log(`Server is listening on: ${PORT}`));
