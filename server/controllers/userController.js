const User = require("../models/user");
const { deleteOne, getById, getAll, updateOne, createNew } = require("../utils/factory");

//CRUD
exports.createUser = createNew(User);
exports.changeUserData = updateOne(User);
exports.getUserById = getById(User);
exports.getAllUser=getAll(User);
exports.deleteUser = deleteOne(User);
