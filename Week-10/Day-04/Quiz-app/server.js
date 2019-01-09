'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'quiz',
  port: 3306
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.use('/static', express.static('static')); //maybe another one will be needed? 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, 'questions.html'));
});

















app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
