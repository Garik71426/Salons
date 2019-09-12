const express = require('express');
const router = express.Router();

const client = require('../client');

/* GET all salons. */
router.get('/', function(req, res, next) {
    client.query('SELECT * FROM salon', function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET salon by ID */
router.get('/:id', function(req, res, next) {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).send('Bad request');
    }
    client.query(`SELECT * FROM salon WHERE id=${req.params.id}`, function (err, result) {
        if (err) {
            res.status(500).send(err);
        }
        if (result.rows.length === 0) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(result.rows[0]);
    });
});

/* GET salon by ID */
router.get('/category/:salon_id', function(req, res, next) {
    if (isNaN(Number(req.params.salon_id))) {
        return res.status(400).send('Bad request');
    }
    client.query(`SELECT id, name FROM category
    WHERE id IN (SELECT category_id FROM worker
    WHERE salon_id = ${req.params.salon_id}
    GROUP BY category_id)`, function (err, result) {
        if (err) {
            return res.status(400).send(err);
        }
        if (result.rows.length === 0) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(result.rows);
    });
});

//* GET workers by salon_id and category_id */
router.get('/workers/:category_id/:salon_id', function(req, res, next) {
    if (isNaN(Number(req.params.salon_id)) || isNaN(Number(req.params.category_id))) {
        return res.status(400).send('Bad request');
    }
    client.query(`select * from worker 
    where category_id = ${req.params.category_id} and salon_id = ${req.params.salon_id}`, function (err, result) {
        if (err) {
            res.status(500).send(err);
        }
        if (result.rows.length === 0) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(result.rows);
    });
});

module.exports = router;
