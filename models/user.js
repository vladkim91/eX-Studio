'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Association for workouts the user has favorited
      User.belongsToMany(models.Workout, {
        as: 'favorited_workouts',
        through: models.User_Workout,
        foreignKey: 'user_id'
      });
      // Association for workouts the user made/customized
      User.hasMany(models.Workout, {
        foreignKey: 'user_id',
        as: 'custom_workouts'
      });
      User.hasOne(models.Journal, {
        as: 'journal',
        foreignKey: 'user_id'
      });
      User.hasMany(models.Routine, {
        as: 'routines',
        foreignKey: 'user_id'
      });
      User.belongsToMany(models.Exercise, {
        as: 'followed_exercises',
        through: models.User_Exercise,
        foreignKey: 'exercise_id'
      });
      User.hasMany(models.Exercise, {
        foreignKey: 'user_id'
      });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
