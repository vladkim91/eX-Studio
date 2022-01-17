const {
  User,
  Routine,
  ScheduledWorkout,
  Journal,
  Note,
  Workout
} = require('../models');

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

const getUserProfileById = async (req, res) => {
  const { userId } = req.params;
  const userProfile = await User.findOne({
    where: {
      id: userId
    },
    nest: true,
    attributes: ['username', 'first_name', 'last_name'],
    include: [
      {
        model: Journal,
        as: 'journal',
        attributes: ['id'],
        include: {
          model: Note,
          as: 'notes'
        }
      },
      {
        model: Routine,
        as: 'routine',
        attributes: ['id'],
        include: {
          model: ScheduledWorkout,
          as: 'scheduled_workouts',
          attributes: ['id', 'day'],
          include: {
            attributes: ['name', 'muscle_groups', 'image'],
            model: Workout,
            as: 'workout'
          }
        }
      }
    ]
  });

  userProfile.journal.notes = userProfile.journal.notes.slice(0, 5);

  res.status(200).send(userProfile);
};

module.exports = {
  createNewUser,
  getUserById,
  getUserFavoritedWorkouts,
  getUserCustomWorkouts,
  getUserProfileById
};
