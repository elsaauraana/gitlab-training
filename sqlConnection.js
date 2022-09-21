const mysql = require("mysql2");

let db_con = mysql.createConnection({
	host: "moe-mysql-app",
	user: "moeuser",
	password: "moepass"
});

db_con.connect((err) => {
	console.log(err);
	if (err) {
	console.log("Database Connection Failed !!!", err);
	} else {
	console.log("connected to Database");
	}
});

module.exports = db_con;
