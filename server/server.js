const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
