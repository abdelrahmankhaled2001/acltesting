const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  country: { type: String, required: true },
  money_owed: { type: Number, default: 0, required: true },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  biography: { type: String },
  courses: { type: [{ type: mongoose.Types.ObjectId, ref: "courses" }] },
});


const Instructor = mongoose.model("instructor", instructorSchema);
module.exports = Instructor;

