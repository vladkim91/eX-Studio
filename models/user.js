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
      // define association here
      User.hasMany(models.Workout, {
        as: 'workouts',
        through: models.User_Workout,
        foreignKey: 'user_id'
      });
      User.belongsToMany(models.Workout, {
        as: 'user',
        through: models.User_Workout,
        foreignKey: 'workout_id'
      });
      User.hasOne(models.Journal, {
        as: 'journal',
        foreignKey: 'user_id'
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
