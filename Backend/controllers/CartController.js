const { Cart, Item, User } = require("../models");

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

const UpdateCart = async (req, res) => {
  let ItemID = parseInt(req.body.id);
  let CartID = parseInt(req.body.cart_id);
  // const cart_id = await Cart.findOne({ where: { item_id: null } });
  // const true_cart_id = await cart_id.item_id;

  try {
    cart = await Cart.update(
      { item_id: ItemID },
      { where: { id: 1 }, returning: true }
    );

    res.send(cart);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetCart,
  PostCart,
  UpdateCart,
};
