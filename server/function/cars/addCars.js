const table = require("../../table/cars");

const addCars = async (req, res) => {
    try {
        const { createDate, title, body, cover, fwd, kolofi, dzravi, price } = req.body;

        const newCars = new table({
            createDate,
            title,
            price,
            body,
            cover,
            fwd,
            kolofi,
            dzravi
        });

        const savedCars = await newCars.save();

        return res.status(200).send(savedCars);
    } catch (error) {
        console.error("Cars save error:", error);
        return res.status(500).send("მოხდა შეცდომა ბლოგის დამატებისას");
    }
};

module.exports = { addCars };
