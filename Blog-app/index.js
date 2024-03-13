const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const userRoute = require('./routes/user.routes')

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/blogs")
    .then(() => console.log('MONGO DB Connected'))
    .catch((err) => console.error("Can't connect DB", err))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.render("home")
})

app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log("Server Started", PORT);
})