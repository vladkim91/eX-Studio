const {
  User,
  Routine,
  ScheduledWorkout,
  Journal,
  Note,
  Workout,
  Exercise
} = require('../models');

const createNewUser = async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const newJournal = await Journal.create({
    user_id: user.id,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const welcomeNote = await Note.create({
    journal_id: newJournal.id,
    title: '',
    text: '',
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const tutorialNote = await Note.create({
    journal_id: newJournal.id,
    title: '',
    text: '',
    createdAt: new Date(),
    updatedAt: new Date()
  });

  res.status(201).send({ user, newJournal, welcomeNote, tutorialNote });
};

const getUserInfoById = async (req, res) => {
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

const getUserExercises = async (req, res) => {
  const { userId } = req.params;
  const userExercises = await User.findOne({
    attributes: ['username'],
    where: {
      id: userId
    },
    include: {
      model: Exercise,
      as: 'followed_exercises',
      through: { attributes: [] },
      attributes: ['name']
    }
  });
  res.status(200).send(userExercises);
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
                'typeof',
                'description'
              ],
              model: Exercise,
              as: 'exercises'
            }
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
  getUserInfoById,
  getUserFavoritedWorkouts,
  getUserCustomWorkouts,
  getUserProfileById,
  getUserExercises
};
