const express = require('express');
const router = express.Router();

const client = require('../../client');

function updateSalonTable(id, body) {
    var query = [`UPDATE salon`];
    query.push('SET');
    var set = [];
    Object.keys(body).forEach(function (key, i) {
        set.push(`${key} = '${body[key]}'`);
    });
    query.push(set.join(', '));
    query.push(`WHERE id = ${id}`);
    return query.join(' ');
}

/* update salon info. */
router.patch('/updateSalon', function (req, res, next) {
    if(typeof req.body.data !== 'object' && typeof req.body.data.query !== 'object' && typeof req.body.data.id !== 'number') {
        res.status(400).send('Bad Request');
    }
    const sql = updateSalonTable(req.body.data.id, req.body.data.query);
    client.query(sql, function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(req.body);
    });
});

/* add worker. */
router.post('/addWorker', function (req, res, next) {
    if(typeof req.body.data !== 'object' &&
    typeof req.body.data.query !== 'object' && 
    typeof req.body.data.id !== 'number' &&
    typeof req.body.data.query.name !== 'string' &&
    typeof req.body.data.query.surname !== 'string' &&
    typeof req.body.data.query.category_id !== 'number'
    ) {
        res.status(400).send('Bad Request');
    }
    const { name, surname, category_id } = req.body.data.query;
    client.query(`INSERT INTO worker(name, surname, category_id, salon_id)
        VALUES
       ('${name}', '${surname}', ${category_id}, ${req.body.data.id});`, function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(req.body);
    });
});

module.exports = router;