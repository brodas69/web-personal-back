const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { API_VERSION} = require('./config');

//load routing
//type here your code



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//configure header http
//type here your code

//router basic
//type here your code

module.exports = app;