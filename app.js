const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('こんにちは');
});

app.listen(3000);
