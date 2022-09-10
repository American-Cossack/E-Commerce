"use strict";
const { Model } = require("sequelize");
const cart = require("./cart");
module.exports = (sequelize, DataTypes) => {
  class Checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Checkout.belongsTo(models.Cart, { foreignKey: "cart_id" });
      Checkout.belongsTo(models.User, { foreignKey: "Address" });
      Checkout.belongsTo(models.User, { foreignKey: "Payment_info" });
    }
  }
  Checkout.init(
    {
      checkout_id: DataTypes.INTEGER,
      address_id: DataTypes.STRING,
      payment_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Checkout",
      tableName: "checkouts",
    }
  );
  return Checkout;
};
