require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

const userRoutes = require("./routes/user.routes");

const mongoDB_url = process.env.MongoDB_URL;

mongoose.connect(mongoDB_url)
    .then(() => console.log("Connected to DB", mongoDB_url))
    .catch((err) => console.log("Failed to connect", err));

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

// mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.8d5atas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
//     .then(() => console.log("Connected to DB Online"))
//     .catch((err) => console.error("Failed to connect", err));

const app = express();
const port = 8082;


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/', userRoutes);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/index.html");
})
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/frontend/login.html")
})
app.get("/homepage", (req, res) => {
    res.sendFile(__dirname + "/frontend/homepage.html")
})
app.get("/error", (req, res) => {
    res.sendFile(__dirname + "/frontend/error.html")
})


app.listen(port, () => {
    console.log('Listening at', port)
})