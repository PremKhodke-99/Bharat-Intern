require('dotenv').config();
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
require("./db/conn");
const Blog = require("./models/blog")

const userRoute = require('./routes/user.routes');
const blogRoute = require('./routes/blog.routes');
const { checkForAuthenticationCookie } = require("./middleware/authentication");

const app = express();
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

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