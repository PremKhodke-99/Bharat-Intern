const Blog = require("../models/blog");

const getBlog = (req, res) => {
    return res.render("addBlog", {
        user: req.user,
    });
}

const getBlogById = async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate("createdBy");

    return res.render('blog', {
        user: req.user,
        blog,
    });
}

const addNewBlog = async (req, res) => {
    const { title, body } = req.body;
    const blog = await Blog.create({
        body,
        title,
        createdBy: req.user._id,
        coverImageURL: `/uploads/${req.file.filename}`,
    });
    return res.redirect(`/blog/${blog._id}`);
}

module.exports = {
    getBlog,
    getBlogById,
    addNewBlog
}