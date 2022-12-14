const Basket = require("../models/basket");
const asyncCatch = require("../utils/asyncCatch");
const GlobalError = require("../errors/GlobalError");
const { createNew, updateOne, deleteOne } = require("../utils/factory");

exports.getBasketByUserId = asyncCatch(async (req, res, next) => {
  const userId = req.user._id;
  const oneBasket = await Basket.findOne({ userId });
  if (!oneBasket) return next(new GlobalError("Invalid id: FINDONE", 404));
  res.status(200).json({
    success: true,
    data: {
      basket: oneBasket,
    },
  });
});

exports.createBasket = asyncCatch(async (req, res, next) => {
  const newBasket = await Basket.create(req.body);
});

exports.updateBasket = asyncCatch(async (req, res, next) => {});
