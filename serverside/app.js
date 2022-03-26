const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
//specify which domains can make requests and which methods are allowed

const mongoose = require('mongoose');
//specify where to find the schema
const Student = require('./models/student')
//connect and display the status 
mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });


app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

//in the app.get() method below we add a path for the students API 
//by adding /students, we tell the server that this method will be called every time http://localhost:8000/students is requested. 
app.get('/students', (req, res, next) => {
    //we will add an array named students to pretend that we received this data from the database
    const students = [ 
    { "id" : "1", "firstName" : "John" , "lastName" : "Dow" }, 
    { "id" : "2", "firstName" : "Ann" , "lastName" : "Smith" }, 
    { "id" : "3", "firstName" : "Joan" , "lastName" : "Doe" }];
    //send the array as the response 
    res.json(students);

});

//to use this middleware in other parts of the application
module.exports=app;