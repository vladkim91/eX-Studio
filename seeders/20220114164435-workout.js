'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const workouts = [
      {
        name: 'Chest and Tricep ',
        muscle_groups: 'ch tr',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: 'Back workout',
        muscle_groups: 'ch tr',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: 'Back workout',
        muscle_groups: 'ch tr',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      }
    ];
    await queryInterface.bulkInsert('workouts', workouts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workouts', workouts);
  }
};
