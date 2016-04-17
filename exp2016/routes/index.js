var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.send({
//    users: ['Will', "Laura"]
//  });
  res.render('index', {
    title: 'My App!',
    age: 45
   });
});

module.exports = router;
