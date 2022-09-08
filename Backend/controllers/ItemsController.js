const { Cart, Checkout, Item, User } = require("../models");

const GetItems = async (req, res) => {
  try {
    item = await Item.findAll({});
  } catch (error) {
    throw error;
  }
};
GetItems();
