const router = require('express').Router();
const { registerNewUser, loginUser } = require("../controller/user.controller");

router.post("/register", registerNewUser);
router.get("/login", loginUser);

module.exports = router