const blogRouter = require("express").Router();
const { addBlog } = require("../function/blog/addBlog.js");
const { getBlog } = require("../function/blog/blog.js");
const { getBlogId } = require("../function/blog/blogId.js");
const { deleteBlog } = require("../function/blog/deleteBlog.js");
const { editBlog } = require("../function/blog/editBlog.js");

blogRouter.get("/", getBlog);
blogRouter.get("/:id", getBlogId);
blogRouter.post("/", addBlog);
// blogRouter.post("", addBlog);
blogRouter.put("/:id", editBlog);
blogRouter.delete("/:id", deleteBlog);

module.exports = blogRouter;