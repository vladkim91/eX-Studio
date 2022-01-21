const router = require('express').Router();
const controller = require('../controllers/routine');

router.get('/:userId', controller.getRoutineByUser);
router.post('/schedule_workout', controller.scheduleWorkout);
router.delete(
  '/schedule_workout/:userId/:day',
  controller.deleteScheduledWorkoutByUserId
);

module.exports = router;
