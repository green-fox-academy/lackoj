"use strict";
const express = require("express");
const app = express();
const path = require('path');
const bp = require('body-parser');
const PORT = 8080;

app.use(bp());
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

app.get('/appenda/:word', (req, res) => {
  const word = req.params.word;
  if (word) {
    res.json({ 'appended': word + "a" });
  } else {
    res.status(404).send();
  }
});

const factorio = (par) => {
  let fac = 1;
  for (let i = par; i > 0; i--) {
    fac *= i;
  }
  return fac;
}

const sum = (par) => {
  let summ = 0;
  for (let i = 0; i <= par; i++) {
    summ += i;
  }
  return summ;
}

app.post('/dountil/:action', (req, res) => {
  const { action } = req.params;
  if (action == 'sum') {
    res.json({ 'result': sum(req.body.until) });
  } if (action == 'factor') {
    res.json({ 'result': factorio(req.body.until) });
  } else {
    res.json('error: please provide input');
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
