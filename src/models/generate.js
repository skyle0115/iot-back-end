const fs = require('fs');
const moment = require('moment');

const startDateTime = '2016/01/01 00:00';
const lowerBound = 8000;
const upperBound = 16000;
const datapoints_per_hour = 4;
const days = 365 + 365;

let data = [];

for (let i = 0; i < days * 24 * datapoints_per_hour; i++) {
    let datapoint = {
        recordedAt: null,
        values: {
            value: null,
        }
    };
    datapoint.recordedAt = moment(new Date(startDateTime)).add(i * (60 / datapoints_per_hour), 'minutes').unix() * 1000;
    datapoint.values.value = (lowerBound + Math.round(Math.random() * (upperBound - lowerBound))) / 10;
    data.push(datapoint);
}

// fs.writeFileSync('line0_GIoT.json', JSON.stringify(data));
// fs.writeFileSync('line1_GIoT.json', JSON.stringify(data));
fs.writeFileSync('line2_GIoT.json', JSON.stringify(data));
