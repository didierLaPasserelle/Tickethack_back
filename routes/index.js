var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');




router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
