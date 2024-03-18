const router = require("express").Router();
const {
    index,
    home,
    register,
    login
} = require("../controller/user.controller");

router.get("/", index);
router.get("/home", home);
router.post("/register", register);
router.post("/login", login)

module.exports = router;