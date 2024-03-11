const Users = require("../model/user.model");
const UserService = require('../service/user.service');
const UserServiceInstances = new UserService();

const registerNewUser = async (req, res) => {
    const { body } = req;
    const result = await UserServiceInstances.create(body);
    console.log(result);
    res.send(result);
}

const loginUser = async (req, res) => {
    const { body } = req;
    const result = await UserServiceInstances.login(body);
    if (result.length)
        res.send(result);
    else
        res.status(404).json({ message: "Invalid Email or Password" })
}

module.exports = {
    registerNewUser,
    loginUser
}