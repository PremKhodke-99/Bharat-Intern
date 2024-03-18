require('dotenv').config();
const express = require('express');
const hbs = require("hbs")
const path = require("path");
const port = process.env.PORT || 8082;
require("./db/conn");

const userRoute = require("./routes/user.routes");

const app = express();

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use("/", userRoute);


app.listen(port, () => {
    console.log('Listening at', port)
})