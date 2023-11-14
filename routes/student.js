var express = require("express");
var router = express.Router();
var studentController = require("../controller/studentController");
/* GET users listing. */

router.get("/showall", studentController.show);
router.post("/add", studentController.add);
router.put("/update/:id", studentController.update);
router.delete("/delete/:id", studentController.deleteuser);
router.get("/showbyname/:name", studentController.showbyone);

module.exports = router;
