var router = require('express').Router();
var fetch = require('./fetch');
var headlines = require('./headlines');
var notes = require('./notes');

router.use('/fetch', fetch);
router.use('/headlines', headlines);
router.use('/notes', notes);

module.exports = router;

