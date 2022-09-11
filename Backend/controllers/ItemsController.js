const { Item } = require("../models");

const GetItems = async (req, res) => {
  try {
    let item2 = await Item.findAll({});
    return res.send(item2);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  GetItems,
};
