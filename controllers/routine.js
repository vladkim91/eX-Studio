const { Routine, ScheduledWorkout, Workout } = require('../models');

const getRoutineByUser = async (req, res) => {
  const { userId } = req.params;
  const routine = await Routine.findOne({
    where: {
      user_id: userId
    },
    logging: true,
    nest: true,
    include: [
      {
        model: ScheduledWorkout,
        as: 'scheduled_workouts',
        attributes: ['day'],
        include: {
          model: Workout,
          as: 'workout'
        }
      }
    ],
    raw: true
  });
  console.log(routine);
  res.status(200).send(routine);
};

module.exports = {
  getRoutineByUser
};
