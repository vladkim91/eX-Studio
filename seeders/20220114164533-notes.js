'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const notes = [
      {
        title: 'Chest day',
        text: 'Set my PR on bench press today',
        journal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        felt: 2
      },
      {
        title: 'Chest day',
        text: 'set new  PR on incline bench press',
        journal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        felt: 4
      }
    ];

    await queryInterface.bulkInsert('notes', notes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('notes', notes);
  }
};
