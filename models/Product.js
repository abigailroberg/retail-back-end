// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { values } = require('sequelize/types/lib/operators');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define id column
    id: {
      // type int
      type: DataTypes.INTEGER,
      // don't allow null
      allowNull: false,
      // set as primary key
      primaryKey: true,
      // autoincrement values
      autoIncrement: values
    },
    // define product name column
    product_name: {
      // type string
      type: DataTypes.STRING,
      // don't allow null
      allowNull: false
    },
    // define price column
    price: {
      // type decimal
      type: DataTypes.DECIMAL,
      // don't allow null
      allowNull: false,
      // validate decimal value
      validate: {
        isDecimal: true
      }
    },
    // define stock column
    stock: {
      // type int
      type: DataTypes.INTEGER,
      // don't allow null
      allowNull: false,
      // default value of 10
      defaultValue: 10,
      // validate number
      validate: {
        isNumeric: true
      }
    },
    // define category id column
    category_id: {
      // type int
      type: DataTypes.INTEGER,
      // references id column in category table
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
