const express = require('express');
const router = express.Router();

const client = require('../../client');

/* GET salon by id */
router.get('/:id', function (req, res, next) {
    client.query(`SELECT * FROM salon WHERE id = ${req.params.id}`, function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(result.rows[0]);
    });
});

/* GET all salons name, id. */
router.get('/salon/menu', function (req, res, next) {
    client.query(`SELECT id, name from salon`, function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET salon categories by salon_id. */
router.get('/category/:id', function (req, res, next) {
    client.query(`SELECT id, name FROM category
        WHERE id IN (SELECT category_id FROM worker
        WHERE salon_id = ${req.params.id}
        GROUP BY category_id)`, function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET salon workers by salon_id */
router.get('/workers/:id', function (req, res, next) {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).send('Bad request');
    }
    client.query(`select name, surname, id, img, category_id from worker 
                    where salon_id = ${req.params.id}`, function (workerErr, workers) {
        if (workerErr) {
            res.status(500).send(workerErr);
        }
        if (workers.rows.length === 0) {
            return res.status(404).send('Not Found Worker');
        }
        res.status(200).send(workers.rows);
    });
});

module.exports = router;
