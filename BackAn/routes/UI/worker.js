const express = require('express');
const router = express.Router();

const client = require('../../client');

// /* GET all workers. */
router.get('/:id', function (req, res, next) {
    client.query(`SELECT w.id, w.name, w.surname, w.b_day, w.img, w.about,
    s.name AS salon_name, s.address AS salon_address, s.phone AS salon_phone,
    c.name AS category_name
    FROM worker w INNER JOIN salon s ON
    w.id = ${req.params.id}
AND s.id = w.salon_id
    INNER JOIN category c ON 
    c.id = w.category_id
`, function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(result.rows[0]);
    });
});

/* GET worker full with id. */
router.get('/full/:id', function (req, res, next) {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).send('Bad request');
    }
    client.query(`SELECT w.id, w.name, w.surname, w.b_day, w.img, w.about,
    s.name AS salon_name, s.address AS salon_address, s.phone AS salon_phone,
    c.name AS category_name
    FROM worker w INNER JOIN salon s ON
    w.id = ${req.params.id} AND s.id = w.salon_id
    INNER JOIN category c ON 
    c.id = w.category_id`, function (err, result) {
        if (err) {
            res.status(500).send(err);
        }
        if (result.rows.length === 0) {
            return res.status(404).send('Not Found Worker');
        }
        res.status(200).send(result.rows[0]);
    });

});

/* GET worker works with worker id. */
router.get('/:id/works', function (req, res, next) {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).send('Bad request');
    }
    client.query(`SELECT img FROM workers_works WHERE worker_id = ${req.params.id}`, function (err, result) {
        if (err) {
            res.status(500).send(err);
        }
        if (result.rows.length === 0) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(result.rows);
    });
});

/* GET worker social pages with worker id. */
router.get('/:id/social', function (req, res, next) {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).send('Bad request');
    }
    client.query(`SELECT social.id, social.name, social_worker.path 
    FROM social INNER JOIN social_worker 
    ON social.id = social_worker.social_id
    AND worker_id = ${req.params.id}`,
        function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            if (result.rows.length === 0) {
                return res.status(404).send('Not Found');
            }
            res.status(200).send(result.rows);
        });
});

/* GET worker social pages with worker id. */
router.get('/social/all', function (req, res, next) {
    client.query(`SELECT * from social`,
        function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result.rows);
        });
});

/* GET worker card info from id. */
router.get('/card/:id', function (req, res, next) {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).send('Bad request');
    }
    client.query(`SELECT w.id, w.name, w.surname, w.img,
    s.name AS salon_name, s.address AS salon_address
    FROM worker w INNER JOIN salon s ON
    w.id = ${req.params.id} AND s.id = w.salon_id
    INNER JOIN category c ON 
    c.id = w.category_id`,
        function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            if (result.rows.length === 0) {
                return res.status(404).send('Not Found');
            }
            res.status(200).send(result.rows[0]);
        });
});

module.exports = router;
