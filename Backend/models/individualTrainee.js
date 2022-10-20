const mongoose = require("mongoose");
const indTraineeSchema = {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  email: { type: String },
  country: { type: String },
  courses: { type: [Number] },
  creditCardDetails: {
    cardNumber: String,
    cardHolderName: String,
    expiryDate: Date,
  },
};

const instructor = mongoose.model("instructor", instructorSchema);
module.exports = instructor;