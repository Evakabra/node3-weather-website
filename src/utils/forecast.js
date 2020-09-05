const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7ff99ccbd93409150543fd65d8572d35&query=' + latitude + ',' + longitude;
    request({ url, json: true }, (error, {body}) => {
        console.log(body)
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out', 'Humidity: ' + body.current.humidity + '% Cloudcover: ' +  body.current.cloudcover)
        }
    })
}

module.exports = forecast