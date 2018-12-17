const express = require("express");
const app = express();
const PORT = 3000;

const todos = [
  'Get up!',
  'Enjoy the day.',
  'Dream',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', { data: todos });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
