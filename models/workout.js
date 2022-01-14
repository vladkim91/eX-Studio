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
      Workout.hasMany(models.User, {
        as: 'followers',
        through: models.User_Workout,
        foreignKey: 'user_id'
      });
      Workout.belongsToMany(models.User, {
        as: 'favorite_workouts',
        through: models.User_Workout,
        foreignKey: 'workout_id'
      });
      Workout.belongsTo(models.User);
      Workout.belongsTo(models.ScheduledWorkout, {
        foreignKey: 'workout_id'
      });
    }
  }
  Workout.init(
    {
      name: DataTypes.STRING,
      muscle_groups: DataTypes.STRING,
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
