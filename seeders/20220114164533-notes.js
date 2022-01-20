'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const notes = [
      {
        title: `Tutorial`,
        text: `Browse the list of available workouts and add them to your routine or jump into the workout immediately. Use our browse training page to learn more about exercises and their benefits. Use filter and search bar to find specific workouts and exercises based on the name or targeted muscle groups. Have fun and don't stop grinding!`,
        journal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        felt: 0
      },
      {
        title: 'WELCOME TO EX STUDIO',
        text: `It's time to unlock your potential with Ex Studio.\n 
        This app is created for both beginners and veterans. Every feature of Ex Studio is designed to create a perfect exercise routine that fits your athletic needs. \n
        Select from a list of customized workouts and build a body you always wanted`,
        journal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        felt: 0
      }
    ];

    await queryInterface.bulkInsert('notes', notes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('notes', notes);
  }
};
