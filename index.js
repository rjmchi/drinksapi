const express = require('express');
const routes = require('./routes/api');
const app = express();

app.use(express.json());
app.use(function(req, res, next) {
    res.header ("Access-Control-Allow-Origin", "*");
    res.header ("Access-Control-Allow-Headers", "Content-Type");
    next();
})
app.use ('/api', routes);

const port = process.env.PORT || 3000

app.listen(port, function () {
    console.log(`Listening on port ` + port + `...`);
});