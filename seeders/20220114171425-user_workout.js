'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user_workouts = [
      {
        user_id: 1,
        workout_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('user_workouts', user_workouts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_workouts', user_workouts);
  }
};
