//import mongoose
const mongoose = require('mongoose');
//create a new schema for how washers' information will be stores
const washerSchema = new mongoose.Schema({
    fullnames:{
        type: String,
        trim: true,
    },
    Gender:{
        type: String,
        trim: true,
    },
    dob:{
        type: Date,
    },
    res:{
        type: String,
        trim: true,
    },
    nin:{
        type: String,
        trim: true,
    },
    zwash:{
        type: String,
        trim:true,
    }

})
//export our schema
module.exports = mongoose.model('Washer', washerSchema);

/**
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
});

//compile  the models (Registration) from the schema and export it 
module.exports = mongoose.model('Registration', registrationSchema);

**/