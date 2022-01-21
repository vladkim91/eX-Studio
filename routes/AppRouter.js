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
router.post('/sign', async (req, res) => {
  const ticket = await google.verifyIdToken({
    idToken: req.body.credential,
    audience: process.env.GCID
  });
  console.log(ticket.getPayload());
  res.send({ message: 'working!' });
});
router.use('/exercise', exercise);

module.exports = router;
