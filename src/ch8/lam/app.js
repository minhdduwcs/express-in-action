const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

const routes = require('./routes');
const setUpPassport = require('./setuppassport');

const app = express();

// connect to mongo server
mongoose.connect('mongodb://localhost:27017/test');
setUpPassport();

// setting up EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// using body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// using cookie parser middleware
app.use(cookieParser());

// using session parser middleware
app.use(session({
  secret: 'TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX',
  resave: true,
  saveUninitialized: true
}));

// using flash middleware
app.use(flash());

// using passport middleware
app.use(passport.initialize());
app.use(passport.session());

// register routes
app.use(routes);

const PORT = 7979;
app.listen(PORT, function () {
  console.log('Server started on port ' + PORT);
});
