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
        foreignKey: 'user_id'
      });
      Exercise.belongsTo(models.User);
    }
  }
  Exercise.init(
    {
      name: DataTypes.STRING,
      user_id: {
        type: Datatypes.INTEGER,
        onDelete: 'CASCADE',
        key: 'id'
      },
      workout_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'workouts',
          key: 'id'
        }
      },
      muscle_group: DataTypes.STRING,
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
