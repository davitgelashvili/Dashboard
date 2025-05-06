// სახელმწიფო და კერძო სტრუქტურები

const mongoose = require("mongoose");

const structuresSchema = new mongoose.Schema({
    createDate: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("structures", structuresSchema);
