

let mysql = require('mysql');
let config = require('./config.js');

let account = require('./account.js')

const fetch = require('node-fetch');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { response } = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
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

	let sql = `SELECT userID FROM a3larocq.zoommates_account where email = ?`;
	let data = [req.body.email];

	connection.query(sql, data, (error, userID, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let sql = `SELECT * FROM a3larocq.personal_profile where zoommates_account_userID = ?`;
		connection.query(sql, userID[0].userID, (error, results, fields) => {
			if (error) {
				return console.error(error.message);
			}

			let string = JSON.stringify(results);
			res.send({ express: string });
			connection.end(); // close the connection here
		});
	});
});


app.post('/api/loadZProfile', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `SELECT userID FROM a3larocq.zoommates_account where email = ?`;
	let data = [req.body.email];

	connection.query(sql, data, (error, userID, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let sql = `SELECT * FROM a3larocq.zoommate_profile where zoommates_account_userID = ?`;
		connection.query(sql, userID[0].userID, (error, results, fields) => {
			if (error) {
				return console.error(error.message);
			}

			let string = JSON.stringify(results);
			res.send({ express: string });
			connection.end(); // close the connection here
		});
	});
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
	let connection = mysql.createConnection(config);

	let sql = `SELECT * FROM a3larocq.zoommates_account where email = ?`;
	let data = [req.body.email];

	console.log(sql);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			console.error(error.message);
			console.error(sql);
			connection.end();
			return;
		}

		let username = results[0].firstName + " " + results[0].lastName;
		let userID = results[0].userID;
		let age = req.body.age;
		let sex = req.body.sex;
		let pronouns = req.body.pronouns;
		let budget = req.body.budget;
		let city = req.body.city;
		let pets = req.body.pets;
		let hobbies = req.body.hobbies;

		sql = `select * from personal_profile where zoommates_account_userID = ?`;

		console.log(sql);

		connection.query(sql, userID, (error, check, fields) => {
			if (error) {
				console.error(error.message);
				connection.end();
				return;
			}

			if (check.length === 1) {
				sql = `UPDATE a3larocq.personal_profile SET 
		  username = ?,
		  age = ?,
		  sex = ?,
		  pronouns = ?,
		  budget = ?,
		  city = ?,
		  pets = ?,
		  hobbies = ?
		  WHERE zoommates_account_userID = ?`;
			} else {
				sql = `INSERT INTO a3larocq.personal_profile(username, age, sex, pronouns, budget, city, pets, hobbies, zoommates_account_userID) values (?,?,?,?,?,?,?,?,?)`;
			}

			console.log(sql);

			let data = [username, age, sex, pronouns, budget, city, pets, hobbies, userID];

			connection.query(sql, data, (error, results, fields) => {
				if (error) {
					console.error(error.message);
				}
				connection.end();
			});
		});
	});
});

app.post('/api/setMyQuestions', (req, res) => {

	let connection = mysql.createConnection(config);

	let sql = `SELECT * FROM a3larocq.zoommates_account where email = ?`;
	let data = [req.body.email];

	console.log(sql);

	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			console.error(error.message);
			console.error(sql);
			connection.end();
			return;
		}

		console.log(results[0].userID)

		let AgeMax = req.body.AgeMax;
		let AgeMin = req.body.AgeMin;
		let ZMSex = req.body.ZMSex;
		let Clean = req.body.Clean;
		let Noise = req.body.Noise;
		let Share = req.body.Share;
		let Social = req.body.Social;
		let Guest = req.body.Guest;
		let userID = results[0].userID;

		sql = `select * from zoommate_profile where zoommates_account_userID = ?`;

		console.log(userID);

		console.log(sql);

		connection.query(sql, userID, (error, check, fields) => {
			if (error) {
				console.error(error.message);
				connection.end();
				return;
			}

			if (check.length === 1) {
				sql = `UPDATE a3larocq.zoommate_profile SET 
			AgeMax = ?,
			AgeMin = ?,
			ZMSex = ?,
			Clean = ?,
			Noise = ?,
			Share = ?,
			Social = ?,
			Guest = ?
			WHERE zoommates_account_userID = ?`;
			} else {
				sql = `INSERT INTO a3larocq.zoommate_profile(AgeMax, AgeMin, ZMSex, Clean, Noise, Share, Social, Guest, zoommates_account_userID) values (?,?,?,?,?,?,?,?,?);`;
			}


			let data = [AgeMax, AgeMin, ZMSex, Clean, Noise, Share, Social, Guest, userID]

			connection.query(sql, data, (error, results, fields) => {
				if (error) {
					return console.error(error.message);
				}

			});
			connection.end();
		});
	});
});


