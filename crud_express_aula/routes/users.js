var express = require('express');
var router = express.Router();

router.get('/listUsers', function(req, res, next) {
  res.json({
      users: 
      [
        {name: 'Ana'},
        {name: 'Cris'},
        {name: 'Oliver'},
        {name: 'Maria'},
        {name: 'Osvaldo'}
      ]
    });
});

router.get('/listUsersAgain', function(req, res, next) {
  res.json({
      users: 
      [
        {name: 'Ana'},
        {name: 'Oliver'},
        {name: 'Maria'}
      ]
    });
});

module.exports = router;