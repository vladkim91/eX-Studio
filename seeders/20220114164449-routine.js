'use strict';

const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne();
    const user2 = await User.findOne({
      offset: 1
    });

    const routines = [
      {
        user_id: user1.uuid,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: user2.uuid,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('routines', routines);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('routines', routines);
  }
};
