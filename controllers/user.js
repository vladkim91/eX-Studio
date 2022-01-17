const { User, Workout } = require('../models');

const createNewUser = async (req, res) => {};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOne({
    attributes: ['username', 'first_name', 'last_name'],
    where: {
      id: userId
    }
  });
  res.status(200).send(user);
};

const getUserFavoritedWorkouts = async (req, res) => {
  const { userId } = req.params;
  const favoritedWorkouts = await User.findOne({
    attributes: [],
    where: {
      id: userId
    },
    include: {
      model: Workout,
      through: { attributes: [] },
      as: 'favorited_workouts',
      attributes: ['name', 'muscle_groups', 'image']
    }
  });
  res.status(200).send(favoritedWorkouts);
};

const getUserCustomWorkouts = async (req, res) => {
  const { userId } = req.params;
  const customWorkouts = await User.findOne({
    attributes: [],
    where: {
      id: userId
    },
    include: {
      model: Workout,
      as: 'custom_workouts',
      attributes: ['name', 'muscle_groups', 'image']
    }
  });
  res.status(200).send(customWorkouts);
};

module.exports = {
  createNewUser,
  getUserById,
  getUserFavoritedWorkouts,
  getUserCustomWorkouts
};
