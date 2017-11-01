
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/stat', {useMongoClient: true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const rootRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use('/', rootRouter);
app.use('/api', apiRouter);

app.listen(3000, function(){
  console.log('App running on 3000')
});