const asyncCatch = require("../utils/asyncCatch");
const GlobalError = require("../errors/GlobalError");
const User = require("../models/user");
const { deleteOne,getById,updateOne } = require("../utils/factory");

exports.changeUserData =updateOne(User);

exports.getUserById = getById(User);
exports.deleteUser = deleteOne(User);
