const db=require('./dbConnection');

const validate=(data)=>{
	db.pool.getConnection((error,connection)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Connected");
		}
		connection.ping((err)=>{
			if(err){
				console.log(err);
			}
			console.log('Connection responded to ping');
			var sql="select * from users where username = "+connection.escape(data.username)+" and password = "+connection.escape(data.password);
			connection.query(sql,(error,results,fields)=>{
				if (error) {
					console.log(error);
				}
				if(results!=[]){
					console.log(results);
				}else{
					console.log('user not found');
				}

			});
		});
	});
}
module.exports.validate=validate;