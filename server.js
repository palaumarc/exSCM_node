var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.static(__dirname + '/static'));

var metadata = null;
var weather_forecast = null;

metadata = fs.readFileSync("data/metadades_municipis.json", "utf8");
weather_forecast = JSON.parse(fs.readFileSync("data/prediccions_municipals.json", "utf8"));

app.get('/municipis/metadades', function (req, res) {
    res.send(metadata);
})

app.get('/municipis/:id', function (req, res) {
	var forecast = weather_forecast.find(function (obj) {
	   return obj.codi === req.params.id;
	});

  res.send(forecast);
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/static/index.html'); 
});

var server = app.listen(8080, 'localhost', function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})