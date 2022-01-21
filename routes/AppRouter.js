const router = require('express').Router();
const journal = require('./journal');
const routine = require('./routine');
const user = require('./user');
const workout = require('./workout');
const exercise = require('./exercise');
const account = require('./account');

router.use('/journal', journal);
router.use('/routine', routine);
router.use('/user', user);
router.use('/workout', workout);
router.post('/account', authenticateMiddleware, account);
router.use('/exercise', exercise);

module.exports = router;
