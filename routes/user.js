const router = require('express').Router();
const controller = require('../controllers/user');
const {
  authorizationMiddleware,
  authenticationMiddleware
} = require('../middleware/auth');

router.post('/', authenticationMiddleware, controller.createNewUser);
router.get('/info', authorizationMiddleware, controller.getUserInfoById);
router.get('/', authorizationMiddleware, controller.getUserMain);
router.get('/:userId/profile', controller.getUserProfileById);
router.get('/:userId/favorited_workouts', controller.getUserFavoritedWorkouts);
router.get('/:userId/custom_workouts', controller.getUserCustomWorkouts);
router.get('/:userId/user_workouts', controller.getUserExercises);

module.exports = router;
