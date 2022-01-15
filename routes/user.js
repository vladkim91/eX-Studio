const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/', controller.createNewUser);
router.get('/:userId', controller.getUserById);
router.get('/:userId/favorited_workouts', controller.getUserFavoritedWorkouts);
router.get('/:userId/custom_workouts', controller.getUserCustomWorkouts);

module.exports = router;
