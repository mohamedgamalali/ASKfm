const path =require('path');
const express=require('express');
const AddUser=require('../models/User');
const event=require('events')
const passport=require('passport')
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('signup');
})

router.post('/',(req,res)=>{
let errors=[];
if(req.body.password.length < 8){
    errors.push({text:'Password must be at least 4 characters'});
  }
  if(errors.length > 0){
    res.render('signup', {
      errors: errors,
      fname: req.body.Fname,
      lname: req.body.Lname,
      pnumber: req.body.pnumber,
      email: req.body.email,
      password: req.body.password,
      
    });
}else{
    AddUser.InsertUser(req.body.fname,req.body.lname,req.body.email,req.body.password,req.body.pnumber,function() {
        res.redirect('login')
        },()=>{
           
            res.redirect('register');
        });

}


    

})

module.exports = router;