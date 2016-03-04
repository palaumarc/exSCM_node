var express = require('express');
var app = express();
var fs = require("fs");
var util = require('util');

var metadata = null;
var weather_forecast = null;

// Load data files
fs.readFile("data/metadades_municipis.json", 'utf8', function (err, data) {
	if (err) {
		console.log("Error loading metadata_municipals");
		process.exit(1);
	} else {
		metadata = data;
	}
});

fs.readFile("data/prediccions_municipals.json", 'utf8', function (err, data) {
	if (err) {
		console.log("Error loading prediccions_municipals");
		process.exit(1);
	} else {
		weather_forecast = JSON.parse(data);
	}
});

function getForecastFromId(id) {
	var forecast = null;

	weather_forecast.forEach(function (element) {
		if (element['codi'] === id) {
			forecast = element;
		}
	});

	return forecast;
}

app.get('/municipis/metadades', function (req, res) {
    console.log(metadata);
    res.send(metadata);
})

app.get('/municipis/:id', function (req, res) {
	var forecast = getForecastFromId(req.params.id);
    console.log(forecast);
    res.send(forecast);
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})