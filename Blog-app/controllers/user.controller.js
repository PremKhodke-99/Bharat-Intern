const User = require("../models/user");

const signInPage = (req, res) => {
    return res.render("signin");
}

const signUpPage = (req, res) => {
    return res.render("signup");
}

const logout = (req, res) => {
    res.clearCookie('token').redirect("/");
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        return res.cookie("token", token).redirect("/");
    } catch (error) {
        return res.render("signin", {
            error: "Incorrect Email or Password"
        });
    }
}

const registerUser = async (req, res) => {
    const { fullName, email, password } = req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/");
}

module.exports = {
    signInPage,
    signUpPage,
    logout,
    userLogin,
    registerUser,
}