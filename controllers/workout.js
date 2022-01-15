const { Workout, Exercise } = require('../models');

const getWorkoutById = async (req, res) => {
  const { workoutId } = req.params;
  const workout = await Workout.findOne({
    attributes: ['name', 'muscle_groups', 'image'],
    where: {
      id: workoutId
    },
    include: {
      model: Exercise,
      as: 'exercises',
      attributes: ['name', 'image', 'sets', 'time', 'reps', 'weight']
    }
  });
  res.status(200).send(workout);
};

const searchForWorkouts = async (req, res) => {
  const { name, muscle_groups } = req.query;

  const search = {};

  if (name) search.name = name;
  if (muscle_group) search.muscle_group = muscle_group;

  const workouts = await Workout.findAll({
    where: search
  });

  res.status(200).send(workouts);
};

module.exports = {
  getWorkoutById,
  searchForWorkouts
};
