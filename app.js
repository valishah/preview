import logger from 'morgan';
const express = require('express');

import preview from './routes/preview';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/v1',preview);
app.use('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = app;
