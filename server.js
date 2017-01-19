
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const api = require('./server/routes/api');
var mongoose = require('mongoose');
var app = express();

var config = require('./config/config');

mongoose.connect(config.database);
app.set('superSecret', config.secret); // secret variable

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', api);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log('API running on http://localhost:' + port);
