const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const { privateRoute } = require("../middlewares/privateRoute");

//! subrouters in user router

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.post("/forgetPassword", authController.forgetPassword);
router.patch("/resetPassword/:id/:token", authController.resetPassword);
router.get("/userInfo", userController.getUserById);

router.use(privateRoute);
router.patch("/changePassword", authController.changePassword);
router.patch("/userInfo", userController.changeUserData);
router.delete("/userInfo", userController.deleteUser);

module.exports = router;
