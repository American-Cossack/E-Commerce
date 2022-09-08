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
      Item.belongsTo(models.Cart, { foreignKey: "Item_id" });
    }
  }
  Item.init(
    {
      Item_id: DataTypes.INTEGER,
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
      tableName: "item",
    }
  );
  return Item;
};
