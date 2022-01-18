const {
  User,
  User_Exercise,
  Exercise,
  Workout,
  Workout_Exercise
} = require('./models');

const getUserAndWorkouts = async () => {
  const results = await User.findAll({
    include: Exercise
  });

  console.log();
  for (let i = 0; i < results.length; i++) {
    let user = results[i];
    console.log('USER:');
    console.log(user);
  }
};

const getUserFavoriteExercises = async () => {
  const results = await User.findAll({
    where: { id: 1 },
    include: [
      {
        model: Exercise,
        as: 'followed_exercises',
        through: { attributes: [] },
        attributes: ['name']
      }
    ]
  });
  console.log(results);
  // stringify(results);
};

const getAllWorkoutsWithExercises = async () => {
  const results = await Workout.findAll({
    raw: true,
    nest: true,
    where: {
      id: 1
    },
    include: [
      {
        through: {
          attributes: []
        },
        model: Exercise,
        as: 'added_to_workout'
      }
    ]
  });
  console.log(results);
};

const run = async () => {
  // await getUserAndWorkouts();
  // await getUserFavoriteExercises();
  // await getAllWorkoutsWithExercises();
};

run();
