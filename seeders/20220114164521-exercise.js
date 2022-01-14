'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exercises = [
      {
        name: 'Bench press',
        muscle_group: 'CH',
        image:
          'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg',
        workout_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('exercises', exercises);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('exercises', exercises);
  }
};
