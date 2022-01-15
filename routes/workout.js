const router = require('express').Router();
const controller = require('../controllers/workout');

router.get('/:userId', controller.getWorkoutByUser);

module.exports = router;
