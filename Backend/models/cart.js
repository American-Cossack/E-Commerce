"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsToMany(models.Item, {
        as: "items",
        through: models.selected_item,
        foreignKey: "cart_id",
      });
    }
  }
  Cart.init(
    {
      Cart_id: DataTypes.INTEGER,
      item_id: DataTypes.INTEGER,
      Total_price: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
