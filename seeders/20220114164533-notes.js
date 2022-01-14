'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const notes = [
      {
        text: 'Set my PR on bench press today',
        journal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'set new  PR on incline bench press',
        journal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('notes', notes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('notes', notes);
  }
};
