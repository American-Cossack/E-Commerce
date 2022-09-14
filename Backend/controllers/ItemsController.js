const { Item, Cart } = require("../models");

const GetItems = async (req, res) => {
  try {
    let item2 = await Item.findAll({});
    return res.send(item2);
  } catch (error) {
    throw error;
  }
};

const GetItemsByPK = async (req, res) => {
  let cart = await Cart.findByPk(1);
  let cartID = cart.item_id;
  try {
    let item3 = await Item.findByPk(cartID);
    return res.send(item3);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  GetItems,
  GetItemsByPK,
};
