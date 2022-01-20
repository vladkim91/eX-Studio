const router = require('express').Router();
const journal = require('./journal');
const routine = require('./routine');
const user = require('./user');
const workout = require('./workout');
const google = require('../google_api');
const exercise = require('./exercise');

router.use('/journal', journal);
router.use('/routine', routine);
router.use('/user', user);
router.use('/workout', workout);
router.get('/authtest', (req, res) => {
  console.log(`Redirected authtest get request to: ${google}`);
  res.redirect(google, 301);
});
router.use('/exercise', exercise);

module.exports = router;
