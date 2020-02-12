const express = require('express');
const router = express.Router();
const upload = require('./uploadMiddleware');
const path = require('path');
const Resize = require('./Resize');

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
    if (typeof req.body.data !== 'object' && typeof req.body.data.query !== 'object' && typeof req.body.data.id !== 'number') {
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
    if (typeof req.body.data !== 'object' &&
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
        console.log(result)
        // const imagePath = path.join(__dirname, `../../public/images/salons/${req.body.data.id}`);
        // if (!fs.existsSync(`${imagePath}/worker/${item.id}`)) {
        //     fs.mkdirSync(`${imagePath}/worker/${item.id}`);
        // }
        res.status(200).send(req.body);
    });
});

router.post('/uploadImage', upload.single('image'), async function (req, res) {
    const imagePath = path.join(__dirname, '../../public/images');
    console.log(imagePath)
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
        res.status(401).json({ error: 'Please provide an image' });
    }
    const filename = await fileUpload.save(req.file.buffer);
    return res.status(200).json({ name: filename });
});

const fs = require('fs');
const fun = id => {
    const imagePath = path.join(__dirname, `../../public/images/salons/${id}`);
    if (!fs.existsSync(`${imagePath}/worker`)) {
        fs.mkdirSync(`${imagePath}/worker`);
    }
    client.query(`select name, surname, id, img, category_id from worker 
                    where salon_id = ${id}`, function (workerErr, workers) {
        for (let item of workers.rows) {
            if (!fs.existsSync(`${imagePath}/worker/${item.id}`)) {
                fs.mkdirSync(`${imagePath}/worker/${item.id}`);
            }
        }
    });
}
// for (let i = 3; i<= 8;i++){
//     fun(i);
// }

module.exports = router;