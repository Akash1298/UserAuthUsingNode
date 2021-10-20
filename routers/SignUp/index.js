const User = require('../../models/user');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const SignUp = (req, res) => {
	const { userName, email, password } = req.body;
	if (userName && email && password) {
		User.findOne({ email: email }, function (err, result) {
			if (!result) {
				bcrypt.hash(password, saltRounds, function (error, hash) {
					console.log("User hash", hash)
					const newUser = new User({
						email: email,
						userName: userName,
						password: hash,
					});
					newUser.save();
					res.json({
						message: 'User registered successfully.',
						status: 200,
						send: ({
							email: req.body.email,
							userName: req.body.userName
						})
					})
				});
			} else if (result) {
				res.json({
					message: 'Email already registered.',
					status: 400,
				})
			}
		})
	} else {
		res.json({
			message: 'Please provide complete details.',
			status: 400,
		})
	}
}

module.exports = SignUp;

