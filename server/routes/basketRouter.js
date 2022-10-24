const express = require("express");
const router = express.Router();
const basketController = require("../controllers/basketController");
const { privateRoute, access } = require("../middlewares/privateRoute");

router.get("/",  basketController.getBasketByUserId);
router.post("/",  basketController.createBasket);
router.patch("/",  basketController.updateBasket);

module.exports = router;