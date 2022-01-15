const router = require('express').Router();
const controller = require('../controllers/routine');

router.get('/:userId', controller.getRoutineByUser);

module.exports = router;
