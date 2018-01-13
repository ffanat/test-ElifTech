var express = require('express');
var app = express();

var router = require('./route.js')

app.use('/', router.rout); 
