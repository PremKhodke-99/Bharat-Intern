const router = require('express').Router();

const {
    signInPage,
    signUpPage,
    logout,
    userLogin,
    registerUser,
} = require("../controllers/user.controller");

router.get("/signin", signInPage);
router.get("/signup", signUpPage);
router.get('/logout', logout);
router.post('/signin', userLogin);
router.post("/signup", registerUser);

module.exports = router;