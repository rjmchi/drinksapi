const express = require('express');
const routes = require('./routes/api');
const app = express();

app.use(express.json());
app.use ('/api', routes);

const port = process.env.port || 3000

app.listen(port, function () {
    console.log(`Listening on port ` + port + `...`);
});