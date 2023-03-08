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

app.post('/api/loadProfile', (req, res) => {

	let connection = mysql.createConnection(config);
	let userID = req.body.userID;

	let sql = `SELECT * FROM a3larocq.personal_profile where zoommates_account_userID = 1;`;
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

app.post('/api/loadZProfile', (req, res) => {

	let connection = mysql.createConnection(config);
	let userID = req.body.userID;

	let sql = `SELECT * FROM a3larocq.zoommate_profile where zoommates_account_userID = 1;`;
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
	let username = account.username;
	let age = req.body.age;
	let sex = req.body.sex;
	let pronouns = req.body.pronouns;
	let budget = req.body.budget;
	let city = req.body.city;
	let pets = req.body.pets;
	let hobbies = req.body.hobbies;

	let connection = mysql.createConnection(config);
	let sql = `INSERT INTO a3larocq.personal_profile(username, age, sex, pronouns, budget, city, pets, hobbies) values (?,?,?,?,?,?,?,?);`;
	let data = [username, age, sex, pronouns, budget, city, pets, hobbies]

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

	});
	connection.end();

});

app.post('/api/setMyQuestions', (req, res) => {
	let id = account.id;
	let AgeMax = req.body.AgeMax;
	let AgeMin = req.body.AgeMin;
	let ZMSex = req.body.ZMSex;
	let Clean = req.body.Clean;
	let Noise = req.body.Noise;
	let Share = req.body.Share;
	let Social = req.body.Social;
	let Guest = req.body.Guest;

	let connection = mysql.createConnection(config);
	let sql = `INSERT INTO a3larocq.zoommate_profile(zoommates_account_userId, AgeMax, AgeMin, ZMSex, Clean, Noise, Share, Social, Guest) values (?,?,?,?,?,?,?,?,?);`;
	let data = [id, AgeMax, AgeMin, ZMSex, Clean, Noise, Share, Social, Guest]

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

	});
	connection.end();

});

app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
