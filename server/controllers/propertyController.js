const Property = require("../models/property");
const {
  createNew,
  updateOne,
  deleteOne,
  getAll,
  getById,
} = require("../utils/factory");

//CRUD
exports.createProperty = createNew(Property);
exports.getAllProperties = getAll(Property);
exports.getPropertyById = getById(Property);
exports.updateProperty = updateOne(Property);
exports.deleteProperty = deleteOne(Property);
