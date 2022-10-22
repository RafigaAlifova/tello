const FAQ = require("../models/FAQ");
const {
  createNew,
  updateOne,
  deleteOne,
  getAll,
  getById,
} = require("../utils/factory");

//CRUD
exports.createFAQ = createNew(FAQ);
exports.getAllFAQ = getAll(FAQ);
exports.getFAQById = getById(FAQ);
exports.updateFAQ = updateOne(FAQ);
exports.deleteFAQ = deleteOne(FAQ);
