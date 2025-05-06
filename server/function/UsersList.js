const table = require("../table/users");

const getUsers = async (req, res) => {
    try {
      const clients = await table.find();

      return res.status(200).send(clients);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong while getting clients!");
    }
};

module.exports = { getUsers };