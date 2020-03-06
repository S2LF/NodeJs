var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJs en Express' });
});

router.get('/table/:nb?', function(req, res, next){

  multis = {}

  if(!req.params.nb){
    nb = 0
  }
  else nb = req.params.nb

  for (i=1; i<11; i++){

    multis[nb+" &times; "+i] = nb*i
  }

  res.render('table', {
    multis : multis,
    nb : nb,
  })
})

module.exports = router;
