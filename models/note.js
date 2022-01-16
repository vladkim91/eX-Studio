'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsTo(models.Journal, {
        foreignKey: 'journal_id',
        as: 'notes'
      });
    }
  }
  Note.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
      felt: DataTypes.INTEGER,
      journal_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'journals',
          key: 'id'
        },
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Note',
      tableName: 'notes'
    }
  );
  return Note;
};
