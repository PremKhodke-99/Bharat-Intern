const router = require('express').Router();
const Blog = require("../models/blog");

router.get('/add-new', (req, res) => {
    return res.render("addBlog", {
        user: req.user,
    })
})

router.post('/add-new', async (req, res) => {
    const { title, body} = req.body;
    const blog = await Blog.create({
        body,
        title,
        createdBy: req.user._id
    });
    return res.redirect('/blog/${blog._id}')
})

module.exports = router;