app.post('/api/addUser', (req, res) => {
	//console.log(req);
	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO a3larocq.zoommates_account (firstName, lastName, email, pw, stat) VALUES (?, ?, ?, ?, ?)`;
	console.log(sql);

	const data = [
		req.body.firstName,
		req.body.lastName,
		req.body.email,
		req.body.pw,
		req.body.stat
	];

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		console.log(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/loadMatches', (req, res) => {

	let connection = mysql.createConnection(config);

	connection.query("select * from personal_profile", (error, profileData, fields) => {
		if (error) {
			return console.error(error.message);
		}
		console.log(profileData[0].zoommates_account_userID);

		connection.query("select * from zoommate_profile", (error, zProfileData, fields) => {
			if (error) {
				return console.error(error.message);
			}
			console.log(zProfileData[1].zoommates_account_userID);

			connection.query("select * from rejects", (error, rejectsData, fields) => {
				if (error) {
					return console.error(error.message);
				}

				console.log(rejectsData[0].userID);
				connection.query("select * from favourites", (error, favouritesData, fields) => {
					if (error) {
						return console.error(error.message);
					}

					console.log(favouritesData[0].userID);

					let sql = "select userID from zoommates_account where email = ?"

					let data = [req.body.email];

					console.log(data);

					connection.query(sql, data, (error, userIDData, fields) => {
						if (error) {
							return console.error(error.message);
						}

						
						let one = profileData[0].zoommates_account_userID;
						let oneScore = 0;
						let oneIndex = 0;
						let two = profileData[0].zoommates_account_userID;
						let twoScore = 0;
						let twoIndex = 0;
						let three = profileData[0].zoommates_account_userID;
						let threeScore = 0;
						let threeIndex = 0;
						let four = profileData[0].zoommates_account_userID;
						let fourScore = 0;
						let fourIndex = 0;
						let five = profileData[0].zoommates_account_userID;
						let fiveScore = 0;
						let fiveIndex = 0;

						let profileIndex = 0;
						let zProfileIndex = 0;

						while (!(userIDData[0].userID == profileData[profileIndex].zoommates_account_userID)) {

							profileIndex++;
						}

						console.log(profileIndex)

						while (!(userIDData[0].userID == zProfileData[zProfileIndex].zoommates_account_userID)) {
							zProfileIndex++;
						}

						console.log("forloop start")

						for (let i = 0; i < profileData.length; i++) {


							let newUser = profileData[i].zoommates_account_userID

							console.log("------------------------------------")

							console.log("checking user :" + newUser)

							if (i == profileIndex) {
								console.log("same user")
								continue;
							}

							

							let fr = false;

							for (let K = 0; K < rejectsData.length; K++) {
								
								if ((rejectsData[K].otherUserID == newUser) && (rejectsData[K].userID == profileData[profileIndex].zoommates_account_userID)) {
									fr = true;
									break;
								}
							}

							for (let K = 0; K < favouritesData.length; K++) {
								if ((favouritesData[K].otherUserID == newUser) && (favouritesData[K].userID == profileData[profileIndex].zoommates_account_userID)) {
									fr = true;
									break;
								}
							}

							if (fr) {
								console.log("rejected or favourited")
								continue;
								
							}

							

							let j = 0;

							while (!(zProfileData[j].zoommates_account_userID == newUser)) {
								j++;
							}

							let newScore = 0;

							let subtract = 0;

							subtract += Math.abs(zProfileData[zProfileIndex].Clean - zProfileData[j].Clean);

							subtract += Math.abs(zProfileData[zProfileIndex].Noise - zProfileData[j].Noise);

							subtract += Math.abs(zProfileData[zProfileIndex].Share - zProfileData[j].Share);

							subtract += Math.abs(zProfileData[zProfileIndex].Social - zProfileData[j].Social);

							subtract += Math.abs(zProfileData[zProfileIndex].Guest - zProfileData[j].Guest);

							console.log(profileData[profileIndex].age)
							console.log(zProfileData[j].AgeMax)

							if ((profileData[i].age > zProfileData[zProfileIndex].AgeMax) || (profileData[i].age < zProfileData[zProfileIndex].AgeMin)) {
								subtract += 40
								console.log("bad age")
							}

							if (zProfileData[zProfileIndex].ZMSex == "Female only") {
								if (!(profileData[i].sex == "Female")) {
									subtract += 40
									console.log("bad sex")
								}

							} else if (zProfileData[zProfileIndex].ZMSex == "Male only") {
								if (!(profileData[i].sex == "Male")) {
									subtract += 40
									console.log("bad sex")
								}
							}

							if (profileData[i].city == profileData[profileIndex].city) {
								newScore += 100
							}

							newScore = newScore - subtract;

							
							console.log(newScore);
							console.log("------------------------------------")

							if (newScore > oneScore) {
								five = four;
								fiveScore = fourScore;
								fiveIndex = fourIndex;
								four = three;
								fourScore = threeScore;
								fourIndex = threeIndex;
								three = two;
								threeScore = twoScore;
								threeIndex = twoIndex;
								two = one;
								twoScore = oneScore;
								twoIndex = oneIndex;
								one = newUser;
								oneScore = newScore;
								oneIndex = i;
							}
							else if (newScore > twoScore) {
								five = four;
								fiveScore = fourScore;
								fiveIndex = fourIndex;
								four = three;
								fourScore = threeScore;
								fourIndex = threeIndex;
								three = two;
								threeScore = twoScore;
								threeIndex = twoIndex;
								two = newUser;
								twoScore = newScore;
								twoIndex = i;
							}
							else if (newScore > threeScore) {
								five = four;
								fiveScore = fourScore;
								fiveIndex = fourIndex;
								four = three;
								fourScore = threeScore;
								fourIndex = threeIndex;
								three = newUser;
								threeScore = newScore;
								threeIndex = i;
							}
							else if (newScore > fourScore) {
								five = four;
								fiveScore = fourScore;
								fiveIndex = fourIndex;
								four = newUser;
								fourScore = newScore;
								fourIndex = i;
							}
							else if (newScore > fiveScore) {
								five = newUser;
								fiveScore = newScore;
								fiveIndex = i;
							}

							console.log(one, two, three, four, five)


						}

						console.log(one, two, three, four, five)

						let sql = "select photo from zoommates_account where userID = ?"

						connection.query(sql, one, (error, onePhoto, fields) => {
							if (error) {
								return console.error(error.message);
							}

							connection.query(sql, two, (error, twoPhoto, fields) => {
								if (error) {
									return console.error(error.message);
								}

								connection.query(sql, three, (error, threePhoto, fields) => {

									if (error) {
										return console.error(error.message);
									}

									connection.query(sql, four, (error, fourPhoto, fields) => {

										if (error) {
											return console.error(error.message);
										}

										connection.query(sql, five, (error, fivePhoto, fields) => {

											if (error) {
												return console.error(error.message);
											}

											const topFive = [
												{
													profileID: 1,
													userID: profileData[oneIndex].zoommates_account_userID,
													pronouns: profileData[oneIndex].pronouns,
													budget: profileData[oneIndex].budget,
													location: profileData[oneIndex].city,
													name: profileData
													[oneIndex].username,
													age: profileData[oneIndex].age,
													sex: profileData[oneIndex].sex,
													starred: false,
													reject: false,
													photo: onePhoto[0].photo
												},

												{
													profileID: 2,
													userID: profileData[twoIndex].zoommates_account_userID,
													pronouns: profileData[twoIndex].pronouns,
													budget: profileData[twoIndex].budget,
													location: profileData[twoIndex].city,
													name: profileData[twoIndex].username,
													age: profileData[twoIndex].age,
													sex: profileData[twoIndex].sex,
													starred: false,
													reject: false,
													photo: twoPhoto[0].photo
												},

												{
													profileID: 3,
													userID: profileData[threeIndex].zoommates_account_userID,
													pronouns: profileData[threeIndex].pronouns,
													budget: profileData[threeIndex].budget,
													location: profileData[threeIndex].city,
													name: profileData[threeIndex].username,
													age: profileData[threeIndex].age,
													sex: profileData[threeIndex].sex,
													starred: false,
													reject: false,
													photo: threePhoto[0].photo
												},

												{
													profileID: 4,
													userID: profileData[fourIndex].zoommates_account_userID,
													pronouns: profileData[fourIndex].pronouns,
													budget: profileData[fourIndex].budget,
													location: profileData[fourIndex].city,
													name: profileData[fourIndex].username,
													age: profileData[fourIndex].age,
													sex: profileData[fourIndex].sex,
													starred: false,
													reject: false,
													photo: fourPhoto[0].photo
												},

												{
													profileID: 5,
													userID: profileData[fiveIndex].zoommates_account_userID,
													pronouns: profileData[fiveIndex].pronouns,
													budget: profileData[fiveIndex].budget,
													location: profileData[fiveIndex].city,
													name: profileData[fiveIndex].username,
													age: profileData[fiveIndex].age,
													sex: profileData[fiveIndex].sex,
													starred: false,
													reject: false,
													photo: fivePhoto[0].photo
												},
											];
											let string = JSON.stringify(topFive);
											//let obj = JSON.parse(string);
											res.send({ express: string });
											console.log(topFive)
											connection.end();

										});
									});
								});
							});
						});
					});
				});
			});
		});
	});

});

app.post('/api/getAccountInfo', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `SELECT firstName, lastName, photo FROM zoommates_account WHERE email = ?`;
	console.log(sql);
	let data = [req.body.email];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/uploadProfilePhoto', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `UPDATE zoommates_account AS z1
	JOIN zoommates_account AS z2 ON z1.userID = z2.userID
	SET z1.photo = ?
	WHERE z2.email = ?;`;
	console.log(sql);
	let data = [req.body.photo, req.body.email];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/getProfilePicture', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `SELECT photo FROM zoommates_account WHERE email = ?`;
	console.log(sql);
	let data = [req.body.email];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/getReviews', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `SELECT userID FROM a3larocq.zoommates_account WHERE email = ?`;
	let data = [req.body.email];

	connection.query(sql, data, (error, userID, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let sql = `SELECT * FROM a3larocq.accuracy_reviews where userID = ?`;
		connection.query(sql, userID[0].userID, (error, results, fields) => {
			if (error) {
				return console.error(error.message);
			}

			let string = JSON.stringify(results);
			res.send({ express: string });
			connection.end(); // close the connection here
		});
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server