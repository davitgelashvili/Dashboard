// ბლოგი
const mongoose = require("mongoose");

const MultilangText = {
    ka: { type: String, required: false },
    en: { type: String, required: false }
};

const BlogSchema = new mongoose.Schema({
    createDate: {
        type: Date,
        default: Date.now
    },
    title: {
        type: MultilangText,
        required: false,
    },
    body: {
        type: MultilangText,
        required: false,
    },
    cover: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("blog", BlogSchema);
