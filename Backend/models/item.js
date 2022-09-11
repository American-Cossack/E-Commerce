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
      Item.hasOne(models.Cart, { as: "items", foreignKey: "item_id" });
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
      // cart_id: {
      //   type: DataTypes.INTEGER,
      //   onDelete: "CASCADE",
      //   references: {
      //     model: "carts",
      //     key: "id",
      //   },
      // },
    },
    {
      sequelize,
      modelName: "Item",
      tableName: "items",
    }
  );
  return Item;
};
