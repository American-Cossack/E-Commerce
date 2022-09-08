const { Cart, Checkout, Item, User } = require("../models");

const GetCheckout = async (req, res) => {
  try {
    item = await Checkout.findAll({});
  } catch (error) {
    throw error;
  }
};
GetCheckout();
