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
  return res.render(google);
});

module.exports = router;
