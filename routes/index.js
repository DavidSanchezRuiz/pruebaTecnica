const express = require('express');
const router = express.Router();

const TypesTable = require('../databaseInit/typesModel')

router.get('/', function (req, res) {
  res.json({"message": "Ok"});
});

router.get('/init-database', function (req, res) {
  TypesTable.create(req.app.get('db'));
  res.json({"message": "Ok"});
});

module.exports = router;
