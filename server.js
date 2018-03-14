var path = require('path');
var express = require('express');
var app  = require('./app/custom_modules/imapp/index');
global.app = app;
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/src'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('*', function(req, res) {
  res.sendFile('/src/index.html');
});
var port = process.env.PORT || 8081;
// Start the app by listening on the default
// Heroku port
app.listen(port);
module.exports = app;