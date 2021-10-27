const User = require('../../../models/user');
const bcrypt = require("bcrypt");
const saltRounds = 10

const ChangePassword = async (req, res) => {
	const { email, password, resetPassword } = req.body;
	if (email && password && resetPassword) {
		const result = await User.findOne({ email: email })
		if (result) {
			bcrypt.compare(password, result.password, (err, response) => {
				if (response) {
					bcrypt.hash(resetPassword, saltRounds, async (error, hash) => {
						await User.updateOne(
							{ email: email },
							{ $set: { password: hash } }
						);

						return res.status(200).json({
							message: 'Password changed successfully.',
							status: true,
						})
					});

				} else {
					return res.status(400).json({
						message: 'Invalid password',
						status: false,
					})
				}
			});
		} else if (!result) {
			return res.status(400).json({
				message: 'User not found.',
				status: false,
			})
		}
	} else {
		return res.status(400).json({
			message: 'Please enter email and password.',
			status: false,
		})
	}
};

module.exports = ChangePassword;