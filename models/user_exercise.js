'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Exercise.init(
    {
      user_id: {
        type: DataTypes.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'uuid'
        }
      },
      exercise_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'exercises',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User_Exercise',
      tableName: 'user_exercises'
    }
  );
  return User_Exercise;
};
