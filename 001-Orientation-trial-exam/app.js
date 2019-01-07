'use strict';

const express = require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");
const PORT = 3000;

//dotenv + express
require('dotenv').config();
app.use(express.json());

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

// Check if connection works
mySqlConnection.connect(function (err) {
  if (err) {
    console.log(err.message);
    return;
  };
  console.log('Connection established');
});
mySqlConnection.end();

//listen to PORT
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
