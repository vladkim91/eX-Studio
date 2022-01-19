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
      Exercise.belongsToMany(models.User, {
        as: 'followers',
        through: models.User_Exercise,
        foreignKey: 'exercise_id'
      });
      Exercise.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Exercise.belongsTo(models.Workout, {
        foreignKey: 'workout_id',
        as: 'exercises'
      });
      Exercise.belongsToMany(models.Workout, {
        as: 'added_to_workout',
        through: models.Workout_Exercise,
        foreignKey: 'exercise_id'
      });
    }
  }
  Exercise.init(
    {
      name: DataTypes.STRING,
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      workout_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'workouts',
          key: 'id'
        }
      },
      muscle_group: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rest: {
        type: DataTypes.INTEGER,
        defaultValue: 30
      },
      image: DataTypes.STRING,
      sets: {
        type: DataTypes.INTEGER,
        defaultValue: null
      },
      time: {
        type: DataTypes.FLOAT,
        defaultValue: null
      },
      reps: {
        type: DataTypes.INTEGER,
        defaultValue: null
      },
      weight: {
        type: DataTypes.FLOAT,
        defaultValue: null
      },
      typeof: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(1000)
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
