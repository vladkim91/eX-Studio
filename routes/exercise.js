const router = require('express').Router();
const controller = require('../controllers/exercise');

router.get('/', controller.getAllExercises);
router.get('/exercise/:exercise_id', controller.getExerciseById);
router.get('/filter', controller.getExerciseByMuscleGroup);

module.exports = router;
