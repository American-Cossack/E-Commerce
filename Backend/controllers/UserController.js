const { Cart, Checkout, Item, User } = require("../models");

const GetUser = async (req, res) => {
  try {
    item = await User.findOne({});
  } catch (error) {
    throw error;
  }
};
GetUser;
