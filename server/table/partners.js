// პარტნიორები
const mongoose = require("mongoose");

const partnersSchema = new mongoose.Schema({
    createDate: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("partners", partnersSchema);
