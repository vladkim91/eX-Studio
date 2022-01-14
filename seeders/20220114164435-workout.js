'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const workouts = [
      {
        name: 'Chest Tricep day',
        muscle_groups: 'ch tr',
        image: `https://i.ytimg.com/vi/dHBXHNwzry8/hqdefault.jpg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Back Bicep day',
        muscle_groups: 'bk bc',
        image: `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-strong-muscular-back-royalty-free-image-1580927608.jpg?crop=0.774xw:0.580xh;0.107xw,0.0408xh&resize=1200:*`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('workouts', workouts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workouts', workouts);
  }
};
