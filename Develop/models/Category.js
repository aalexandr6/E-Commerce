//https://sequelize.org/v5/manual/models-definition.html#configuration
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Category extends Model {}
//ID COLUMN
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
