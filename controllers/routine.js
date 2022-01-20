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
              'rest',
              'typeof',
              'description'
            ],
            model: Exercise,
            through: { attributes: [] },
            as: 'added_exercises'
          }
        }
      }
    ]
  });

  res.status(200).send(routine);
};

const scheduleWorkout = async (req, res) => {
  const userId = req.body.userId;
  const workoutId = req.body.workoutId;
  const day = req.body.day;
  const routine = await Routine.findOne({
    where: {
      id: userId
    }
  });
  console.log(req.body);

  const scheduledWorkouts = await ScheduledWorkout.create({
    routine_id: parseInt(routine.id),
    workout_id: parseInt(workoutId),
    day: parseInt(day),
    createdAt: new Date(),
    updatedAt: new Date()
  });

  res.status(201).send(scheduledWorkouts);
};

module.exports = {
  getRoutineByUser,
  scheduleWorkout
};
