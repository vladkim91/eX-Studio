'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Journal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Journal.belongsTo(models.User, {
        as: 'journal'
      });
      Journal.hasMany(models.Note, {
        as: 'notes',
        foreignKey: 'journal_id'
      });
    }
  }
  Journal.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      note_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'notes',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Journal',
      tableName: 'journals'
    }
  );
  return Journal;
};
