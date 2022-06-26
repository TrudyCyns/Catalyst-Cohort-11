//this file is intended to describe the type of data the database 
//server is going to receive ie we are creating a schema
const mongoose = require ('mongoose');
const venderSchema = new mongoose.Schema({
    first_name:{
        type: String,
        trim: true
    },
    surname:{
        type: String,
        trim: true
    },
    gender:{
        type: String
    },
    age:{
         type: Number
    },
    nin:{
        type: String,
        trim: true
    },
    tel_no:{
        type: String,
        trim: true
    },
    size_of_capital:{
        type: String
    },
    business_category:{
        type: String
    },
    date_of_reg:{
        type: String
    }
})
//code to export our schema
module.exports = mongoose.model('Vender', venderSchema)