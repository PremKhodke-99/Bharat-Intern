const mongoose = require("mongoose");

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.8d5atas.mongodb.net/blogapp`)
    .then(() => console.log("Connected to DB Online"))
    .catch((err) => console.error("Failed to connect", err));
