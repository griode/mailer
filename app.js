var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mailerRouter = require('./routes/mailer');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Spécifier le répertoire des fichiers HTML
app.use(express.static(path.join(__dirname, 'views')));

app.use('/mailer', mailerRouter);
app.use('/', indexRouter);

module.exports = app;
