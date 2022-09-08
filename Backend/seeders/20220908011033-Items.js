"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("items", [
      {
        Name: "Master Grade 1/100 MS-06J Zaku II Ver. 2.0",
        Description:
          "This is a posable, high-grade or better injection-plastic kit of an item from the Gundam universe.",
        Image:
          "https://www.hlj.com/productthumbs/ban/ban949252_box_1485108904.jpg?v=1485108904",
        Price: 39.99,
        Quantity: 1,
      },
      {
        Name: "Master Grade 1/100 RX-78-2 Gundam Ver 2.0",
        Description: `This is a posable, high-grade or better injection-plastic kit of an item from the Gundam universe.`,
        Image: "https://www.hlj.com/productimages/ban/ban955520_0.jpg",
        Price: 44.99,
        Quantity: 1,
      },
      {
        Name: "1/144 High Grade Cosmic Era Strike Freedom Gundam",
        Description: `This is a posable, high-grade or better injection-plastic kit of an item from the Gundam universe.`,
        Image: "https://www.hlj.com/productimages/ban/bann09427_0.jpg",
        Price: 22.99,
        Quantity: 1,
      },
      {
        Name: "Tamiya 1/700 IJN Water Line Series Battleship Yamato",
        Description: `This is an injection-plastic ship model kit.`,
        Image: "https://www.hlj.com/productimages/tam/tam31113_0.jpg",
        Price: 25.99,
        Quantity: 1,
      },
      {
        Name: "Sentinel Fighting Armor Iron Man",
        Description: `This is a posable action figure of a character from science-fiction/anime.
    `,
        Image: "https://www.hlj.com/productimages/set/set88731_0.jpg",
        Price: 119.99,
        Quantity: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("items");
  },
};
