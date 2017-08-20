document.getElementById('user_login').addEventListener('submit',getUser);
let user;
function getUser(e){
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	if(username===''){
		alert('Enter username');
	}
	if(password===''){
		alert('Enter password');
	}
	if(username!=''&&password!=''){
		console.log('username :'+username);
		console.log('password :'+password);
		user={
			username:username,
			password:password
		};
	}

}
const userLogin=user;