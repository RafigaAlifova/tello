const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { privateRoute, access } = require("../middlewares/privateRoute");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.get("/:productId/reviews");

router.use(privateRoute, access("admin"));
router.post("/", productController.createProduct);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
module.exports = router;
