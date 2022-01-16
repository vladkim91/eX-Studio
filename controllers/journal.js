const { Journal, Note } = require('../models');

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
      attributes: ['text', 'createdAt']
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

module.exports = {
  getJournalByUser
};
