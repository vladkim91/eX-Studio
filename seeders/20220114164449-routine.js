'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const routines = [
      {
        user_id: 1,
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
