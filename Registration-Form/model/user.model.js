const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    name: { type: String },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => validator.isEmail(value),
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;