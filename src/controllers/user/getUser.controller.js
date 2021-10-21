const User = require('../../../models/user');

const GetUser = (req, res) => {
	const { email } = req.body;
	if (email) {
		User.findOne({ email: email }, function (err, result) {
			if (result) {
				res.json({
					message: 'User found',
					status: 200,
					details: {
						email: result.email,
						userName: result.userName,
						id: result._id
					}
				})
			} else if (!result) {
				res.json({
					message: 'User not found',
					status: 404,
				})
			}
		})
	} else {
		res.json({
			message: 'Please provide email.',
			status: 404,
		})
	}
}

module.exports = GetUser;