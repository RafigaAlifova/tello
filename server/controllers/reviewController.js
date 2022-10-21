const asyncCatch = require("../utils/asyncCatch");
const GlobalError = require("../errors/GlobalError");
const Review = require("../models/review");
const { createNew, updateOne, deleteOne }= require("../utils/factory");

// exports.getAllReviews = asyncCatch(async (req, res, next) => {
//   console.log("all");
//   const reviews = await Review.find();
//   res.status(200).json({ success: true, data: { reviews } });
// });

// exports.getReviewsByProductId = asyncCatch(async (req, res, next) => {
//   const productId = req.params.productId;
//   const reviews = await Review.find({ tour: productId });
//   res.status(200).json({ success: true, data: { reviews } });
// });

//! merging of getAllReviews and getReviewsByProductId
exports.getReviews = asyncCatch(async (req, res, next) => {
  const productId = req.params.productId;
  if (tourId) {
    const reviews = await Review.find({ product: productId });
    res.status(200).json({ success: true, data: { reviews } });
  } else {
    const reviews = await Review.find();
    res.status(200).json({ success: true, data: { reviews } });
  }
});


exports.createReview = createNew(Review);
exports.updateReview = updateOne(Review);
exports.deleteReview = deleteOne(Review);
