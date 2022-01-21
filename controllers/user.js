const {
  User,
  Routine,
  ScheduledWorkout,
  Journal,
  Note,
  Workout,
  Exercise
} = require('../models');
const { createHash } = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getUserMain = async (req, res) => {
  const user = req.user;

  const newJournal = await Journal.findOne({
    nest: true,
    where: {
      user_id: user.uuid
    },
    include: {
      model: Note,
      as: 'notes'
    }
  });

  const tutorialNote = await Note.findOne({
    where: {
      journal_id: newJournal.id
    }
  });

  const welcomeNote = await Note.findOne({
    where: {
      journal_id: newJournal.id
    },
    offset: 1
  });

  const routine = await Routine.findOne({
    where: {
      user_id: user.uuid
    }
  });

  res.status(201).send({ user, newJournal, routine });
};

const createNewUser = async (req, res) => {
  const { userAuthInfo } = req;

  if (!userAuthInfo) {
    return res.status(401).send({ message: 'Failed Authentication!' });
  }

  const uuid = createHash('sha256', process.env.HASHSEC)
    .update(userAuthInfo.sub + userAuthInfo.given_name)
    .digest('hex');

  const sessionToken = jwt.sign(uuid, process.env.JWTSEC);
  req.session.gulid = sessionToken;

  const existingUser = await User.findOne({
    where: {
      uuid
    }
  });

  if (existingUser) {
    return res.redirect('/');
  } else {
    const newUser = (
      await User.create(
        {
          uuid,
          username: userAuthInfo.given_name || 'no username',
          sessionToken,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          raw: true,
          nest: true
        }
      )
    ).dataValues;

    const newJournal = await Journal.create({
      user_id: newUser.uuid,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const routine = await Routine.create({
      user_id: newUser.uuid,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const tutorialNote = await Note.create({
      journal_id: newJournal.id,
      title: `Tutorial`,
      text: `Browse the list of available workouts and add them to your routine or jump into the workout immediately. Use our browse training page to learn more about exercises and their benefits. Use filter and search bar to find specific workouts and exercises based on the name or targeted muscle groups. Have fun and don't stop grinding!`,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const welcomeNote = await Note.create({
      journal_id: newJournal.id,
      title: `WELCOME TO EX STUDIO`,
      text: `It's time to unlock your potential with Ex Studio.\n
      This app is created for both beginners and veterans. Every feature of Ex Studio is designed to create a perfect exercise routine that fits your athletic needs. \n
      Select from a list of customized workouts and build a body you always wanted`,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return res.redirect('/');
  }
};

const createNewUserManual = async (req, res) => {
  const { username, password } = req.body;

  const uuid = createHash('sha256', process.env.HASHSEC)
    .update(username)
    .digest('hex');

  const sessionToken = jwt.sign(uuid, process.env.JWTSEC);
  req.session.gulid = sessionToken;

  const existingUser = await User.findOne({
    where: {
      uuid
    }
  });

  if (existingUser) {
    return res.send({ message: 'Username taken' });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = (
      await User.create(
        {
          uuid,
          username,
          password: hashedPassword,
          sessionToken,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          raw: true,
          nest: true
        }
      )
    ).dataValues;

    const newJournal = await Journal.create({
      user_id: newUser.uuid,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const routine = await Routine.create({
      user_id: newUser.uuid,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const tutorialNote = await Note.create({
      journal_id: newJournal.id,
      title: `Tutorial`,
      text: `Browse the list of available workouts and add them to your routine or jump into the workout immediately. Use our browse training page to learn more about exercises and their benefits. Use filter and search bar to find specific workouts and exercises based on the name or targeted muscle groups. Have fun and don't stop grinding!`,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const welcomeNote = await Note.create({
      journal_id: newJournal.id,
      title: `WELCOME TO EX STUDIO`,
      text: `It's time to unlock your potential with Ex Studio.\n
      This app is created for both beginners and veterans. Every feature of Ex Studio is designed to create a perfect exercise routine that fits your athletic needs. \n
      Select from a list of customized workouts and build a body you always wanted`,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return res.redirect('/');
  }
};

const userSignInManual = async (req, res) => {
  const { username, password } = req.body;

  const uuid = createHash('sha256', process.env.HASHSEC)
    .update(username)
    .digest('hex');

  const existingUser = await User.find({
    where: {
      uuid
    }
  });

  if (
    !existingUser ||
    !(await bcrypt.compare(password, existingUser.dataValues.password))
  ) {
    res.status(401).send({ message: 'Login failed' });
  } else {
    req.session.gulid = sessionToken;
    res.redirect('/');
  }
};

const getUserInfoById = async (req, res) => {
  const user = await User.findOne({
    attributes: ['username', 'uuid'],
    where: {
      uuid: req.user.uuid
    }
  });

  res.status(200).send(user);
};

const getUserFavoritedWorkouts = async (req, res) => {
  const { userId } = req.params;
  const favoritedWorkouts = await User.findOne({
    attributes: [],
    where: {
      uuid: userId
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
      uuid: userId
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
      uuid: userId
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
      uuid: userId
    },
    nest: true,
    attributes: ['username', 'uuid'],
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
  getUserMain,
  createNewUser,
  createNewUserManual,
  getUserInfoById,
  getUserFavoritedWorkouts,
  getUserCustomWorkouts,
  getUserProfileById,
  getUserExercises
};
