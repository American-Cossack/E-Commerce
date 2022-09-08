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
      Cart.belongsTo(models.User, { foreignKey: "id" });
      Cart.hasMany(models.Item, { foreignKey: "id" });
      Cart.hasOne(models.Checkout, { foreignKey: "Checkout_id" });
    }
  }
  Cart.init(
    {
      Cart_id: DataTypes.INTEGER,
      Item_id: DataTypes.INTEGER,
      Total_all_price: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Cart",
      tableName: "cart",
    }
  );
  return Cart;
};
