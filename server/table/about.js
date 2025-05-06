// ჩვენს შესახებ
const mongoose = require("mongoose");

const MultilangText = {
    ka: { type: String, required: true },
    en: { type: String, required: true }
};

const aboutusSchema = new mongoose.Schema({
    createDate: {
        type: String,
        required: true,
    },
    title: {
        type: MultilangText,
        required: true,
    },
    body: {
        type: MultilangText,
        required: true,
    },
});

module.exports = mongoose.model("aboutus", aboutusSchema);
