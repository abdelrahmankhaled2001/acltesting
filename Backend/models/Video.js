const mongoose = require("mongoose");
const videoSchema = {
    link:{
        type: String,
        required: True,
    },
    description:{
        type: String,
        required: True,
    }
};
const video = mongoose .model ("video",videoSchema);
module.exports = video;