const express = require('express');
const bodyParser = require('body-parser');

const currentModel = require('../models/current');

const router = express.Router();

router.use(bodyParser.json());

router.get('/datapoints', function(req, res, next) {
    const {start, end, limit, offset} = req.query;
    console.log(offset);
    res.send(currentModel.list(start, end, limit, offset));
});

module.exports = router;
