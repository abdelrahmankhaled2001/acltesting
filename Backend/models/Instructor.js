const mongoose = require("mongoose");
const instructorSchema = {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: { type: String },
  country: { type: String },
  money_owed: { type: Number, default: 0, required: true },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  biography: { type: String },
  courses: { type: [Number] },
};

const instructor = mongoose.model("Instructor", instructorSchema);
module.exports = instructor;
