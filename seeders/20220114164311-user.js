'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        first_name: 'John',
        last_name: 'Doe',
        username: 'johndoe1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', users);
  }
};
