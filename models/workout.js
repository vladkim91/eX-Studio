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
      // define association here
    }
  }
  Workout.init(
    {
      name: DataTypes.STRING,
      muscle_groups: DataTypes.STRING,
      exercise_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
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
