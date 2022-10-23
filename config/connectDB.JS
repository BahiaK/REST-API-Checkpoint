const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("connected successfully"));
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDB;
