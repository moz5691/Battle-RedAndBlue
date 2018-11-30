const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

/* callback after successful log where to redirect */
router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    // console.log('callback res', res);
    // redirect to anywhere... /game is temporary!!!!
    res.redirect('/game');
  }
);

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
  // res.send(req.session);
});

module.exports = router;
