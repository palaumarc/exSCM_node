var express = require('express');
var app = new express();
var dao = require('./app/dataAccess');

app.use(express.static(__dirname + '/static'));
dao.init();
require('./app/routes')(app);

var server = app.listen(8080, 'localhost', function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})