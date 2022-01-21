const router = require('express').Router();
const journal = require('./journal');
const routine = require('./routine');
const user = require('./user');
const workout = require('./workout');
const exercise = require('./exercise');
const account = require('./account');
const {
  authorizationMiddleware,
  authenticationMiddleware
} = require('../middleware/auth');

router.use('/journal', authorizationMiddleware, journal);
router.use('/routine', authorizationMiddleware, routine);
router.use('/user', user);
router.use('/workout', workout);
router.use('/account', account);
router.use('/exercise', exercise);

module.exports = router;
