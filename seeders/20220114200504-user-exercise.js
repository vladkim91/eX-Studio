'use strict';

const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne();
    const user2 = await User.findOne({
      offset: 1
    });

    const user_exercises = [
      {
        user_id: user1.uuid,
        exercise_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: user1.uuid,
        exercise_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: user2.uuid,
        exercise_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: user2.uuid,
        exercise_id: 4,
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
