const { Journal, Note } = require('../models');

const getJournalByUser = async (req, res) => {
  const { userId } = req.params;
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
  res.status(200).send(journal.notes);
};

module.exports = {
  getJournalByUser
};
