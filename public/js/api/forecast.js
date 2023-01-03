const request = require('request');

const forecast = (longitude, latitude, callback)=>{

    const url = `http://api.weatherstack.com/current?access_key=da6177c4e31119b64e9dea5c9f8ed18b&query=${latitude},${longitude}`;


    request({url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to get weather data',undefined);
        }else if(response.body.error){
            callback('Unable to get info of given location', undefined);
        }else{
            const weather = `It\'s currently ${response.body.current.temperature} degree celsius in ${response.body.location.name}, ${response.body.location.region} with the weather as ${response.body.current.weather_descriptions[0]} and it feelslike ${response.body.current.feelslike} degree celsius there.`;
            
            callback(undefined,weather);
        }
    })
}

module.exports = forecast;