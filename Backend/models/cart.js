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
      Cart.belongsTo(models.User, { foreignKey: "user_id" });
      Cart.belongsTo(models.Item, { foreignKey: "item_id" });
    }
  }
  Cart.init(
    {
      // cart_id: DataTypes.INTEGER,
      // item_id: DataTypes.INTEGER,
      Total_all_price: DataTypes.INTEGER,
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      item_id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "items",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Cart",
      tableName: "carts",
    }
  );
  return Cart;
};
