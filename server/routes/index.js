var express = require('express');
var router = express.Router();
var puppyArray = [];
var idArray = [];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'FORM VALIDATION WITH EXPRESS' });
});

router.get('/puppies/new', function(req, res, next) {
  res.render('puppiesnew');
});

router.post('/puppies', function(req, res, next) {

  puppyArray.push(req.body.text1);
  idArray.push(req.body.text2);
  res.render('puptable',{

    puppyArray:puppyArray,
    idArray:idArray,


  });


});

module.exports = router;
