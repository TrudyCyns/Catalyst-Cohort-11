const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  businessName: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    unique:false
  },
  street: {
    type: String,
  },
  plotNumber: {
    type: String,
  },
  city: {
    type: String,
  },
  bizregion: {
    type: String,
  },
  businessType: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Business", businessSchema);
