const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const { privateRoute,access } = require("../middlewares/privateRoute");

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.post("/forgetPassword", authController.forgetPassword);
router.patch("/resetPassword/:id/:token", authController.resetPassword);
router.patch("/userInfo/changePassword", authController.changePassword);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.patch("/userInfo", userController.changeUserData);
router.delete("/userInfo", userController.deleteUser);

router.use(privateRoute, access("admin"));
router.get("/", userController.getAllUser);

module.exports = router;
