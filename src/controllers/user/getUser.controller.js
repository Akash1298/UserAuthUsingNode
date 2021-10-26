const User = require('../../../models/user');

const GetUser = async (req, res) => {
	const { email } = req.body;
	if (email) {
		const user = await User.findOne({ email });

		if (user) {
			res.json({
				message: 'User found',
				status: 200,
				details: {
					email: user.email,
					userName: user.userName,
					id: user._id
				}
			})
		} else if (!user) {
			res.status(400).send({
				message: 'User not found',
				status: false,
			})
		}
		else {
			res.status(400).send({
				message: 'Please provide email.',
				status: false,
			})
		}
	}
}

module.exports = GetUser;