const mongoose = require("mongoose");
//the physical space where our form data is going to be stored has been described)
const managerSchema = new mongoose.Schema({
    firstname:{
        type : String,
        //First name aims at removing the spaces after the text or string 
        trim : true, 
    },
    surname:{
        type : String ,trim: true,
    },
    contact_num:{
            type : String ,
                 },
    nin:{
        type: String
    },
    location:{
        type: String
    },
    nextofkin:{
        type:String
    },    
    sizeofcapital:{
        type :String
    },

   typeofgoods:{
            type : String ,trim: true,
            },
    gender:{
         type : String
        },
        
    age:{
            type : Date,
         },
    dateofregistration:{
            type : Date,
         },     
})
//exporting our Schema(the physical space where our form data is going to be stored has been described)
    module.exports = mongoose.model("manager" , managerSchema);