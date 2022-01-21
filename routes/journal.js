const router = require('express').Router();
const controller = require('../controllers/journal');
const {
  authorizationMiddleware,
  authenticationMiddleware
} = require('../middleware/auth');

router.post(
  '/:userId/notes',
  authorizationMiddleware,
  controller.createNewNote
);
router.get('/:userId', authorizationMiddleware, controller.getJournalByUser);
router.put('/notes/:noteId', authorizationMiddleware, controller.editNoteById);
router.delete(
  '/notes/:noteId',
  authorizationMiddleware,
  controller.deleteNoteById
);

module.exports = router;
