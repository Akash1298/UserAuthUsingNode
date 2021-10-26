const User = require('../../../models/user');
const bcrypt = require("bcrypt");
//const saltRounds = 10;
var jwt = require('jsonwebtoken');

const SignUp = async (req, res) => {
	try {
		const { userName, email, password } = req.body;
		if (!(userName && email && password)) {
			res.status(400).send("All input is required");
		}

		const oldUser = await User.findOne({ email });
		if (oldUser) {
			return res.status(400).send("User Already Exist. Please Login");
		}

		let encryptedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({
			userName: userName,
			email: email,
			password: encryptedPassword,
		});

		var token = jwt.sign({ newUser }, 'shhhhh');

		return res.status(200).json({
			status: 'success',
			token
		});
	} catch (err) {
		return res.status(400).send("Something went wrong.");
	}
}
module.exports = SignUp;















	// const { userName, email, password } = req.body;
	// if (userName && email && password) {
	// 	User.findOne({ email: email }, function (err, result) {
	// 		if (!result) {
	// 			bcrypt.hash(password, saltRounds, function (error, hash) {
	// 				console.log("User hash", hash)
	// 				const newUser = new User({
	// 					email: email,
	// 					userName: userName,
	// 					password: hash,
	// 				});
	// 				newUser.save();
	// 				res.json({
	// 					message: 'User registered successfully.',
	// 					status: 200,
	// 					send: ({
	// 						email: req.body.email,
	// 						userName: req.body.userName
	// 					})
	// 				})
	// 			});
	// 		} else if (result) {
	// 			res.json({
	// 				message: 'Email already registered.',
	// 				status: 400,
	// 			})
	// 		}
	// 	})
	// } else {
	// 	res.json({
	// 		message: 'Please provide complete details.',
	// 		status: 400,
	// 	})
	// }

