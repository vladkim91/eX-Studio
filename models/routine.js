'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Routine.hasMany(models.ScheduledWorkout, {
        as: 'scheduled_workouts',
        foreignKey: 'routine_id'
      });
      Routine.belongsTo(models.User);
    }
  }
  Routine.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Routine',
      tableName: 'routines'
    }
  );
  return Routine;
};
