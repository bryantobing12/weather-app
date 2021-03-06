const request = require('request');

const foreCast = (address, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a36c4167547b9b757c019100be81a97d&query=${address}`;
    
    request({url, json : true}, (error, {body} ) => {
        if(error) { 
            callback('Unable to connect to location service', undefined);
        } else if(body.error) {
            callback('Unable to find location. Try another search!', undefined);
        } else {
            callback(undefined, {
                location : body.request.query,
                precip : body.current.precip,
                temperature : body.current.temperature,
                localtime : body.location.localtime,
                icons : body.current.weather_icons,
                description : body.current.weather_descriptions
            });
        }
    });
}


module.exports = foreCast;
