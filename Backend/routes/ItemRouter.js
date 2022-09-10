const router = require("express").Router();
const controller = require("../controllers/ItemsController");
// const middleware = require("../middleware");

// router.get(":/items", controller.GetItems);
router.get("/", controller.GetItems);
module.exports = router;
