var express = require("express");
var router = express.Router();
var Voiture = require("../model/voiture");
/* GET users listing. */
router.get("/a", function (req, res, next) {
  res.send("bonjour 2cinfo1");
});

router.post("/addv", async function (req, res, next) {
  try {
    const voiture = new Voiture(req.body);
    await voiture.save();
    res.status(200).send("add voiture");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
