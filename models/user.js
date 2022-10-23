const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  age: { type: Number, required: true },
});

module.exports = User = mongoose.model("user", userSchema);
