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
    client.query(`select social.id, social.name, social_worker.path 
    from social join social_worker 
    on social.id = social_worker.social_id
    and worker_id = ${req.params.id}`,
    function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

module.exports = router;
