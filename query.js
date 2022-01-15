const { User, User_Exercise, Exercise } = require('./models');

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

const getWorkoutsFollowers = async () => {
  const results = await User.findAll({
    raw: true,
    through: User_Exercise,
    include: [
      {
        model: Exercise,
        as: 'followed_exercises'
      }
    ]
  });
  console.log(results);
};

const run = async () => {
  // await getUserAndWorkouts();
  await getWorkoutsFollowers();
};

run();
