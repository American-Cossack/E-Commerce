"use strict";
const { Model } = require("sequelize");
const item = require("./item");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Cart, { foreignKey: "cart_id" });
      User.hasOne(models.Checkout, { foreignKey: "address_id" });
      User.hasOne(models.Checkout, { foreignKey: "payment_id" });
    }
  }
  User.init(
    {
      Email: DataTypes.STRING,
      Password: DataTypes.STRING,
      Address: DataTypes.STRING,
      Telephone: DataTypes.STRING,
      Payment_info: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
