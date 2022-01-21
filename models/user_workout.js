'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Workout.init(
    {
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'uuid'
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
      modelName: 'User_Workout',
      tableName: 'user_workouts'
    }
  );
  return User_Workout;
};
