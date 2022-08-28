require('dotenv').config({ silent: true });
const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//passport middleware
// const passport = require('passport');
// app.use(passport.initialize());
// require('./middleware/passport/authentication')(passport);

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, '../', 'public')))
  //global variables and remove headers
  .use(function (req, res, next) {
    res.removeHeader('X-Powered-By');
    res.removeHeader('Server');
    next();
  });

//routes
const { page } = require('./routes/index');
app.use(page).use(favicon(path.join(__dirname, '../', 'public', 'favicon.ico')));
// .use(passport.authenticate('jwt', { session: false }), user);

module.exports = app;
