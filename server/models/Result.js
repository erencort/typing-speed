const mongoose = require("mongoose");

const ResultSchema = mongoose.Schema({
  name: String,
  result: Number,
});

const ResultModel = mongoose.model("results", ResultSchema);
module.exports = ResultModel;
