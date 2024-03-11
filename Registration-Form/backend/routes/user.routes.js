const router = require('express').Router();

const UserService = require("../service/user.service");
const UserServiceInstances = new UserService();

router.get("/", (req, res) => {
    res.sendFile("C:/Users/premk/WebProject/BharatIntern/Registration-Form/frontend/index.html")
})
router.post("/register", async (req, res) => {
    const { body } = req;
    const result = await UserServiceInstances.create(body);
    console.log(result);
    res.redirect("/login")
});

router.get("/login", (req, res) => {
    res.sendFile("C:/Users/premk/WebProject/BharatIntern/Registration-Form/frontend/login.html")
})
router.get("/loginUser", async (req, res) => {

    const { body } = req;
    const result = await UserServiceInstances.login(body);
    console.log(result)
    res.redirect("/homepage")
});

router.get("/homepage", (req, res) => {
    res.sendFile("C:/Users/premk/WebProject/BharatIntern/Registration-Form/frontend/homepage.html")
})

module.exports = router