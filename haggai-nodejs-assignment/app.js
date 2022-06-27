const express = require('express');
const mongoose = require('mongoose');

const homeroutes = require('./routes/homeroutes');

let path = require('path');


let config = require('./config/database');
//setting up mongoose
require('dotenv').config();

//instatiati
const app = express();

//connect mongoose
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for db errors
db.on('error', function(err){
  console.error(err);
});

//express sesssion
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

// views settings or configurations
app.set('view engine', 'pug');
app.set('views', './views');

//configuring our middle-ware(responsible for parsing form data into node server)
app.use(express.urlencoded({extended: true}))
//to aaccess static files(css, js, images) the server should look in the public folder
app.use(express.static(path.join(__dirname, 'public')));
//setting the sessions
app.use(expressSession);

//setting the routes
app.use('/', homeroutes);

// handling non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('OOPS! WRONG ADDRESS')
})

// server
app.listen(3002, ()=> console.log('Listening on Port 3002'));