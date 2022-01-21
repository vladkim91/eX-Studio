'use strict';

const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne();
    const user2 = await User.findOne({
      offset: 1
    });

    const journals = [
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
    await queryInterface.bulkInsert('journals', journals);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('journals', journals);
  }
};
