'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user_exercises = [
      {
        user_id: 1,
        exercise_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        exercise_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        exercise_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        exercise_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('user_exercises', user_exercises);
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
    await queryInterface.bulkDelete('user_exercises', user_exercises);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
