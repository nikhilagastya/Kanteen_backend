const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/create",
  [body("password", "Min length is 6").isLength({ min: 6 })],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      await User.create({
        name: req.body.name,
        rollNo: req.body.rollNo,
        phno: req.body.phno,
        email: req.body.email,
        password: req.body.password,
      });
      res.json({ Success: true });
    } catch (error) {
      console.log(error);
      res.json({ Success: false });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    email = req.body.email;
    user_data = await User.findOne({ email });
    console.log(user_data);
    if (!user_data) {
      return res.json({ errors: "Given mail id is not registered" });
    }
    if (user_data.password !== req.body.password) {
      return res.json({ errors: "Incorrect Password" });
    }
    return res.json({ Success: true });
  } catch (error) {
    console.log(error);
    res.json({ Success: false });
  }
});
module.exports = router;
