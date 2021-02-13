const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
  res.json({"message": "Ok"});
});

router.get('/init-database', function (req, res) {
  //require('../databaseInit/typesModel').create(req.app.get('db'));
  // require('../databaseInit/employeesModel').create(req.app.get('db'));
  res.json({"message": "Ok"});
});

module.exports = router;
