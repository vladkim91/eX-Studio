'use strict';
const {
  Model
} = require('sequelize');
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
  };
  User_Exercise.init({
    user_id: DataTypes.INTEGER,
    exercise_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Exercise',
  });
  return User_Exercise;
};