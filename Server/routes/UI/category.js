const express = require('express');
const router = express.Router();

const client = require('../../client');

/* GET all categories. */
router.get('/', function (req, res, next) {
    client.query('SELECT * FROM category', function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET category by ID */
router.get('/:id', function(req, res, next) {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).send('Bad request');
    }
    client.query(`SELECT * FROM category WHERE id=${req.params.id}`, function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.rows.length === 0) {
            return res.status(404).send('Not Found');
        }
        return res.status(200).send(result.rows[0]);
    });
});

/* GET all workers, from that category */
router.get('/:id/workers', function (req, res, next) {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).send('Bad request');
    }
        client.query(`select w.name, w.img, w.id, w.surname, w.salon_id,
        s.name as salon_name, s.address as salon_address
        from worker w inner join salon s 
        on s.id = w.salon_id and w.category_id = ${req.params.id}`, function (categoryWorkerErr, categoryWorker) {
            if (categoryWorkerErr) {
                res.status(500).send(categoryWorkerErr);
            }
            if (categoryWorker.rows.length === 0) {
                return res.status(404).send('Not Found');
            }
            res.status(200).send(categoryWorker.rows);
        });
});

module.exports = router;
