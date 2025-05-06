const table = require("../../table/blog");

const addBlog = async (req, res) => {
    try {
        const { createDate, title, body, cover } = req.body;

        const newBlog = new table({
            createDate,
            title,
            body,
            cover
        });

        const savedBlog = await newBlog.save();

        return res.status(200).send(savedBlog);
    } catch (error) {
        console.error("Blog save error:", error);
        return res.status(500).send("მოხდა შეცდომა ბლოგის დამატებისას");
    }
};

module.exports = { addBlog };
