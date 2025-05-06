const express = require("express");
const mainRouter = express.Router();

const blogRouter = require("./allRouter/blogRouter.js");
const uploadRouter = require("./allRouter/uploadPhotoRouter.js");

mainRouter.get('/', (req, res) => {
    res.json({ message: 'გამარჯობა Frontend-იდან!' });
});

// როუტერის გამოყენება
mainRouter.use("/blogs", blogRouter); // ყველა /blogs-თან დაკავშირებული როუტი
mainRouter.use("/upload", uploadRouter); // ყველა /blogs-თან დაკავშირებული როუტი

module.exports = mainRouter;