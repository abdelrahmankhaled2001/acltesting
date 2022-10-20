const mongoose = require("mongoose");

const courseSchema = {
  title: { type: String, required: true, unique: true },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructors",
    required: true,
  },
  total_hours: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  price: { type: Map, required: true },
  subject: { type: [String], required: true },
  subtitle: { type: String },
  preview_video: { type: mongoose.Types.ObjectId, ref: "Videos" },
  outline: { type: String },
  videos: { type: [{ type: mongoose.Types.ObjectId, ref: "Videos" }] },
  views: { type: Number, default: 0 },
  reviews: {
    type: [{ user: { type: String }, content: { type: String } }],
  },
  promotion: {
    percentage: { type: Number },
    deadline: { type: Date },
  },
};

const course = mongoose.model("course", courseSchema);

module.exports = course;
