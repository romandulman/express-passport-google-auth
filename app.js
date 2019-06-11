const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');
const keys = require('./config/keys');
require('./config/passport-config');

const app = express();

mongoose.connect(keys.authMongoDB.dbURL, () =>{
console.log('mongo connected')
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);

app.get('/', (req, res, next) => {
    res.render('index', { title: 'Google oAuth Example' });
});

module.exports = app;
