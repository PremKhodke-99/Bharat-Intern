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
        const result = await Users.findOne({ email: email })
            .then(user => {
                if (user) {
                    if (password === user.password) {
                        res.send({ message: "Login Successfull", user: user })
                    } else {
                        res.send({ message: "Password didn't" })
                    }
                } else {
                    res.end({ message: "user not registered" })
                }
            })

        return result;
    }

}

module.exports = UserService;