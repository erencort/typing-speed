const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ResultModel = require("./models/Result");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/results", (req, res) => {
  ResultModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/saveResult", async (req, res) => {
  const result = req.body;
  const newResult = new ResultModel(result);
  await newResult.save();

  res.json(result);
});

const port = 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose.connect(CONNECTION_URL);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
