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
    client.query(`SELECT id, name FROM category
    WHERE id IN (SELECT category_id FROM worker
    WHERE salon_id = ${req.params.salon_id}
    GROUP BY category_id)`, function (err, result) {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET salon by worker_id */
router.get('/specialist/:worker_id', function(req, res, next) {
    client.query(`SELECT name, address FROM salon
    WHERE id IN (SELECT salon_id FROM worker
    WHERE id = ${req.params.worker_id})`, function (err, result) {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send(result.rows[0]);
    });
});

//* GET workers by salon_id and category_id */
router.get('/workers/:category_id/:salon_id', function(req, res, next) {
    client.query(`select * from worker 
    where category_id = ${req.params.category_id} and salon_id = ${req.params.salon_id}`, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});
module.exports = router;
