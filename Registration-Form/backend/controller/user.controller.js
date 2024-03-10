const Users = require("../model/user.model");
const UserService = require('../service/user.service');
const UserServiceInstances = new UserService();

const registerNewUser = async (req, res) => {
    const { body } = req;
    const result = await UserServiceInstances.create(body);
    res.json(result);
}

const loginUser = async (req, res) => {
    const { body } = req;
    const result = await UserServiceInstances.login(body);
    res.json(result);
}

module.exports = {
    registerNewUser,
    loginUser
}