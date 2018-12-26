var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var petrovich = require('petrovich');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/getcontract', function(req, res, next) {
  var datafromform =req.body;
  if (datafromform.namehead != "") {
    var person ={first:"", middle: "", last: ""};
    var sklon_person={};
    var initperson=datafromform["namehead"].split(" ");
    var genitive_namehead;
    person["first"]=initperson[1];
    person["middle"]=initperson[2];
    person["last"]=initperson[0];
    sklon_person=petrovich(person, 'genitive');
    genitive_namehead=sklon_person.last+" "+sklon_person.first+" "+sklon_person.middle;
    if (sklon_person.middle==undefined) genitive_position_manager=sklon_person.lastgenitive_namehead=sklon_person.last+" "+sklon_person.first;
    datafromform["genitive_namehead"]=genitive_namehead;
  }
  if (datafromform.position_manager != "") {
    var person ={ gender: 'male', first:"", last: ""};
    var sklon_person={};
    var initperson=datafromform["position_manager"].split(" ");
    var genitive_position_manager;
    person["first"]=initperson[1];
    person["last"]=initperson[0];
    sklon_person=petrovich(person, 'genitive');
    genitive_position_manager=sklon_person.last+" "+sklon_person.first
    if (sklon_person.first==undefined) genitive_position_manager=sklon_person.last;
    datafromform["genitive_position_manager"]=genitive_position_manager;
  }

  res.render('dealdock', datafromform);
});


module.exports = router;