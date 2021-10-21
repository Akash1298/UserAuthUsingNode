const User = require('../../../models/user');
const bcrypt = require("bcrypt");

const DeleteUser = (req, res) => {
	const { email, password } = req.body;
	if (email && password) {
		User.findOne({ email: email }, function (err, result) {
			if (result) {
				bcrypt.compare(password, result.password, function (err, resp) {
					if (resp) {
						User.deleteOne({ email: email }, function (err, response) {
							if (response) {
								res.json({
									message: 'Deleted Successfully.',
									status: 200,
									details: {
										email: result.email,
										userName: result.userName,
										id: result._id
									}
								})
							} else {
								res.json({
									message: 'Invalid details.',
									status: 404,
								})
							}
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
}

module.exports = DeleteUser;