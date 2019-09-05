var express = require('express');
var router = express.Router();
const { Client } = require('pg');

const connectionString = 'postgres://postgres:salon123@localhost:5432/salons';
const client = new Client({
    connectionString: connectionString
});

client.connect();


/* GET all workers. */
router.get('/', function(req, res, next) {
    client.query('SELECT * FROM worker', function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET worker with id. */
router.get('/:id', function(req, res, next) {
    client.query(`SELECT * FROM worker WHERE id = ${req.params.id}`, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows[0]);
    });
});

/* GET worker works with worker id. */
router.get('/:id/works', function(req, res, next) {
    client.query(`SELECT img FROM workers_works WHERE worker_id = ${req.params.id}`, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET worker social pages with worker id. */
router.get('/:id/social', function(req, res, next) {
    client.query(`SELECT social.id, social.name, social_worker.path 
    FROM social INNER JOIN social_worker 
    ON social.id = social_worker.social_id
    AND worker_id = ${req.params.id}`,
    function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET worker full info from id. */
router.get('/:id/full', function(req, res, next) {
    client.query(`SELECT w.id, w.name, w.surname, w.b_day, w.img, w.about, s.name, s.address, s.phone, c.name
    FROM worker w INNER JOIN salon s ON
    w.id = ${req.params.id} AND s.id = w.salon_id
    INNER JOIN category c ON 
    c.id = w.category_id`,
    function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows[0]);
    });
});

module.exports = router;
