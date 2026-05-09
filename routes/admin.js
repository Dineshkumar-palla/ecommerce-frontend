const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

// REGISTER

router.post("/register", async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = new Admin({
    email,
    password: hashedPassword
  });

  await admin.save();

  res.json({ message: "Admin Registered ✅" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(400).json({ message: "Admin not found ❌" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Wrong password ❌" });
  }

  res.json({ message: "Login successful ✅" });
});

router.put("/update-profile", async (req, res) => {
  const { email, name, phone, profilePic } = req.body;

  const admin = await Admin.findOneAndUpdate(
    { email },
    { name, phone, profilePic },
    { new: true }
  );

  res.json({
    message: "Profile Updated ✅",
    admin
  });
});

router.get("/profile/:email", async (req, res) => {
  const admin = await Admin.findOne({ email: req.params.email });

  res.json(admin);
});

module.exports = router;