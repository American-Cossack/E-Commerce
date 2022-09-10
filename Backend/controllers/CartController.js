const { Cart, Checkout, Item, User } = require("../models");

const GetCart = async (req, res) => {
  try {
    Cart1 = await Cart.findOne({});
    res.send(Cart1);
  } catch (error) {
    throw error;
  }
};
const PostCart = async (req, res) => {
  try {
    cart = await Cart.create({ ...req.body });
    res.send(cart);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetCart,
  PostCart,
};
