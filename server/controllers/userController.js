const User = require("../models/user");
const { deleteOne, getById, updateOne } = require("../utils/factory");

//CRUD
exports.changeUserData = updateOne(User);
exports.getUserById = getById(User);
exports.deleteUser = deleteOne(User);
