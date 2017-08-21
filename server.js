const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();
var session=require('express-session');
var cookieParser=require('cookie-parser');
const validateUser=require('./validateUser');
var passport=require('passport');
var flash=require('connect-flash');
var expressMessages=require('express-messages');

const port=8000;

var data;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(flash());
app.use((req, res, next)=> {
  res.locals.messages = expressMessages(req, res);
  next();
});



app.set('view engine','ejs');

app.use('/js',express.static(__dirname+'/asset/js'));
app.use('/images',express.static(__dirname+'/asset/images'));
app.use('/css',express.static(__dirname+'/asset/css'));
app.post('/login',urlencodedParser,(req,res)=>{
	console.log(req.body);
	
	data=req.body;
	console.log(data.username);
	validateUser.check(data);
	
});
app.get('/',(req,res)=>{
	res.sendFile('login.html',{root:path.join(__dirname,'./')})
	console.log('load login');
	

});
app.get('/signup',(req,res)=>{
	res.sendFile('register.html',{root:path.join(__dirname,'./')});
});
app.listen(port,()=>{
	console.log('Server running at port '+port);

});