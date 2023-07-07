const express = require("express");
const { route } = require("./CreateUser");
const router = express.Router();

router.post("/getdata", async (req, res) => {
  try {
    console.log(global.foods);
    res.send([global.foods,global.catData]);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
