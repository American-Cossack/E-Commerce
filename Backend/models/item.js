"use strict";
const { Model } = require("sequelize");
const user = require("./user");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.Cart, {
        as: "carts",
        through: models.selected_item,
        foreignKey: "item_id",
      });
    }
  }
  Item.init(
    {
      Item_id: DataTypes.STRING,
      Name: DataTypes.STRING,
      Description: DataTypes.STRING,
      Image: DataTypes.STRING,
      Price: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
