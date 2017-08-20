const db=require('./dbConnection');

const validate=()=>{
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
			var sql="select * from users where username = "+connection.escape("kavinda");
			connection.query(sql,(error,results,fields)=>{
				if (error) {
					console.log(error);
				}
				console.log(results);

			});
		});
	});
}
module.exports.validate=validate;