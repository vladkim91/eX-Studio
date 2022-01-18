const { Journal, Note } = require('../models');

const createNewNote = async (req, res) => {
  const { userId } = req.params;

  const journal = await Journal.findOne({
    where: {
      user_id: userId
    }
  });

  const result = await Note.create({
    journal_id: journal.id,
    title: req.body.title,
    text: req.body.text,
    felt: parseInt(req.body.felt),
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.status(201).send(result);
};

const getJournalByUser = async (req, res) => {
  const { userId } = req.params;
  const noteLimit = parseInt(req.query.noteLimit);
  const requestedPage = parseInt(req.query.page);
  const page = (requestedPage ? requestedPage : 0) * noteLimit;
  const pageCap = page + noteLimit;

  const journal = await Journal.findOne({
    attributes: [],
    nest: true,
    where: {
      user_id: userId
    },
    include: {
      model: Note,
      as: 'notes',
      attributes: ['title', 'text', 'createdAt']
    }
  });

  const notes = [];

  if (page < journal.notes.length) {
    for (
      let i = page * noteLimit;
      i < Math.min(pageCap, journal.notes.length);
      i++
    ) {
      notes.push(journal.notes[i]);
    }
  }

  res.status(200).send(notes);
};

const editNoteById = async (req, res) => {
  const { noteId } = req.params;

  const result = await Note.update(
    {
      title: req.body.title,
      text: req.body.text,
      felt: parseInt(req.body.felt),
      updatedAt: new Date()
    },
    {
      where: {
        id: noteId
      },
      returning: true
    }
  );

  res.status(200).send(result);
};

const deleteNoteById = async (req, res) => {
  const { noteId } = req.params;

  await Note.destroy({
    where: {
      id: noteId
    }
  });

  res.sendStatus(200);
};

module.exports = {
  createNewNote,
  getJournalByUser,
  editNoteById,
  deleteNoteById
};
