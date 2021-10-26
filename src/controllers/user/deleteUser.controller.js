const User = require('../../../models/user');
const bcrypt = require("bcrypt");

const DeleteUser = async (req, res) => {
	const { email, password } = req.body;
	if (email && password) {
		const result = await User.findOne({ email });

		if (result) {
			bcrypt.compare(password, result.password, (err, resp) => {
				if (resp) {
					User.deleteOne({ email: email }, (err, response) => {
						if (response) {
							res.status(200).send({
								message: 'Deleted Successfully.',
								status: true,
								details: {
									email: result.email,
									userName: result.userName,
									id: result._id
								}
							})
						} else {
							res.status(400).send({
								message: 'Invalid details.',
								status: false,
							})
						}
					});
				} else {
					res.status(400).send({
						message: 'Invalid password',
						status: false,
					})
				}
			});
		} else if (!result) {
			res.status(400).send({
				message: 'User not found.',
				status: false,
			})
		}

	} else {
		res.json({
			message: 'Please enter email and password.',
			status: 404,
		})
	}
}

module.exports = DeleteUser;