const router = require('express').Router();
const journal = require('./journal');
const routine = require('./routine');
const user = require('./user');
const workout = require('./workout');
const exercise = require('./exercise');
const { authenticateMiddleware } = require('../middleware/auth');

router.use('/journal', journal);
router.use('/routine', routine);
router.use('/user', user);
router.use('/workout', workout);
router.post('/googleOAuth', authenticateMiddleware, async (req, res) => {
  console.log(req.payload);
  res.send({ message: 'Success!' });
});
router.use('/exercise', exercise);

module.exports = router;
