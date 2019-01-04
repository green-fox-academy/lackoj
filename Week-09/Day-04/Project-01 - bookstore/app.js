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

app.post('/author', (req, res) => {
  const { aut_id, aut_name, country, home_city } = req.body;
  if (
    aut_id === undefined || aut_id === '' ||
    aut_name === undefined || aut_name === '' ||
    country === undefined || country === '' ||
    home_city === undefined || home_city === '') {
    res.json({
      message: 'All fields are required.'
    })
  } else {
    const sql = 'INSERT INTO author (aut_id, aut_name, country, home_city) VALUES (?, ?, ?, ?);'
    const newData = [aut_id, aut_name, country, home_city];
    mySqlConnection.query(sql, newData, (error, data) => {
      if (error) {
        console.log(error.message);
        res.status(500).json({ error: 'internal server issue' });
        return;
      }
      res.json({
        message: 'Sucessfully added'
      });
    });
  }
});

app.delete('/author', (req, res) => {
  const { aut_id } = req.body;
  const sqlCheck = `SELECT * FROM author;`;

  mySqlConnection.query(sqlCheck, (error, rows) => {
    if (error) {
      console.log(error.message);
      res.status(500).json({ error: 'internal server issue' });
      return;
    }
    if (rows.find(data => data.aut_id === aut_id)) {
      const sql = `DELETE FROM author WHERE aut_id = '${aut_id}';`;
      mySqlConnection.query(sql, (error, data) => {
        if (error) {
          console.log(error.message);
          res.status(500).json({ error: 'internal server issue' });
          return;
        }
        res.json({
          message: 'Succesfully deleted'
        });
      });
    } else {
      res.json({
        message: 'Wrong ID'
      });
    };
  });
});

app.listen(PORT, () => console.log(`Server is listening on: ${PORT}`));
