var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res){
  res.sendFile('index.html', { 
    root: path.join(__dirname, '../../public')
  });
});

router.get('/sarah/is/cool', function(req, res) {
  res.sendFile('views/saved.html', { 
    root: path.join(__dirname, '../../public')
  });
})

router.get('/saved', function(req, res) {
  res.sendFile('views/saved.html', { 
    root: path.join(__dirname, '../../public')
  });
})


module.exports = router;