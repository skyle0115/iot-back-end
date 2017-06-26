const fs = require('fs');
const line0_GIoT = JSON.parse(fs.readFileSync('line0_GIoT.json')).reverse();
const line1_GIoT = JSON.parse(fs.readFileSync('line1_GIoT.json')).reverse();
const line2_GIoT = JSON.parse(fs.readFileSync('line2_GIoT.json')).reverse();

function list(dataChnId, start, end, limit, offset) {
    let source = dataChnId === 'line0_GIoT'
        ? line0_GIoT
        : dataChnId === 'line1_GIoT'
            ? line1_GIoT
            : line2_GIoT;
    let data = {
        dataChnId,
        dataChannels: [
            {
                dataChnId,
                dataPoints: []
            }
        ]
    };
    start = start === ''
        ? 0
        : parseInt(start, 10);
    end = end === ''
        ? new Date(Date.now()).getTime()
        : parseInt(end, 10);
    limit = limit === ''
        ? 1000
        : parseInt(limit, 10);
    offset = offset === ''
        ? 0
        : parseInt(offset, 10);
    if (limit > 1000)
        limit = 1000;
    if (offset < 0)
        offset = 0;
    for (let datapoint of source) {
        if (limit === 0)
            break;
        if (datapoint.recordedAt >= start && datapoint.recordedAt < end) {
            if (offset > 0) {
                offset--;
                continue;
            }
            data.dataChannels[0].dataPoints.push(datapoint);
            limit--;
        }
    }
    return data;
}

module.exports = {
    list
};
