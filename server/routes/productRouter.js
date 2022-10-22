const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { privateRoute, access } = require("../middlewares/privateRoute");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post(
  "/",
  privateRoute,
  access("admin"),
  productController.createProduct
);
router.patch(
  "/:id",
  privateRoute,
  access("admin"),
  productController.updateProduct
);
router.delete(
  "/:id",
  privateRoute,
  access("admin"),
  productController.deleteProduct
);
router.get("/:productId/reviews");

module.exports = router;
