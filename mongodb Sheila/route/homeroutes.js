const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const manager = require('../models/manager');

// reuiring the file that our server will use to post the data
const Manager =require("../models/manager")

//const Registration = require('../models/Registration');

router.get('/',(req,res) =>{
    res.render('register',{title:'Registration form'});
});

router.post('/' ,async (req ,res) => {  
try{
    const manager = new Manager(req.body);
    await manager.save()
    console.log(req.body)
}
catch(err){
    res.status(404).render('register')
}
});


router.get('/page', (req, res) => {
 res.render('page', { title: 'page' });
});










module.exports = router;


