const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const Blog = require("./models/blog")

const userRoute = require('./routes/user.routes');
const blogRoute = require('./routes/blog.routes');
const { checkForAuthenticationCookie } = require("./middleware/authentication");

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/blogs")
    .then(() => console.log('MONGO DB Connected'))
    .catch((err) => console.error("Can't connect DB", err))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))

app.get("/", async (req, res) => {
    const allBlogs = await Blog.find({})

    res.render("home",{
        user: req.user,
        blogs: allBlogs
    })
})

app.use("/user", userRoute)
app.use("/blog", blogRoute)

app.listen(PORT, () => {
    console.log("Server Started", PORT);
})