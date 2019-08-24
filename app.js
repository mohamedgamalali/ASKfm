// requring moduels

const express=require('express');
const bodyParser=require('body-parser');
const path=require('path')

// End

// set midlewares

const app=express();
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
// end


//require custom moduel
const loginRout=require('./routes/login');
const registerRout=require('./routes/register');

app.get("/",(req,res)=>{
    res.render("index")
})

app.use('/login',loginRout);
app.use('/register',registerRout);

app.listen(3000)