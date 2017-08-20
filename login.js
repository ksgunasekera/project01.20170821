document.getElementById('user-login').addEventListener('submit',getUser);

const getUser=()=>{
	let username=document.getElementById('username').value;
	let passsword=doucment.getElementById('password').value;
	if(username==''){
		alert('Enter username');
	}
	if(password==''){
		alert('Enter password');
	}
	if(username!=''&&password!=''){
		console.log('username :'+username);
		console.log('password :'+password);
	}
}