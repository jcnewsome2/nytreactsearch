var express = require('express');
var router = express.Router();

var fetch = require('../../controllers/fetch.js');

router.get('/', fetch.scrapeHeadlines);

module.exports = router;