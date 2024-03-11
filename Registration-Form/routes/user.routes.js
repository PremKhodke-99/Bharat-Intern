const router = require('express').Router();

const UserService = require("../service/user.service");
const UserServiceInstances = new UserService();

router.post("/register", async (req, res) => {
    const { body } = req;
    const alreadyRegistered = await UserServiceInstances.findByEmail(body);

    if (alreadyRegistered) {
        res.redirect("/error");
    }else {
        const result = await UserServiceInstances.create(body);
        console.log(result);
        res.redirect("/login")
    }
}); 

router.get("/loginUser", async (req, res) => {
    const { body } = req;
    const result = await UserServiceInstances.login(body);
    if (!result) {
        console.log(result)
        res.redirect("/homepage")
    } else {
        res.redirect("/error")
    }
});


module.exports = router