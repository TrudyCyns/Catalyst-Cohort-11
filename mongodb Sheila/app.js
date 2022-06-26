const express = require ("express");
const mongoose =require('mongoose');

const homeroutes = require('./route/homeroutes');

const registerroutes = require('./route/registerroutes');


const path =require("path");
//instatiating the express server
const app = express();

// we dont require "nodemon" becoz we configured that in the "package.json"

let config =require('./config/database')

//setting up mongoose
require('dotenv').config();


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


// we are setting up our middleware / configuring it
// line 37 is very important :- responsible for parsing form data into the node server)
app.use(express.urlencoded({extended: true}))
//to access static files the server checks the public folder
app.use(express.static(path.join(__dirname, 'public')));
// setting the sessions
app.use(expressSession);

//routes specify the content that we are looking for or the locations

// setting up routes
app.use('/', homeroutes)

app.use('/register', registerroutes)

//handling non existing routes
app.get('*', (req, res)=> {
  res.status(404).send('WRONG ADDRESS')
 })

// server
app.listen(3000, ()=> console.log("Listening on Port 3000"));


