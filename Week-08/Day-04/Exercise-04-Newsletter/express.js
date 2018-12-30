"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', function (req, res) {
  console.log(req.body.username);
  //res.json({ msg: "Testing" });
});

app.listen(3000, () => console.log('Application is listening on port 3000'));
