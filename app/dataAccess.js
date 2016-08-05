var fs = require("fs");

var metadata = null;
var weatherForecast = null;

module.exports.metadata = () => {return metadata};
module.exports.weatherForecast = () => {return weatherForecast};

module.exports.init = function(){
  metadata = JSON.parse(fs.readFileSync("data/metadades_municipis.json", "utf8"));
  weatherForecast = JSON.parse(fs.readFileSync("data/prediccions_municipals.json", "utf8"));

  weatherForecast.forEach( localForecast => {

    var localMetadata = metadata.filter(localMetadata => {
      return localMetadata.codi === localForecast.codi
    })[0];

    if (localMetadata) {
      localForecast.nom = localMetadata.nom;
      localForecast.comarca = localMetadata.comarca;    
    }
  });
};
