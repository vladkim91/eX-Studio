'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const workout_exercises = [
      // Chest and Tricep
      {
        workout_id: 1,
        exercise_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 1,
        exercise_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 1,
        exercise_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 1,
        exercise_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Full body
      {
        workout_id: 2,
        exercise_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 2,
        exercise_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 2,
        exercise_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 2,
        exercise_id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 2,
        exercise_id: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Back and Bicep
      {
        workout_id: 3,
        exercise_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 3,
        exercise_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 3,
        exercise_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 3,
        exercise_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 3,
        exercise_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Shoulders and leg day
      {
        workout_id: 4,
        exercise_id: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 4,
        exercise_id: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 4,
        exercise_id: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 4,
        exercise_id: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 4,
        exercise_id: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Kettbell circuit
      {
        workout_id: 5,
        exercise_id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 5,
        exercise_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 5,
        exercise_id: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 5,
        exercise_id: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 6 pack builder
      {
        workout_id: 6,
        exercise_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 6,
        exercise_id: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 6,
        exercise_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 6,
        exercise_id: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Leg day
      {
        workout_id: 7,
        exercise_id: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 7,
        exercise_id: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 7,
        exercise_id: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 7,
        exercise_id: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Big 5
      {
        workout_id: 8,
        exercise_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 8,
        exercise_id: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 8,
        exercise_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 8,
        exercise_id: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 8,
        exercise_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Straight outta USSR

      {
        workout_id: 9,
        exercise_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 9,
        exercise_id: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 9,
        exercise_id: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Vertical jump essintials
      {
        workout_id: 10,
        exercise_id: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 10,
        exercise_id: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 10,
        exercise_id: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 10,
        exercise_id: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workout_id: 10,
        exercise_id: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('workout_exercises', workout_exercises);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workout_exercises', workout_exercises);
  }
};
