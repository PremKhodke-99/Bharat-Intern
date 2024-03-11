const Users = require("../model/user.model");

class UserService {
    save = async (doc) => {
        const result = await doc.save();
        return result;
    }

    findByEmail = async (body) => {
        const { email } = body
        const user = await Users.findOne({ email })
        return user;
    }

    create = async (body) => {
        const newUser = new Users(body);
        const savedUser = await this.save(newUser);
        return savedUser;
    }

    login = async (body) => {
        console.log(body);
        const { email, password } = body;
        const result = await Users.findOne({
            $and: [
                { email: email },
                { password: password }
            ]
        });
        console.log(result)
        return result;
    }

}

module.exports = UserService;