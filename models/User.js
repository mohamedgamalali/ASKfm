const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const event=require('events')
const eventEmitter=new event();



var Schema=mongoose.Schema;
// base schema
var UserSchema=new Schema({

FName:{
    type:String,
    required:true
},
Lname:{
    type:String,
    required:true
},
Email:{
    type: String,
    required: true,
    unique:true
},
Password:{
    type: String,
    required: true
  },
  PNumber:{
      type:Number,
      required:true
  }



})

var Users=mongoose.model('users', UserSchema);

exports.InsertUser=function(fname,lname,email,password,pnumber,sucess,falire){
   
    mongoose.connect('mongodb://localhost:27017/ASK', {useNewUrlParser: true});
    var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
  bcrypt.hash(password,10,(err,hashedPass)=>{
      if(err){
          console.log(err)
      }else{

        var NewUser=new Users({FName:fname,Lname:lname,Email:email,Password:hashedPass,PNumber:pnumber});
        NewUser.save().then(() =>{sucess()}).catch(err=>{
           if(err.code==11000){
               falire();
           }
        });  
    }
    

  })
  
});




}


