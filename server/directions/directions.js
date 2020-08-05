/*jshint esversion: 8*/
const express = require('express');
const app = express();


app.use('/categoria', require('./categoria/categoria'));
app.use('/platillo', require('./platillo/platillo'));

module.exports = app;