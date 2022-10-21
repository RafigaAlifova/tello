const Product = require("../models/product");
const GlobalFilter = require("../utils/GlobalFilter");
const asyncCatch = require("../utils/asyncCatch");
const GlobalError = require("../errors/GlobalError");
const { createNew, updateOne, deleteOne,getById} = require("../utils/factory");

exports.getAllProducts = asyncCatch(async (req, res) => {
  let allProducts = new GlobalFilter(Product.find(), req.query);

  //! Filter, Sorting, Fields, Pagination
  allProducts.search().filter().fields().sort().paginate();
  const products = await allProducts.query;
  res.status(200).json({
    success: true,
    quantity: products.length,
    data: { products },
  });
});

exports.getProductById = getById(Product);
exports.createProduct = createNew(Product);
exports.deleteProduct = deleteOne(Product);
exports.updateProduct = updateOne(Product);

