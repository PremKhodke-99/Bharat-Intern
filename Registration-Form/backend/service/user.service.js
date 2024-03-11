const Users = require("../model/user.model");

class UserService {
    save = async (doc) => {
        const result = await doc.save();
        return result;
    }

    create = async (body) => {
        const newUser = new Users(body);
        const savedUser = await this.save(newUser);
        return savedUser;
    }

    login = async (body) => {
        const { email, password } = body;
        const result = await Users.find({ email: email, password: password });
        return result;
    }

}

module.exports = UserService;