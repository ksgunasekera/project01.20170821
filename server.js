const express=require('express');
const path=require('path');
const app=express();
const port=8000;

app.use('/images',express.static(__dirname+'/asset/images'));
app.use('/css',express.static(__dirname+'/asset/css'));
app.get('/',(req,res)=>{
	res.sendFile('login.html',{root:path.join(__dirname,'./')})
	console.log('load');
});
app.listen(port,()=>{
	console.log('Server running at port '+port);
});