const fs = require('fs');
const moment = require('moment');

const startDateTime = '2017/01/01 00:00';
const lowerBound = 8;
const upperBound = 12;
const datapoints_per_hour = 12;
const days = 31;

let data = [];

for (let i = 0; i < days * 24 * datapoints_per_hour; i++) {
    let datapoint = {
        timestamp: null,
        values: {
            value: null,
        }
    };
    datapoint.timestamp = moment(new Date(startDateTime)).add(i * (60 / datapoints_per_hour), 'minutes').unix();
    datapoint.values.value = (lowerBound + Math.round(Math.random() * (upperBound - lowerBound))) / 10;
    console.log(datapoint.timestamp);
    data.push(datapoint);
}

fs.writeFileSync('data.json', JSON.stringify(data));
