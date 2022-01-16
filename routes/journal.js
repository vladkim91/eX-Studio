const router = require('express').Router();
const controller = require('../controllers/journal');

router.get('/:userId', controller.getJournalByUser);

module.exports = router;
