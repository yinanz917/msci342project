let mysql = require('mysql');
let config = require('./config.js');

let account = require('./account.js')

const fetch = require('node-fetch');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { response } = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));

app.post('/api/loadStarred', (req, res) => {

	let connection = mysql.createConnection(config);
	let userID = req.body.userID;

	let sql = `SELECT * FROM a3larocq.zoommates_account;`;
	console.log(sql);

	connection.query(sql, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/loadUserSettings', (req, res) => {

	let connection = mysql.createConnection(config);
	let userID = req.body.userID;

	let sql = `SELECT mode FROM user WHERE userID = ?`;
	console.log(sql);
	let data = [userID];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/setMyProfile', (req, res) => {
	let id = account.id;
	let username = account.username;
	let age = req.body.age;
	let sex = req.body.sex;
	let pronouns = req.body.pronouns;
	let budget = req.body.budget;
	let city = req.body.city;
	let clean = req.body.clean;
	let noise = req.body.noise;
	let pets = req.body.pets;
	let hobbies = req.body.hobbies;

	let connection = mysql.createConnection(config);
	let sql = `INSERT INTO a3larocq.personal_profile(zoommates_account_userID, username, age, sex, pronouns, budget, city, clean, noise, pets, hobbies) values (?,?,?,?,?,?,?,?,?,?,?);`;
	let data = [id, username, age, sex, pronouns, budget, city, clean, noise, pets, hobbies]

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

	});
	connection.end();

});

app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
