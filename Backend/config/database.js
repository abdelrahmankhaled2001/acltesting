const mongoose = require("mongoose");
const global = require("config");

const mongoURL = global.get("mongoURL");


const connect = async () => {
  try {
    await mongoose.connect(mongoURL);

  } catch (err) {
    console.log(err);
  }

};

module.exports = connect;
