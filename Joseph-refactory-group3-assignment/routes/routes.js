const express = require('express');
const mongoose = require('mongoose');
const Registration = require('../models/registration');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{title:"vendor page"})
})

router.post('/', async(req, res) => {
    try{
      const register = new Registration(req.body);
      await register.save()
      console.log(req.body);
      res.render('index',{title:"vendor page"})
    }
    catch(err){
      res.status(404).render("index")
    }
  });


module.exports=router;