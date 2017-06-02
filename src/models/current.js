const fs = require('fs');
const source = JSON.parse(fs.readFileSync('data.json'));

function list(start, end, limit = 1000, offset = 0) {
    let data = {
        dataChannels: []
    };
    if (!start)
        start = 0;
    if (!end)
        end = new Date(Date.now()).getTime() / 1000;
    if (limit > 1000)
        limit = 1000;
    for (let datapoint of source) {
        if (limit === 0)
            break;
        if (datapoint.timestamp >= start && datapoint.timestamp < end) {
            if (offset !== 0) {
                offset--;
                continue;
            }
            if (limit === 0)
                break;
            data.dataChannels.push(datapoint);
            limit--;
        }
    }
    return data;
}

module.exports = {
    list
};
