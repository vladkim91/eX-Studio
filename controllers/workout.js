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
  getWorkoutExercises
};
