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
      User.hasOne(models.Cart, { foreignKey: "CartId" });
      User.hasOne(models.Checkout, { foreignKey: "Address" });
      User.hasOne(models.Checkout, { foreignKey: "Payment_info" });
    }
  }
  User.init(
    {
      User_id: DataTypes.INTEGER,
      Email: DataTypes.STRING,
      Password: DataTypes.STRING,
      Address: DataTypes.STRING,
      Telephone: DataTypes.INTEGER,
      Payment_info: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
    }
  );
  return User;
};
