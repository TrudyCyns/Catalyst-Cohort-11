const express = require("express");
const mongoose = require("mongoose");
const path = require("path"); 
const config = require("./config/database");

const routes= require("./routes/routes");
                    
const app = express();


// setting up mongoose
require("dotenv").config();
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

// middle ware
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);

// routes
app.use('/', routes)
// app.use('/register', registerroutes)

// handling non existing routes
app.get('*', (req, res)=> {
  res.status(404).send('OOPS! WRONG ADDRESS')
})

// server
app.listen(3002, ()=> console.log("Listening on Port 3002"));
