const router = require('express').Router();
const controller = require('../controllers/workout');

router.get('/search', controller.searchForWorkouts);
router.get('/:workoutId', controller.getWorkoutById);

module.exports = router;
