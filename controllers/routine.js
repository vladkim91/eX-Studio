const {
  Routine,
  ScheduledWorkout,
  Workout,
  Exercise,
  User
} = require('../models');

const getRoutineByUser = async (req, res) => {
  const { user } = req;
  const routine = await Routine.findOne({
    where: {
      user_id: user.uuid
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

  // console.log(routine);
  res.status(200).send(routine);
};

const scheduleWorkout = async (req, res) => {
  const { user } = req;
  // console.log('User');
  // console.log(user);
  const workoutId = req.body.workoutId;
  const day = req.body.day;
  const routine = await Routine.findOne({
    raw: true,
    nest: true,
    where: {
      user_id: user.uuid
    }
  });

  // console.log('Routine');
  // console.log(routine);

  const scheduledWorkouts = await ScheduledWorkout.create({
    routine_id: routine.id,
    workout_id: parseInt(workoutId),
    day: parseInt(day),
    createdAt: new Date(),
    updatedAt: new Date()
  });

  res.status(201).send(scheduledWorkouts);
};

const deleteScheduledWorkoutByUserId = async (req, res) => {
  const { user } = req;

  const routine = await Routine.findOne({
    where: {
      user_id: user.uuid
    }
  });

  console.log('Routine');
  console.log(routine.id);
  console.log('Day');
  console.log(parseInt(req.params.day));

  const scheduledWorkout = await ScheduledWorkout.destroy({
    where: { routine_id: routine.id, day: parseInt(req.params.day) }
  });
  res.sendStatus(200);
};

module.exports = {
  getRoutineByUser,
  scheduleWorkout,
  deleteScheduledWorkoutByUserId
};
