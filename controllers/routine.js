const { Routine, ScheduledWorkout, Workout, Exercise } = require('../models');

const getRoutineByUser = async (req, res) => {
  const { userId } = req.params;
  const routine = await Routine.findOne({
    where: {
      user_id: userId
    },
    nest: true,
    include: [
      {
        model: ScheduledWorkout,
        as: 'scheduled_workouts',
        attributes: ['id', 'day'],
        include: {
          attributes: ['name', 'muscle_groups', 'image'],
          model: Workout,
          as: 'workout',
          include: {
            attributes: [
              'name',
              'muscle_group',
              'image',
              'sets',
              'time',
              'reps',
              'weight',
              'typeof',
              'description'
            ],
            model: Exercise,
            as: 'exercises'
          }
        }
      }
    ]
  });

  res.status(200).send(routine);
};

module.exports = {
  getRoutineByUser
};
