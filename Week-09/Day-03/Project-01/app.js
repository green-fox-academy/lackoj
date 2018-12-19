"use strict";
const express = require("express");
const app = express();
const path = require('path');
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const { input } = req.query; //= req.query.input
  if (input) {
    const resObj = {
      'received': input,
      'result': input * 2
    }
    res.json(resObj);
  } else {
    res.json({ 'error': "Please provide an input!" });
  }
});

app.get('/greeter', (req, res) => {
  const { name } = req.query;
  const { title } = req.query;
  if (name && title) {
    const resObj = {
      "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
    }
    res.json(resObj);
  } else if (!name) {
    res.json({
      "error": "Please provide a name!"
    });
  } else if (!title) {
    res.json({
      "error": "Please provide a title!"
    });
  }
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});