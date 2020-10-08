const express = require('express');
const component = require('./template.js');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.get('/:id', (req, res) => {
  res.send(component);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
