const router = require("express").Router();
const controller = require("../controllers/ItemsController");
const middleware = require("../middleware");

router.get(":/item", controller.GetItems);

module.exports = router;
