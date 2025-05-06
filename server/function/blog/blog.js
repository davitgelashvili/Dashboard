const table = require("../../table/blog");

const getBlog = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // რომელ გვერდზეა მომხმარებელი
  const limit = parseInt(req.query.limit) || 3; // რამდენი ელემენტი ერთ გვერდზე

  const startIndex = (page - 1) * limit;
  
  try {
    const total = await table.countDocuments(); // სულ რამდენი ჩანაწერია
    const blogs = await table.find()
      .skip(startIndex)
      .limit(limit)
      .sort({ createdAt: -1 }); // სურვილისამებრ, ბოლო ჩანაწერები პირველები

    return res.status(200).json({
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      totalItems: total,
      data: blogs
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("მოხდა შეცდომა");
  }
};

module.exports = { getBlog };
