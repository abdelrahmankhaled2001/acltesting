const express = require("express");
const app = express();
const port = process.env.port || 4000;
const connect = require("./config/database.js");
app.get("/", (req, res) => res.send("here we go"));

connect();
app.listen(port);

const Trainee = require("./models/IndividualTrainee");
const indtrainee = new Trainee({
  username: "ourBeloved User2",
  password: "hisPassword",
  gender: "male",
  firstName: "fname",
});

indtrainee.save();

Trainee.find()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
