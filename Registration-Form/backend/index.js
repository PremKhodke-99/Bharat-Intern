require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require("./routes/user.routes");

const mongoDB_url = process.env.MongoDB_URL;

mongoose.connect(mongoDB_url)
    .then(() => console.log("Connected to DB", mongoDB_url))
    .catch((err) => console.log("Failed to connect", err));

const app = express();
const port = 8082;

app.use(express.json());
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log('Listening at', port)
})