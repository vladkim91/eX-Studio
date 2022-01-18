const router = require('express').Router();
const controller = require('../controllers/workout');

router.get('/search', controller.searchForWorkouts);
router.get('/:workoutId', controller.getWorkoutById);
router.get('/:workoutId/exercises', controller.getWorkoutExercises);

module.exports = router;
