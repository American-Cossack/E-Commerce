'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Selected_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Item_id: {
        type: Sequelize.NUMBER
      },
      Name: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Image: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.NUMBER
      },
      Quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Selected_items');
  }
};