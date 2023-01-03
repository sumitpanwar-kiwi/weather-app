const request = require('request');
const express = require('express');
const app = express();
const path = require('path');
const geocode = require('./public/js/api/geocode.js');
const forecast = require('./public/js/api/forecast.js');

const publicPathDirectory = path.join(__dirname,'./public/');
app.use(express.static(publicPathDirectory));

app.get('',(req, res)=>{
    res.send('Hello from the app.js');
});

app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error : 'Please provide an Address'
        })
    }
    else{
        const location = req.query.address;

        geocode(location, (error, {longitude, latitude} = {})=>{
            if(error)
                return res.send({
                    error
                })
            else{
                forecast(longitude, latitude, (error, message='')=>{
                    if(error)
                        return res.send({
                            error
                        })
                    else
                        return res.send({
                            message
                        })
                })
            }
        })
    }
    
})

app.listen(8000,()=>{
    console.log('The site is running on the port http://localhost:8000');
});