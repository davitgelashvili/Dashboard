const table = require("../../table/blog");

const getBlogId = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await table.findById(id);

    if (!blog) {
      return res.status(404).send("ბლოგი ვერ მოიძებნა");
    }

    return res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    return res.status(500).send("მოხდა შეცდომა ბლოგის წამოღებისას");
  }
};

module.exports = { getBlogId };
