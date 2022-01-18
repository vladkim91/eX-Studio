const router = require('express').Router();
const controller = require('../controllers/journal');

router.post('/:journalId/notes', controller.createNewNote);
router.get('/:userId', controller.getJournalByUser);
router.put('/notes/:noteId', controller.editNoteById);
router.delete('/notes/:noteId', controller.deleteNoteById);

module.exports = router;
