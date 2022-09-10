"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("checkouts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      checkout_id: {
        type: Sequelize.INTEGER,
      },
      address_id: {
        type: Sequelize.STRING,
      },
      payment_id: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("checkouts");
  },
};
