const router = require('express').Router();
const multer = require("multer");
const path = require("path");

const {
    getBlog,
    getBlogById,
    addNewBlog
} = require("../controllers/blog.controller")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve("./public/uploads/"));
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });

router.get('/add-new', getBlog);
router.get('/:id', getBlogById);
router.post('/', upload.single("coverImage"), addNewBlog)

module.exports = router;