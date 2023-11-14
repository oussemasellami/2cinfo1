var express = require("express");
var router = express.Router();
var usercontroller = require("../controller/usercontroller");
/* GET users listing. */

router.get("/showall", usercontroller.show);
router.post("/add", usercontroller.add);
router.put("/update/:id", usercontroller.update);
router.delete("/delete/:id", usercontroller.deleteuser);
router.get("/showbyname/:name", usercontroller.showbyone);

module.exports = router;
