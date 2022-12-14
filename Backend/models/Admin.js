const mongoose = require("mongoose");

const adminShema = new mongoose.Shema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Admin = mongoose.model("Admin", adminShema);
module.exports = Admin;
