const User = require('../../../models/user');
const bcrypt = require("bcrypt");
const saltRounds = 10

const ChangePassword = (req, res) => {
	const { email, password, resetPassword } = req.body;
	if (email && password && resetPassword) {
		User.findOne({ email: email }, function (err, result) {
			if (result) {
				bcrypt.compare(password, result.password, function (err, response) {
					if (response) {
						bcrypt.hash(resetPassword, saltRounds, async (error, hash) => {
							console.log(hash)
							await User.updateOne(
								{ email: email },
								{ $set: { password: hash } }
							);

							res.json({
								message: 'Password changed successfully.',
								status: 200,
							})
						});

					} else {
						res.json({
							message: 'Invalid password',
							status: 404,
						})
					}
				});
			} else if (!result) {
				res.json({
					message: 'User not found.',
					status: 404,
				})
			}
		})
	} else {
		res.json({
			message: 'Please enter email and password.',
			status: 404,
		})
	}
};

module.exports = ChangePassword;