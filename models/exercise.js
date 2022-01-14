'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exercise.init(
    {
      name: DataTypes.STRING,
      muscle_group: DataTypes.STRING,
      image: DataTypes.STRING,
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
      modelName: 'Exercise',
      tableName: 'exercises'
    }
  );
  return Exercise;
};
