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

app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

app.get(`/api/game`, (req, res) => {
  const mySql = `SELECT * FROM questions ORDER BY RAND() LIMIT 1;`;
  conn.query(mySql, (error, data) => {
    if (error) {
      console.log(error.message);
      res.status(500).json({ error: 'internal server error' });
      return;
    }
    const [{ id, question }] = data;
    const sqlAnswers = `SELECT * FROM answers WHERE question_id = ${id};`;
    conn.query(sqlAnswers, (error, aswerOpotions) => {
      if (error) {
        console.log(error.message);
        res.status(500).json({ error: 'internal server error' });
        return;
      }
      res.json({
        id: id,
        question: question,
        asnwers: aswerOpotions
      });
    });
  });
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, 'questions.html'));
});

app.get(`/api/questions`, (req, res) => {
  const sqlAll = `SELECT * FROM questions;`;
  conn.query(sqlAll, (error, data) => {
    if (error) {
      console.log(error.message);
      res.status(500).json({ error: 'internal server error' });
      return;
    }
    res.json(data);
  });
});



app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
