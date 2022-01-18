const { Workout, Exercise } = require('../models');

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
  searchForWorkouts,
  getWorkoutExercises
};
