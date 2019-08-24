const path =require('path');
const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('signup');
})

router.post('/',(req,res)=>{
// cmaking register logic

})

module.exports = router;