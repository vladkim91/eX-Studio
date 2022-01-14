'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('exercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        allowNull: false
      },
      workout_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'workouts',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING
      },
      muscle_group: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      sets: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      time: {
        type: Sequelize.FLOAT,
        defaultValue: null
      },
      reps: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('exercises');
  }
};