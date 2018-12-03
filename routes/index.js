const express = require('express');
const router = express.Router();
const Game = require('./../models/Game');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is title page, check /routes/index.js' });
});

router.get('/game', (req, res, next) => {
  res.render('game', { title: 'this is game1 page, check /routes/index.js' });
});

router.get('/rooms', (req, res, next) => {
  res.render('rooms', { title: 'this is rooms-page, check /routes/index.js' });
});

// define API here --- server side ///

///////////////
router.get('/test', (req, res, next) => {//for test maryam
  res.render('rooms', { title: 'this is rooms-page, check /routes/room' });
});

module.exports = router;
