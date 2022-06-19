const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const Registration = require('../models/Registration');

router.get('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
});






router.get('/registrations', (req, res) => {
  Registration.find()
    .then((registrations) => {
      res.render('index', { title: 'Listing registrations', registrations });
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});



router.post('/', async(req,res)=>{
    try{
        const registration = new Registration(req.body);
        await registration.save()
        res.redirect('registrations?alert=success')
        console.log(req.body)
    }
    catch(err){
        res.status(400).render('form', {title:"Register Car Washer", routeName:"/", alert:'error'})
    }
})









module.exports = router;