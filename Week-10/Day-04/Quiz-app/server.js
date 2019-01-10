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
        answers: aswerOpotions
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

app.post('/questions', (req, res) => {
  const { question, answers, idnexOfTrue } = req.body;
  let isCorrect = 0;

  if (!question || !answers) { //set required for Radio bttn-s
    res.json({
      message: 'All fields are required.'
    });
    return;
  } else {
    const sqlAddQuestion = `INSERT INTO questions (question) VALUES ('${question}');`
    conn.query(sqlAddQuestion, (error, data) => {
      if (error) {
        console.log(error.message);
        res.status(501).json({ error: 'internal server error1' });
        return;
      }
      const sqlInsetrtedId = `SELECT * FROM questions WHERE question = '${question}';`;
      conn.query(sqlInsetrtedId, (error, insertedData) => {
        if (error) {
          console.log(error.message);
          res.status(502).json({ error: 'internal server error2' });
          return;
        }
        const newID = insertedData[0].id;
        answers.forEach((answer, index) => {
          if (index === idnexOfTrue) {
            isCorrect = 1;
          } else {
            isCorrect = 0;
          }
          const sqlAddAnswers = `INSERT INTO answers (question_id, answer, is_correct) VALUES ('${newID}','${answer}', '${isCorrect}');`
          conn.query(sqlAddAnswers, (error, data) => {
            if (error) {
              console.log(error.message);
              res.status(503).json({ error: 'internal server error3' });
              return;
            }
          });
        });
        res.json({
          message: "Sucessfully added all"
        });
      });
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

app.delete('/questions/:id', (req, res) => {
  const { id } = req.params;
  const sqlDeleteQuestion = `DELETE FROM questions WHERE id = '${id}';`;
  const sqlDeleteAnswers = `DELETE FROM answers WHERE question_id = '${id}';`;

  conn.query(sqlDeleteQuestion, (error, data) => {
    if (error) {
      console.log(error.message);
      res.status(500).json({ error: 'internal server error' });
      return;
    }
    conn.query(sqlDeleteAnswers, (error, data) => {
      if (error) {
        console.log(error.message);
        res.status(500).json({ error: 'internal server error' });
        return;
      }
      res.json({
        message: `Question & related answers have been deleted.`
      });
    });
  });
});
