'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const workouts = [
      {
        name: 'chest and tricep',
        muscle_groups: 'ch tr',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: 'full body sculptor',
        muscle_groups: 'fb',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: 'back and bicep',
        muscle_groups: 'bk bc',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: 'shoulders and leg day',
        muscle_groups: 'sh lg',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: 'kettlebell circuit',
        muscle_groups: 'fb bk sh',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: '6 pack builder',
        muscle_groups: 'ab',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: 'leg day',
        muscle_groups: 'lg',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: 'big five',
        muscle_groups: 'ch lg sh bk',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: 'straight outta ussr',
        muscle_groups: 'bk lg fb',
        image: `https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: null
      },
      {
        name: 'vertical jump essentials',
        muscle_groups: 'lg fb',
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
