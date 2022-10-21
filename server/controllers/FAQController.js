const FAQ = require("../models/FAQ");
const { createNew, updateOne, deleteOne , getAll,getById} = require("../utils/factory");

exports.getAllFAQ = getAll(FAQ);
exports.getFAQById = getById(FAQ);
exports.createFAQ = createNew(FAQ);
exports.updateFAQ = updateOne(FAQ);
exports.deleteFAQ = deleteOne(FAQ);
