'use strict';

const mysql = require("mysql");
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

//dotenv + express + static
require('dotenv').config();
app.use(express.json());
app.use('/static', express.static('static'));

//send html file to Localhost
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//create connection 
const mySqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

const generateSecretCode = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

// Check if connection works
mySqlConnection.connect(function (err) {
  if (err) {
    console.log(err.message);
    return;
  };
  console.log('Connection established');
});

app.post('/api/links', (req, res) => {
  const sql = 'SELECT * FROM urls';
  const { url, alias } = req.body;

  mySqlConnection.query(sql, (error, data) => {
    if (error) {
      console.log(error.message);
      res.status(500).json({ error: 'internal server issue' });
      return;
    }
    if (data.find(e => e.alias === alias)) {
      res.status(400).json({
        message: `The "${alias}" is already in use`
      });
    } else {
      const secretCode = generateSecretCode();
      const sqlAdd = `INSERT INTO urls (url, alias, secretCode) VALUES ('${url}',"${alias}","${secretCode}");`;
      mySqlConnection.query(sqlAdd, (error, insertData) => {
        if (error) {
          console.log(error.message);
          res.status(500).json({ error: 'internal server issue' });
          return;
        };
        const newSql = `SELECT * FROM urls WHERE id = ${insertData.insertId};`;
        mySqlConnection.query(newSql, (error, newData) => {
          if (error) {
            console.log(error.message);
            res.status(500).json({ error: 'internal server issue' });
            return;
          };
          res.json(newData);
        });
      });
    };
  });
});

//listen to PORT
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
