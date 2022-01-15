const router = require('express').Router();
const controller = require('../controllers/routine');

router.post('/', controller.createRoutineForUser);
router.get('/:userId', controller.getRoutineByUser);
router.put('/:routineId/:userId', controller.updateRoutineByUser);
router.delete('/:routineId/:userId', controller.deleteRoutineByUser);

module.exports = router;
