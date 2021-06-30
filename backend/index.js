const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


// load in environment data
const port = process.env.PORT || 3000;
const database_uri = process.env.DB_URI;


// parses the body into JSON
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// import routes
const tasksRoute = require('./routes/task');


// use imported routes
app.use('/tasks', tasksRoute);


// default landing page
app.get('/', function (request, response) {
    response.send('Server is running.');
});


// set up mongoose connection
mongoose.connect(database_uri, { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connection.on('connected', function () {
    console.log("Connected to database successfully");
});


// bind connection to error event to get notification of connection error
mongoose.connection.on('error', console.error.bind(console, 'Error connecting to database'));


// run server and listen on desired port
app.listen(port, function () {
    console.log(`Server is listening on port ${port}`);
});