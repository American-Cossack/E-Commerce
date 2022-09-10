"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.Cart, { foreignKey: "id" });
    }
  }
  Item.init(
    {
      Name: DataTypes.STRING,
      Description: DataTypes.STRING,
      Image: DataTypes.STRING,
      Price: DataTypes.INTEGER,
      Quantity: DataTypes.INTEGER,
      Total_Price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item",
      tableName: "items",
    }
  );
  return Item;
};
