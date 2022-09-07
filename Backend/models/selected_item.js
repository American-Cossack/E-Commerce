"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Selected_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Selected_item.init(
    {
      Item_id: DataTypes.NUMBER,
      Name: DataTypes.STRING,
      Description: DataTypes.STRING,
      Image: DataTypes.STRING,
      Price: DataTypes.NUMBER,
      Quantity: DataTypes.INTEGER,
      Total_Price: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Selected_item",
    }
  );
  return Selected_item;
};
