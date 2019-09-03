var express = require('express');
var router = express.Router();
const { Client } = require('pg');

const connectionString = 'postgres://postgres:salon123@localhost:5432/salons';
const client = new Client({
    connectionString: connectionString
});

client.connect();


/* GET all salons. */
router.get('/', function(req, res, next) {
    client.query('SELECT * FROM salon', function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET salon by ID */
router.get('/:id', function(req, res, next) {
    client.query(`SELECT * FROM salon WHERE id=${req.params.id}`, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows[0]);
    });
});

/* GET salon by ID */
router.get('/category/:salon_id', function(req, res, next) {
    client.query(`SELECT * FROM category
  WHERE id IN
  (select category_id FROM salon_worker_category 
  WHERE salon_id = ${req.params.salon_id})`, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET workers by salon_id and category_id */
router.get('/workers/:category_id/:salon_id', function(req, res, next) {
    client.query(`select * from worker
    where id in
    (select worker_id from salon_worker_category 
    where category_id = ${req.params.category_id} and salon_id = ${req.params.salon_id})`, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

// select * from worker
//   where id in
//   (select worker_id from salon_worker_category 
//   where category_id = ${req.params.id}, salon_id = ${req.params.id})


// select * from category
//   where id in
//   (select category_id from salon_worker_category 
//   where salon_id = ${req.params.id})

module.exports = router;
