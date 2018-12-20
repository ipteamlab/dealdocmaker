var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',{curdata: '24 сентября 1984 г.'});
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/getcontract', function(req, res, next) {
  var datafromform =req.body;
  res.render('dealdock', datafromform);
});


module.exports = router;