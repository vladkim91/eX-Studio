const router = require('express').Router();
const journal = require('./journal');
const routine = require('./routine');
const user = require('./user');
const workout = require('./workout');
const google = require('../google_api');

router.use('/journal', journal);
router.use('/routine', routine);
router.use('/user', user);
router.use('/workout', workout);
router.get('/authtest', (req, res) => {
  // res.redirect(google, 301);
  res.send(google);
});

module.exports = router;
