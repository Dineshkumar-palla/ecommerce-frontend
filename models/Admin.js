const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  phone: String,
  profilePic: String   // store image URL
});

module.exports = mongoose.model("Admin", adminSchema);