const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // 🔥 IMPORTANT

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

app.use("/admin", require("./routes/admin"));

app.listen(5000, () => console.log("Server running on port 5000"));