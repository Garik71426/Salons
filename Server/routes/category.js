const express = require('express');
const router = express.Router();

const client = require('../public/javascripts/client');

/* GET all categorys. */
router.get('/', function(req, res, next) {
    client.query('SELECT * FROM category', function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET category by ID */
router.get('/:id', function(req, res, next) {
    client.query(`SELECT * FROM category WHERE id=${req.params.id}`, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows[0]);
    });
});

/* GET all workers, from that category */
router.get('/:id/workers', function(req, res, next) {
  client.query(`SELECT * FROM worker
  WHERE category_id = ${req.params.id}`, function (err, result) {
      if (err) {
          res.status(400).send(err);
      }
      res.status(200).send(result.rows);
  });
});

module.exports = router;
