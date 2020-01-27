const express = require('express');
const router = express.Router();

const client = require('../client');

/* GET all users. */
router.get('/', function (req, res, next) {
    client.query('SELECT * FROM users', function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(result.rows);
    });
});

/* GET users by uid */
router.get('/:uid', function (req, res, next) {
    client.query(`SELECT * FROM users WHERE uid = '${req.params.uid}'`, function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.rows.length === 0) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(result.rows[0]);
    });
});

/* GET users settings by uid */
router.get('/account/:uid', function (req, res, next) {
    client.query(`SELECT name, surname, phone, img, b_day FROM users WHERE uid = '${req.params.uid}'`, function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.rows.length === 0) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(result.rows[0]);
    });
});

/* Register new user. */
router.post('/registration', function (req, res, next) {
    client.query(`INSERT INTO users (name, surname, email, phone, uid, b_day, role_id)
    VALUES($1, $2, $3, $4, $5, $6, $7)`,
        [
            req.body.name,
            req.body.surname,
            req.body.email,
            req.body.phone,
            req.body.uid,
            req.body.b_day,
            2
        ], function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(201).send('Created');
        });
});

/* change data */
router.put('/settings/:uid', function (req, res, next) {
    client.query(`UPDATE users 
        SET name = '${req.body.name}',
            surname = '${req.body.surname}',
            phone = '${req.body.phone}',
            img = '${req.body.img}',
            b_day = '${req.body.b_day}'
            WHERE uid = '${req.params.uid}'
            `, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(201).send('Created');
        });
});

module.exports = router;
