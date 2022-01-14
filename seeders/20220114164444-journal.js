'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const journals = [
      {
        user_id: 1,
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
