const express = require("express");
const router = express.Router({ mergeParams: true });
const reviewController = require("../controllers/reviewController");
const { privateRoute, access } = require("../middlewares/privateRoute");


router.use(privateRoute, access("user"));
router.get("/", reviewController.getReviews);
router.post("/", reviewController.createReview);
router.patch("/:id", reviewController.updateReview);
router.delete("/:id", access("admin"), reviewController.deleteReview);

module.exports = router;
