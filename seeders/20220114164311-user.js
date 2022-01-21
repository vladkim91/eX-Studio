'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        uuid: uuidv4().toString(),
        username: 'johndoe1',
        password: 'ioguierfdw',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: uuidv4().toString(),
        username: 'robsmith',
        password: 'opji5r4rnr4fe',
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
