const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

router.get('/currents', function(req, res, next) {
    res.send({
        dataChannels: [
            {
                "timestamp": 1432538716989,
                "values": {
                    "value": "26"
                }
            }
        ]
    });
});

module.exports = router;
