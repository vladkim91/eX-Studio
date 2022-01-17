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
        as: 'journal',
        foreignKey: 'user_id'
      });
      Journal.hasMany(models.Note, {
        foreignKey: 'journal_id',
        as: 'notes'
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
        },
        allowNull: false
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
