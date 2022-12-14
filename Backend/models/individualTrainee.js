const mongoose = require("mongoose");
const indTraineeSchema = new mongoose.Schema({
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
  courses: { type: [{ type: mongoose.Types.ObjectId, ref: "Courses" }] },
  courseRating: {
    type: [
      {
        course: { type: mongoose.Types.ObjectId, ref: "Courses" },
        rating: Number,
      },
    ],
  },
  instructorRating: {
    type: [
      {
        instructor: { type: mongoose.Types.ObjectId, ref: "Instructor" },
        rating: Number,
      },
    ],
  },
  creditCardDetails: {
    cardNumber: String,
    cardHolderName: String,
    expiryDateYear: { type: Number, max: 9999 },
    expiryDateMonth: { type: Number, max: 12 },
  },
});

const IndividualTrainee = mongoose.model("IndvidualTrainee", indTraineeSchema);
module.exports = IndividualTrainee;
