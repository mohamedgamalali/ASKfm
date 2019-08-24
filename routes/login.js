const path =require('path');
const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('signin');
})

router.post('/',(req,res)=>{
// connect to db 
console.log(req.body.email)

})

module.exports = router;