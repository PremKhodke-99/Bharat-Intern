const router = require('express').Router();
const { registerNewUser } = require("../controller/user.controller");

router.get("/register", registerNewUser);
router.get("/lolgin",);

module.exports = router