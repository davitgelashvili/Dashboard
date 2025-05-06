// იუზერები
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    createDate: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("users", UserSchema);
