const request = require('request');

const geocode = (address, callback)=>{
    const url = `http://api.positionstack.com/v1/forward?access_key=487b6160cd22bf796b36d477c5b26b05&query=${encodeURIComponent(address)}`;

    request({url, json:true}, (error, response)=>{

        if(error){
            callback('Unable to get weather data',undefined);
        }else if(response.body.error){
            callback('Please enter a valid Location Name',undefined);
        }else{
            callback(undefined,{
                latitude : response.body.data[0].latitude,
                longitude : response.body.data[0].longitude,
                label : response.body.data[0].label
            })
        }
    })
}

module.exports = geocode;