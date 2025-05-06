// მისია და ხედვა
const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema({
    createDate: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("mission", missionSchema);
