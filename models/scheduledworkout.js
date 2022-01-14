'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScheduledWorkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ScheduledWorkout.init(
    {
      day: DataTypes.INTEGER,
      workout_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'workouts',
          key: 'id'
        }
      },
      routine_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'routines',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'ScheduledWorkout',
      tableName: 'scheduled_workouts'
    }
  );
  return ScheduledWorkout;
};
