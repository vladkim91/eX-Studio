'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const scheduled_workouts = [
      {
        day: 0,
        workout_id: 1,
        routine_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        day: 2,
        workout_id: 2,
        routine_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        day: 2,
        workout_id: 2,
        routine_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('scheduled_workouts', scheduled_workouts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('scheduled_workouts', scheduled_workouts);
  }
};
