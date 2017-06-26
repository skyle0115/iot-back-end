const express = require('express');
const bodyParser = require('body-parser');

const currentModel = require('../models/current');

const router = express.Router();

router.use(bodyParser.json());

router.get('/datapoints', function(req, res, next) {
    const {dataChnId, start, end, limit, offset} = req.query;
    res.send(currentModel.list(dataChnId, start, end, limit, offset));
});

module.exports = router;
