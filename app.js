import logger from 'morgan';
const express = require('express');
const gstore = require('gstore-node')();
const Datastore = require('@google-cloud/datastore');
import preview from './routes/preview.route';
import user from './routes/user.route';


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/v1/user',user);
app.use('/api/v1/meta',preview);
app.use('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

const datastore = new Datastore();
gstore.connect(datastore);

module.exports = app;
