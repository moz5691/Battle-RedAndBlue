const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const hbs = require('hbs');
const helmet = require('helmet');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const { mongoose } = require('./db/mongoose');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/authRoutes');

const app = express();
// helmet is just middleware -- security,
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// this is to make partial work e.g. navbar which is sticky on top.
hbs.registerPartials(__dirname + '/views/partial');

/* cookie session cycle is 30 days here  */
/* stores cookie for Google+ API*/
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

/* Init passport for Google+ API to login  */
app.use(passport.initialize());
app.use(passport.session());

// the followign is to retreive usernae after google oauth..
app.use((req, res, next) => {
  // res.locals.success_msg = req.flash('success_msg');
  // res.locals.error_msg = req.flash('error_msg');
  // res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// indexRouter is the main routing.
app.use('/', indexRouter);
// run google auth here...
app.use('/', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
