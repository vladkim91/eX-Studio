const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/', controller.createNewUser);
router.get('/:userId', controller.getUserInfoById);
router.get('/:userId/profile', controller.getUserProfileById);
router.get('/:userId/favorited_workouts', controller.getUserFavoritedWorkouts);
router.get('/:userId/custom_workouts', controller.getUserCustomWorkouts);
router.get('/:userId/user_workouts', controller.getUserExercises);

module.exports = router;
