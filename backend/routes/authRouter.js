const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const isAuth = require("../middleware/isAuth");

router.post("/signin", authController.postSignin);
router.post("/login", authController.postLogin);
router.get("/user", isAuth, authController.getUser);

module.exports = router;
