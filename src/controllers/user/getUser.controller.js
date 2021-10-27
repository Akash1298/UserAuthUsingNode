const User = require('../../../models/user');

const GetUser = async (req, res) => {
	const { email } = req.body;
	if (email) {
		const user = await User.findOne({ email });

		if (user) {
			return res.status(200).json({
				message: 'User found',
				status: true,
				details: {
					email: user.email,
					userName: user.userName,
					id: user._id
				}
			})
		} else if (!user) {
			return res.status(400).json({
				message: 'User not found',
				status: false,
			})
		}
		else {
			return res.status(400).json({
				message: 'Please provide email.',
				status: false,
			})
		}
	}
}

module.exports = GetUser;