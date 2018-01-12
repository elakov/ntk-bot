const express = require('express');
const app = express();

app.get('/script', (req, res) => {
    express.static('MEGAscript.js');
});

app.get('/hello', (req, res) => {
    res.end('hello');
});

app.listen(process.env.PORT);