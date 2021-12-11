var express = require('express');
var router = express.Router();
let indexController = require("../controllers/indexController");
let formValidator = require("../validations/formValidator");

/* GET home page. */
router.get('/', indexController.index);
router.post("/send", formValidator, indexController.indexProcess);
router.get("/thanks", indexController.thanks);
router.post("/remove", indexController.remove);

module.exports = router;