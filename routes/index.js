var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/paypalcallback', function(req, res) {
console.log("************ req.query", req.query);
console.log("************ req.body", req.body);
  res.send(JSON.stringify(req.query) + "~" + JSON.stringify(req.body));
});

module.exports = router;
