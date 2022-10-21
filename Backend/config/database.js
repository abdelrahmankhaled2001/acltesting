const mongoose = require("mongoose");
const global = require("config");
const mongoURL =
  "mongodb+srv://5amclub:5amclub@aclapp.oqgqwyl.mongodb.net/5AMClub?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(mongoURL);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
