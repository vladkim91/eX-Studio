'use strict';

const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne();
    const user2 = await User.findOne({
      offset: 1
    });

    const user_workouts = [
      {
        user_id: user1.uuid,
        workout_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: user1.uuid,
        workout_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: user2.uuid,
        workout_id: 2,
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
