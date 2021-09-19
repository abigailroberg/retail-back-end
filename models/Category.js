const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define id column
    id: {
      // type int
      type: DataTypes.INTEGER,
      // don't allow null
      allowNull: false,
      // set as primary key
      primaryKey: true,
      // autoincrement value
      autoIncrement: true
    },
    // define category name column
    category_name: {
      // type string
      type: DataTypes.STRING,
      // don't allow null
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
