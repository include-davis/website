var express = require('express');
var router = express.Router();

router.get('/board', function(req, res) {
  res.render('board');
//   res.send('respond with a resource');
});

module.exports = router;