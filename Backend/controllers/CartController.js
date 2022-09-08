const { Cart, Checkout, Item, User } = require("../models");

const GetCart = async (req, res) => {
  try {
    Cart1 = await Cart.findOne({});
    res.send(Cart1);
  } catch (error) {
    throw error;
  }
};
GetCart();
