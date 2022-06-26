const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vender = require('../models/Vender');
//const Registration = require('../models/Registration');
//npm const Vender = require('../models/Vender');

router.get('/', (req, res) => {
 res.render('register', { title: 'Registration form' });
});

router.post('/',async(req,res)=>{
   try{
      const vender = new Vender(req.body);
      await vender.save()
      console.log(req.body)
   }
   catch(err){
      res.status(404).render('register')
   }
})

module.exports = router;