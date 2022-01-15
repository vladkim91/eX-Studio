const { Routine } = require('../models');

const getRoutineByUser = async (req, res) => {
  const { userId } = req.params;
  const result = await Routine.findOne({
    where: {
      user_id: userId
    }
  });
  res.status(200).send(result);
};

module.exports = {
  getRoutineByUser
};
