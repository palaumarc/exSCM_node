var dao = require('./dataAccess');

module.exports = function(app) {

    app.get('/municipis/metadades', function (req, res) {
        res.json(dao.metadata());
    })

    app.get('/municipis/:id', function (req, res) {
        var forecast = dao.weatherForecast().find(function (obj) {
           return obj.codi === req.params.id;
        });

      res.json(forecast);
    })

    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/static/index.html'); 
    });
}