const express = require('express');
const currentRouter = require('./routers/current');

const app = express();

app.use('/api', currentRouter);

const port = 3210;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
});
