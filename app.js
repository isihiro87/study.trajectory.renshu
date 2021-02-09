const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!!');
});

app.get('/top',(req,res) => {
  res.render('good.ejs');
});

app.listen(3000);
