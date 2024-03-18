const mongoose = require("mongoose");

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@blogcluster.azbz3rs.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster`)
    .then(() => console.log("Connected to DB Online"))
    .catch((err) => console.error("Failed to connect", err));