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
  const routineId = req.query.routineId;
  const dayOfTheWeek = req.query.dayOfTheWeek;
  const workoutId = req.query.workoutId;

  const scheduledWorkouts = await ScheduledWorkout.create({
    routine_id: parseInt(routineId),
    workout_id: parseInt(workoutId),
    day: parseInt(dayOfTheWeek),
    createdAt: new Date(),
    updatedAt: new Date()
  });

  res.status(201).send(scheduledWorkouts);
};

module.exports = {
  getRoutineByUser,
  scheduleWorkout
};
