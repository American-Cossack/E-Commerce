const router = require("express").Router();
// const controllers = require("../controllers");
// // const router = Router();
const ItemRouter = require("./ItemRouter");
// router.arguments("/items", ItemRouter);
const UserRouter = require("./UserRouter");
const CartRouter = require("./CartRouter");

router.get("/", (req, res) => res.send("This is root!"));
router.use("/items", ItemRouter);
router.use("/users", UserRouter);
router.use("/carts", CartRouter);

module.exports = router;
