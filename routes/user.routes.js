const router = require("express").Router();

const userController = require("../controller/user.controller")

router.post("/create", userController.createOtp)

module.exports = router;