const { Workout, Exercise, ScheduledWorkout } = require('../models');

const getWorkoutById = async (req, res) => {
  const { workoutId } = req.params;
  let { id, ...atts } = Exercise.rawAttributes;
  atts = Object.keys(atts);

  const workout = await Workout.findOne({
    attributes: ['name', 'muscle_groups', 'image'],
    where: {
      id: workoutId
    },
    include: {
      model: Exercise,
      as: 'exercises',
      attributes: atts
    }
  });
  res.status(200).send(workout);
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

const getWorkoutExercises = async (req, res) => {
  const { workoutId } = req.params;
  const workoutExercises = await Workout.findOne({
    attributes: ['name', 'muscle_groups'],
    where: { id: workoutId },
    include: {
      model: Exercise,
      as: 'added_exercises',
      through: { attributes: [] },
      attributes: ['name']
    }
  });
  res.status(200).send(workoutExercises);
};

module.exports = {
  getWorkoutById,
  getWorkoutExercises,
  scheduleWorkout
};
