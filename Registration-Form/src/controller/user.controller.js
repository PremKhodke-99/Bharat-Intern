const Register = require("../model/register.model");

const index = (req, res) => {
    res.render("index")
}

const home = (req, res) => {
    res.render("home")
}

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userEmail = await Register.findOne({ email });
        if (userEmail) {
            res.status(401).render("error");
        }

        const registerUser = new Register({
            name,
            email,
            password
        })

        const registered = await registerUser.save();
        console.log(registered);
        res.status(201).render("index")
    } catch (err) {
        res.status(400).render("error");
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userEmail = await Register.findOne({ email });

        if(userEmail.password === password){
            res.status(201).render("home");
        }else{
            res.render("error")
        }
    } catch (err) {
        res.render("error")
    }
}

module.exports = {
    index,
    home,
    register,
    login
}