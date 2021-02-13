const express = require('express');
const _ = require('lodash');

const router = express.Router();

router.get('/', function (req, res) {
  const sql = "select * from employee"
  const params = []
  req.app.get('db').all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json(rows)
  });
});

router.get("/:id", (req, res) => {
  const sql = "select * from employee where id = ?"
  const params = [req.params.id]
  req.app.get('db').get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    } else if (!row) {
      res.status(404).json({});
    }
    res.json(row)
  });
});

router.post("/", (req, res) => {
  let errors = validBody(req)
  if (!_.isEmpty(errors)) {
    res.status(422).json(errors);
    return;
  }

  const sql = 'INSERT INTO employee (name,phone,address,types_id) VALUES (?,?,?,?)'
  const params = [req.body.name, req.body.phone, req.body.address, req.body.types_id]
  req.app.get('db').run(sql, params, function (err) {
    if (err) {
      res.status(400).json({"error": err.message})
      return;
    }
    res.json({"id": this.lastID})
  });
})

router.put("/:id", (req, res) => {
  let errors = validBody(req)
  if (!_.isEmpty(errors)) {
    res.status(422).json(errors);
    return;
  }

  const sql = `UPDATE employee set 
           name = COALESCE(?,name),
           phone = COALESCE(?,phone),
           address = COALESCE(?,address),
           types_id = COALESCE(?,types_id)
           WHERE id = ?`
  const params = [req.body.name, req.body.phone, req.body.address, req.body.types_id, req.params.id]
  req.app.get('db').run(sql, params, function (err) {
    if (err) {
      res.status(400).json({"error": res.message})
      return;
    }
    res.json({})
  });
})

router.delete("/:id", (req, res) => {
  const sql = 'DELETE FROM employee WHERE id = ?'
  const params = [req.params.id]
  req.app.get('db').run(sql, params, function (err) {
    if (err) {
      res.status(400).json({"error": res.message})
      return;
    }
    res.json({})
  });
})

module.exports = router;

function validBody(req) {
  let errors = {}
  if (!req.body.name) errors.name = "El campo name es requerido."
  if (!req.body.phone || typeof req.body.phone !== "number") errors.phone = "El campo phone es requerido y debe ser de tipo numerico."
  if (!req.body.address) errors.address = "El campo address es requerido."
  return errors
}