'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exercises = [
      {
        name: 'Bench press',
        muscle_group: 'ch',
        image:
          'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg',
        workout_id: 1,
        user_id: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 135
      },
      {
        name: 'Cable Rope Tricep Pushdown',
        muscle_group: 'tr',
        image: 'https://www.burnthefatinnercircle.com/members/images/1870.jpg',
        workout_id: 1,
        user_id: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 60
      },
      {
        name: 'Deadlift',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg?crop=1.00xw:0.752xh;0,0.0793xh&resize=1200:*',
        workout_id: 2,
        user_id: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 5,
        reps: 5,
        weight: 155
      },
      {
        name: 'Bicep curls',
        muscle_group: 'bc',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: 2,
        user_id: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 40
      },
      {
        name: 'Bicep curls Custom',
        muscle_group: 'bc',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 4,
        reps: 10,
        weight: 35
      }
    ];
    await queryInterface.bulkInsert('exercises', exercises);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('exercises', exercises);
  }
};
