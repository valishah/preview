import logger from 'morgan';
const express = require('express');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = app;
