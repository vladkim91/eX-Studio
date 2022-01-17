'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout_Exercise extends Model {
    static associate(models) {
      // define association here
    }
  }
  Workout_Exercise.init(
    {
      exercise_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'exercises',
          key: 'id'
        }
      },
      workout_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'workouts',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Workout_Exercise',
      tableName: 'workout_exercises'
    }
  );
  return Workout_Exercise;
};
