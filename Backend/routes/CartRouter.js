const router = require("express").Router();
const controller = require("../controllers/CartController");
// const middleware = require("../middleware");

// router.get(":/items", controller.GetItems);
router.get("/", controller.GetCart);
router.post("/", controller.PostCart);
module.exports = router;
