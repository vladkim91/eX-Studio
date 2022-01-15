const { Workout, Exercise } = require('../models');

const getWorkoutById = async (req, res) => {
  const { workoutId } = req.params;
  const workout = await Workout({
    attributes: ['name', 'muscle_groups', 'image'],
    where: {
      id: workoutId
    },
    include: {
      model: Exercise,
      as: 'exerices',
      attributes: ['name', 'image', 'sets', 'time', 'reps', 'weight']
    }
  });
  res.status(200).send(workout);
};

module.exports = {
  getWorkoutById
};
