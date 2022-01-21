const router = require('express').Router();
const controller = require('../controllers/routine');
const {
  authorizationMiddleware,
  authenticationMiddleware
} = require('../middleware/auth');

router.get('/:userId', authorizationMiddleware, controller.getRoutineByUser);
router.post(
  '/schedule_workout',
  authorizationMiddleware,
  controller.scheduleWorkout
);
router.delete(
  '/schedule_workout/:userId/:day',
  controller.deleteScheduledWorkoutByUserId
);

module.exports = router;
