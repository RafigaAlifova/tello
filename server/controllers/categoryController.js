const Category = require("../models/category");
const {
  createNew,
  updateOne,
  deleteOne,
  getAll,
  getById,
} = require("../utils/factory");

//CRUD
exports.createCategory = createNew(Category);
exports.getAllCategory = getAll(Category);
exports.getCategoryById = getById(Category);
exports.updateCategory = updateOne(Category);
exports.deleteCategory = deleteOne(Category);
