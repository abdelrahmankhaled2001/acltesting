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
const Video = mongoose .model ("video",videoSchema);
module.exports = Video;