
var router = require("express").Router();
var headlineController = require("../../controllers/headlines");


router.route('/:id')
.get(headlineController.find)
.put(headlineController.insert)
.delete(headlineController.delete);


module.exports = router;
