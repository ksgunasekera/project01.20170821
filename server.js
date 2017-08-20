const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();
const validateUser=require('./validateUser');
const port=8000;

var data;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/js',express.static(__dirname+'/asset/js'));
app.use('/images',express.static(__dirname+'/asset/images'));
app.use('/css',express.static(__dirname+'/asset/css'));
app.post('/login',urlencodedParser,(req,res)=>{
	console.log(req.body);
	data=req.body;
	console.log(data.username);
	
});
app.get('/',(req,res)=>{
	res.sendFile('login.html',{root:path.join(__dirname,'./')})
	console.log('load');
	validateUser.validate();

});
app.get('/signup',(req,res)=>{
	res.sendFile('register.html',{root:path.join(__dirname,'./')});
});
app.listen(port,()=>{
	console.log('Server running at port '+port);

});