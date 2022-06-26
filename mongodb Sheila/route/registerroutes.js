const express = require('express');
const mongoose = require('mongoose');
//const Washer = require('../models/Washer')

const router = express.Router();

router.get('/',(req,res)=>{
  res.render('register_washer',{title:"Register Car Washer", routeName:"register", alert:req.query.alert})
})

module.exports = router;