const Property = require("../models/property");
const { createNew, updateOne, deleteOne, getAll,getById } = require("../utils/factory");

exports.deleteProperty = deleteOne(Property);
exports.updateProperty = updateOne(Property);
exports.createProperty = createNew(Property);
exports.getAllProperties = getAll(Property)
exports.getPropertyById = getById(Property)
