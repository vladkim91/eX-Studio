'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const notes = [
      {
        title: 'Chest day',
        text: 'Set my PR on bench press today',
        journal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chest day',
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
