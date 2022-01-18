'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const workout_exercises = [
      // Chest and Tricep
      {
        workout_id: 1,
        exercise_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 1,
        exercise_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 1,
        exercise_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 1,
        exercise_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Full body
      {
        workout_id: 2,
        exercise_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 2,
        exercise_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 2,
        exercise_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 2,
        exercise_id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 2,
        exercise_id: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Back and Bicep
      {
        workout_id: 3,
        exercise_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 3,
        exercise_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 3,
        exercise_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 3,
        exercise_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 3,
        exercise_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('workout_exercises', workout_exercises);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workout_exercises', workout_exercises);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
