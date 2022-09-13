const { Cart, Item, User } = require("../models");

const GetUser = async (req, res) => {
  try {
    user = await User.findOne({});
    res.send(user);
  } catch (error) {
    throw error;
  }
};
GetUser;

const PostUser = async (req, res) => {
  try {
    user = await User.create({ ...req.body });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const DeleteAllUsers = async (req, res) => {
  try {
    user = await User.destroy({ where: { Email: null } });
    // res.send(user);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  PostUser,
  GetUser,
  DeleteAllUsers,
};
