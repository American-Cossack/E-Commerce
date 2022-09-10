const { Cart, Checkout, Item, User } = require("../models");

const GetCheckout = async (req, res) => {
  try {
    item = await Checkout.findAll({});
    res.send(item);
  } catch (error) {
    throw error;
  }
};
const PostCheckout = async (req, res) => {
  try {
    check = await Checkout.create({ ...req.body });
    res.send(check);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetCheckout,
  PostCheckout,
};
