'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Workout.belongsToMany(models.User, {
        as: 'favorite_workouts',
        through: models.User_Workout,
        foreignKey: 'workout_id'
      });
      Workout.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'custom_workouts'
      });
      Workout.hasOne(models.ScheduledWorkout, {
        foreignKey: 'workout_id',
        as: 'workout'
      });
      Workout.hasMany(models.Exercise, {
        foreignKey: 'workout_id',
        as: 'exercises'
      });
      Workout.belongsToMany(models.Exercise, {
        as: 'added_exercises',
        through: models.Workout_Exercise,
        foreignKey: 'workout_id'
      });
    }
  }
  Workout.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      muscle_groups: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Workout',
      tableName: 'workouts'
    }
  );
  return Workout;
};
