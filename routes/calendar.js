var express = require('express');
var router = express.Router();

router.get('/calendar', function(req, res) {
  res.render('calendar');
//   res.send('respond with a resource');
});

module.exports = router;